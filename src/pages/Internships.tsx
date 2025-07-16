
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FAQBot from "@/components/FAQBot";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const Internships = () => {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  // Fetch internships from Supabase
  const { data: internships, isLoading } = useQuery({
    queryKey: ['internships'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('internships')
        .select('*')
        .eq('is_active', true)
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      return data;
    }
  });

  // Apply for internship mutation
  const applyMutation = useMutation({
    mutationFn: async (internshipId: string) => {
      // This would typically create an application record
      // For now, we'll just show a success message
      return { success: true };
    },
    onSuccess: () => {
      toast({
        title: "Application Submitted",
        description: "Your internship application has been submitted successfully!"
      });
    },
    onError: (error: any) => {
      toast({
        title: "Application Failed",
        description: error.message || "Failed to submit application",
        variant: "destructive"
      });
    }
  });

  const handleApply = (internshipId: string) => {
    applyMutation.mutate(internshipId);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="flex items-center justify-center py-20">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-green-600"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-7xl mx-auto py-8 px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Internship Opportunities</h1>
          <p className="text-gray-600">Join our team of 150+ interns and help us equip youth with 21st century skills across 17+ cities.</p>
        </div>

        {/* Skill Development Framework Overview */}
        <Card className="mb-8 bg-green-50 border-green-200">
          <CardHeader>
            <CardTitle className="text-green-800">Querencia Skill Development Framework</CardTitle>
            <CardDescription className="text-green-600">
              Our comprehensive curriculum spans 6 core areas of 21st century skills development
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg border border-green-200">
                <h3 className="font-semibold text-green-800 mb-2">🚀 Entrepreneurship & Startup Simulation</h3>
                <p className="text-sm text-gray-600">Business strategy, marketing psychology, pitching skills, and Shark Tank simulations</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-green-200">
                <h3 className="font-semibold text-green-800 mb-2">🎤 Public Speaking</h3>
                <p className="text-sm text-gray-600">Persuasive speaking, debate strategy, spontaneous speaking, and mock tournaments</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-green-200">
                <h3 className="font-semibold text-green-800 mb-2">💡 Design Thinking</h3>
                <p className="text-sm text-gray-600">Logical thinking, fallacy identification, decision making, and critical thinking applications</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-green-200">
                <h3 className="font-semibold text-green-800 mb-2">💰 Financial & Media Literacy</h3>
                <p className="text-sm text-gray-600">Media bias awareness, digital branding, financial planning, and investment basics</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-green-200">
                <h3 className="font-semibold text-green-800 mb-2">🏆 Acing Speaking Competitions</h3>
                <p className="text-sm text-gray-600">Winning MUNs/debates, case studies, business pitching, and competition strategies</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-green-200">
                <h3 className="font-semibold text-green-800 mb-2">👥 Leadership & Soft Skills</h3>
                <p className="text-sm text-gray-600">Leadership psychology, negotiation, team management, and leadership simulations</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Internship Opportunities */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {internships && internships.length > 0 ? (
            internships.map((internship) => (
              <Card key={internship.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl mb-1">{internship.title}</CardTitle>
                      <CardDescription className="text-lg font-medium text-green-600">
                        {internship.company}
                      </CardDescription>
                    </div>
                    <Badge variant="default" className="bg-green-600">
                      {internship.type}
                    </Badge>
                  </div>
                  <div className="flex flex-wrap gap-2 text-sm text-gray-600">
                    {internship.location && <span>📍 {internship.location}</span>}
                    {internship.application_deadline && (
                      <span>📅 Apply by {formatDate(internship.application_deadline)}</span>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  {internship.description && (
                    <p className="text-gray-700 mb-4">{internship.description}</p>
                  )}
                  
                  {internship.requirements && (
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Requirements:</h4>
                      <p className="text-sm text-gray-600">{internship.requirements}</p>
                    </div>
                  )}

                  <div className="flex space-x-2">
                    <Button 
                      onClick={() => handleApply(internship.id)}
                      className="bg-green-600 hover:bg-green-700"
                      disabled={applyMutation.isPending}
                    >
                      {applyMutation.isPending ? 'Applying...' : 'Apply Now'}
                    </Button>
                    <Button variant="outline">
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-500 mb-4">No active internships at the moment.</p>
              <p className="text-sm text-gray-400">Check back soon for new opportunities to join our team!</p>
            </div>
          )}
        </div>

        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Why Intern with Querencia?</CardTitle>
            <CardDescription>
              Join our mission to equip youth with 21st century skills and make a real impact across India.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="font-semibold mb-2">Real Impact</h3>
                <p className="text-sm text-gray-600">Help train 10,000+ students across 17+ cities</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">👥</span>
                </div>
                <h3 className="font-semibold mb-2">Team of 150+</h3>
                <p className="text-sm text-gray-600">Join our dynamic team of passionate interns</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="font-semibold mb-2">Skill Development</h3>
                <p className="text-sm text-gray-600">Gain experience in our 6-module framework</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      <Footer />
      <FAQBot />
    </div>
  );
};

export default Internships;
