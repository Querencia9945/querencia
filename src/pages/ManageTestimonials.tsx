
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import { Trash2, Edit, Plus, Star } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const ManageTestimonials = () => {
  const [editingTestimonial, setEditingTestimonial] = useState<any>(null);
  const [testimonialForm, setTestimonialForm] = useState({
    user_name: '',
    content: '',
    rating: 5,
    is_approved: true
  });
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  // Fetch testimonials
  const { data: testimonials, isLoading } = useQuery({
    queryKey: ['testimonials'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('testimonials')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      return data;
    }
  });

  // Create/Update testimonial mutation
  const testimonialMutation = useMutation({
    mutationFn: async (testimonialData: any) => {
      if (editingTestimonial) {
        const { error } = await supabase
          .from('testimonials')
          .update(testimonialData)
          .eq('id', editingTestimonial.id);
        if (error) throw error;
      } else {
        // For new testimonials, we need a dummy user_id since it's required
        const { error } = await supabase
          .from('testimonials')
          .insert([{
            ...testimonialData,
            user_id: 'employee-1' // Using dummy ID for employee-created testimonials
          }]);
        if (error) throw error;
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['testimonials'] });
      toast({
        title: "Success",
        description: editingTestimonial ? "Success story updated successfully" : "Success story created successfully"
      });
      resetForm();
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive"
      });
    }
  });

  // Delete testimonial mutation
  const deleteMutation = useMutation({
    mutationFn: async (testimonialId: string) => {
      const { error } = await supabase
        .from('testimonials')
        .delete()
        .eq('id', testimonialId);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['testimonials'] });
      toast({
        title: "Success",
        description: "Success story deleted successfully"
      });
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive"
      });
    }
  });

  const resetForm = () => {
    setTestimonialForm({
      user_name: '',
      content: '',
      rating: 5,
      is_approved: true
    });
    setEditingTestimonial(null);
    setIsDialogOpen(false);
  };

  const handleEdit = (testimonial: any) => {
    setEditingTestimonial(testimonial);
    setTestimonialForm({
      user_name: testimonial.user_name || '',
      content: testimonial.content,
      rating: testimonial.rating || 5,
      is_approved: testimonial.is_approved
    });
    setIsDialogOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    testimonialMutation.mutate(testimonialForm);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="flex items-center justify-center py-20">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-7xl mx-auto py-8 px-4">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Manage Success Stories</h1>
            <p className="text-gray-600">Create, edit, and manage testimonials and success stories.</p>
          </div>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button onClick={() => resetForm()} className="bg-purple-600 hover:bg-purple-700">
                <Plus className="w-4 h-4 mr-2" />
                Add Success Story
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>{editingTestimonial ? 'Edit Success Story' : 'Create New Success Story'}</DialogTitle>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="user_name">User Name</Label>
                  <Input
                    id="user_name"
                    value={testimonialForm.user_name}
                    onChange={(e) => setTestimonialForm({...testimonialForm, user_name: e.target.value})}
                    placeholder="Enter user's name"
                  />
                </div>
                <div>
                  <Label htmlFor="content">Success Story</Label>
                  <Textarea
                    id="content"
                    value={testimonialForm.content}
                    onChange={(e) => setTestimonialForm({...testimonialForm, content: e.target.value})}
                    rows={5}
                    required
                    placeholder="Share the success story..."
                  />
                </div>
                <div>
                  <Label htmlFor="rating">Rating</Label>
                  <Input
                    id="rating"
                    type="number"
                    min="1"
                    max="5"
                    value={testimonialForm.rating}
                    onChange={(e) => setTestimonialForm({...testimonialForm, rating: parseInt(e.target.value)})}
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="is_approved"
                    checked={testimonialForm.is_approved}
                    onChange={(e) => setTestimonialForm({...testimonialForm, is_approved: e.target.checked})}
                  />
                  <Label htmlFor="is_approved">Approved for public display</Label>
                </div>
                <div className="flex justify-end space-x-2">
                  <Button type="button" variant="outline" onClick={resetForm}>
                    Cancel
                  </Button>
                  <Button type="submit" disabled={testimonialMutation.isPending}>
                    {testimonialMutation.isPending ? 'Saving...' : (editingTestimonial ? 'Update' : 'Create')}
                  </Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials?.map((testimonial) => (
            <Card key={testimonial.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-lg">{testimonial.user_name || 'Anonymous'}</CardTitle>
                    <div className="flex items-center mt-1">
                      {renderStars(testimonial.rating || 5)}
                    </div>
                  </div>
                  <span className={`px-2 py-1 text-xs rounded ${testimonial.is_approved ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                    {testimonial.is_approved ? 'Approved' : 'Pending'}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4 line-clamp-3">{testimonial.content}</p>
                <p className="text-sm text-gray-500 mb-4">
                  {new Date(testimonial.created_at).toLocaleDateString()}
                </p>
                <div className="flex justify-end space-x-2">
                  <Button variant="outline" size="sm" onClick={() => handleEdit(testimonial)}>
                    <Edit className="w-4 h-4" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => deleteMutation.mutate(testimonial.id)}
                    disabled={deleteMutation.isPending}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {testimonials?.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No success stories found. Create your first story!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ManageTestimonials;
