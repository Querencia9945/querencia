
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import { Trash2, Edit, Plus } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const ManageInternships = () => {
  const [editingInternship, setEditingInternship] = useState<any>(null);
  const [internshipForm, setInternshipForm] = useState({
    title: '',
    company: '',
    description: '',
    requirements: '',
    location: '',
    type: 'full-time',
    application_deadline: '',
    is_active: true
  });
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  // Fetch internships
  const { data: internships, isLoading } = useQuery({
    queryKey: ['internships'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('internships')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      return data;
    }
  });

  // Create/Update internship mutation
  const internshipMutation = useMutation({
    mutationFn: async (internshipData: any) => {
      if (editingInternship) {
        const { error } = await supabase
          .from('internships')
          .update(internshipData)
          .eq('id', editingInternship.id);
        if (error) throw error;
      } else {
        const { error } = await supabase
          .from('internships')
          .insert([internshipData]);
        if (error) throw error;
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['internships'] });
      toast({
        title: "Success",
        description: editingInternship ? "Internship updated successfully" : "Internship created successfully"
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

  // Delete internship mutation
  const deleteMutation = useMutation({
    mutationFn: async (internshipId: string) => {
      const { error } = await supabase
        .from('internships')
        .delete()
        .eq('id', internshipId);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['internships'] });
      toast({
        title: "Success",
        description: "Internship deleted successfully"
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
    setInternshipForm({
      title: '',
      company: '',
      description: '',
      requirements: '',
      location: '',
      type: 'full-time',
      application_deadline: '',
      is_active: true
    });
    setEditingInternship(null);
    setIsDialogOpen(false);
  };

  const handleEdit = (internship: any) => {
    setEditingInternship(internship);
    setInternshipForm({
      title: internship.title,
      company: internship.company,
      description: internship.description || '',
      requirements: internship.requirements || '',
      location: internship.location || '',
      type: internship.type || 'full-time',
      application_deadline: internship.application_deadline ? new Date(internship.application_deadline).toISOString().slice(0, 10) : '',
      is_active: internship.is_active
    });
    setIsDialogOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const internshipData = {
      ...internshipForm,
      application_deadline: internshipForm.application_deadline ? new Date(internshipForm.application_deadline).toISOString() : null
    };
    internshipMutation.mutate(internshipData);
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
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Manage Internships</h1>
            <p className="text-gray-600">Create, edit, and manage internship opportunities.</p>
          </div>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button onClick={() => resetForm()} className="bg-green-600 hover:bg-green-700">
                <Plus className="w-4 h-4 mr-2" />
                Add Internship
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>{editingInternship ? 'Edit Internship' : 'Create New Internship'}</DialogTitle>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="title">Job Title</Label>
                  <Input
                    id="title"
                    value={internshipForm.title}
                    onChange={(e) => setInternshipForm({...internshipForm, title: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="company">Company</Label>
                  <Input
                    id="company"
                    value={internshipForm.company}
                    onChange={(e) => setInternshipForm({...internshipForm, company: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    value={internshipForm.description}
                    onChange={(e) => setInternshipForm({...internshipForm, description: e.target.value})}
                    rows={3}
                  />
                </div>
                <div>
                  <Label htmlFor="requirements">Requirements</Label>
                  <Textarea
                    id="requirements"
                    value={internshipForm.requirements}
                    onChange={(e) => setInternshipForm({...internshipForm, requirements: e.target.value})}
                    rows={3}
                  />
                </div>
                <div>
                  <Label htmlFor="location">Location</Label>
                  <Input
                    id="location"
                    value={internshipForm.location}
                    onChange={(e) => setInternshipForm({...internshipForm, location: e.target.value})}
                  />
                </div>
                <div>
                  <Label htmlFor="type">Type</Label>
                  <Select value={internshipForm.type} onValueChange={(value) => setInternshipForm({...internshipForm, type: value})}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="full-time">Full-time</SelectItem>
                      <SelectItem value="part-time">Part-time</SelectItem>
                      <SelectItem value="remote">Remote</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="application_deadline">Application Deadline</Label>
                  <Input
                    id="application_deadline"
                    type="date"
                    value={internshipForm.application_deadline}
                    onChange={(e) => setInternshipForm({...internshipForm, application_deadline: e.target.value})}
                  />
                </div>
                <div className="flex justify-end space-x-2">
                  <Button type="button" variant="outline" onClick={resetForm}>
                    Cancel
                  </Button>
                  <Button type="submit" disabled={internshipMutation.isPending}>
                    {internshipMutation.isPending ? 'Saving...' : (editingInternship ? 'Update' : 'Create')}
                  </Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {internships?.map((internship) => (
            <Card key={internship.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">{internship.title}</CardTitle>
                <CardDescription>
                  {internship.company}
                  {internship.location && ` • ${internship.location}`}
                  <span className={`ml-2 px-2 py-1 text-xs rounded ${internship.is_active ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                    {internship.is_active ? 'Active' : 'Inactive'}
                  </span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-2">{internship.description}</p>
                <p className="text-sm text-gray-500 mb-2">Type: {internship.type}</p>
                {internship.application_deadline && (
                  <p className="text-sm text-gray-500 mb-4">
                    Deadline: {new Date(internship.application_deadline).toLocaleDateString()}
                  </p>
                )}
                <div className="flex justify-end space-x-2">
                  <Button variant="outline" size="sm" onClick={() => handleEdit(internship)}>
                    <Edit className="w-4 h-4" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => deleteMutation.mutate(internship.id)}
                    disabled={deleteMutation.isPending}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {internships?.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No internships found. Create your first internship!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ManageInternships;
