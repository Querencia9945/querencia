
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FAQBot from "@/components/FAQBot";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const EventsPage = () => {
  const [selectedEvent, setSelectedEvent] = useState<any>(null);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  // Fetch upcoming events (events in the future)
  const { data: upcomingEvents, isLoading: upcomingLoading } = useQuery({
    queryKey: ['events', 'upcoming'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('events')
        .select('*')
        .gte('event_date', new Date().toISOString())
        .order('event_date', { ascending: true });
      
      if (error) throw error;
      return data;
    }
  });

  // Fetch past events (events in the past)
  const { data: pastEvents, isLoading: pastLoading } = useQuery({
    queryKey: ['events', 'past'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('events')
        .select('*')
        .lt('event_date', new Date().toISOString())
        .order('event_date', { ascending: false });
      
      if (error) throw error;
      return data;
    }
  });

  // Fetch user's event registrations
  const { data: userRegistrations } = useQuery({
    queryKey: ['attendance', 'user'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('attendance')
        .select('event_id')
        .eq('user_id', (await supabase.auth.getUser()).data.user?.id);
      
      if (error) throw error;
      return data?.map(reg => reg.event_id) || [];
    }
  });

  // Register for event mutation
  const registerMutation = useMutation({
    mutationFn: async (eventId: string) => {
      const { data: userData } = await supabase.auth.getUser();
      if (!userData.user) throw new Error('Please log in to register for events');

      const { error } = await supabase
        .from('attendance')
        .insert([{
          user_id: userData.user.id,
          event_id: eventId,
          attended_at: new Date().toISOString()
        }]);
      
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['attendance', 'user'] });
      toast({
        title: "Success",
        description: "Successfully registered for the event!"
      });
    },
    onError: (error: any) => {
      toast({
        title: "Registration Failed",
        description: error.message || "Failed to register for the event",
        variant: "destructive"
      });
    }
  });

  const handleRegister = async (eventId: string) => {
    const { data: userData } = await supabase.auth.getUser();
    if (!userData.user) {
      toast({
        title: "Please Log In",
        description: "You need to be logged in to register for events",
        variant: "destructive"
      });
      return;
    }
    registerMutation.mutate(eventId);
  };

  const isRegistered = (eventId: string) => {
    return userRegistrations?.includes(eventId) || false;
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatTime = (dateString: string) => {
    return new Date(dateString).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-7xl mx-auto py-8 px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Events</h1>
          <p className="text-gray-600">Discover and register for upcoming events and view past event details.</p>
        </div>

        <Tabs defaultValue="upcoming" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 max-w-md">
            <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
            <TabsTrigger value="past">Past Events</TabsTrigger>
          </TabsList>

          <TabsContent value="upcoming" className="space-y-6">
            {upcomingLoading ? (
              <div className="flex items-center justify-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {upcomingEvents?.map((event) => (
                  <Card key={event.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-xl">{event.title}</CardTitle>
                        <Badge variant={isRegistered(event.id) ? "default" : "secondary"}>
                          {isRegistered(event.id) ? "Registered" : "Upcoming"}
                        </Badge>
                      </div>
                      <CardDescription>
                        <div className="space-y-1">
                          <div>{formatDate(event.event_date)} at {formatTime(event.event_date)}</div>
                          {event.location && <div>{event.location}</div>}
                        </div>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">{event.description}</p>
                      {event.max_attendees && (
                        <p className="text-sm text-gray-500 mb-4">Max attendees: {event.max_attendees}</p>
                      )}
                      <div className="flex space-x-2">
                        <Button 
                          onClick={() => handleRegister(event.id)}
                          className="bg-green-600 hover:bg-green-700"
                          disabled={isRegistered(event.id) || registerMutation.isPending}
                        >
                          {registerMutation.isPending ? "Registering..." : 
                           isRegistered(event.id) ? "Registered" : "Register"}
                        </Button>
                        <Button 
                          variant="outline"
                          onClick={() => setSelectedEvent(event)}
                        >
                          Details
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
                {upcomingEvents?.length === 0 && (
                  <div className="col-span-full text-center py-12">
                    <p className="text-gray-500">No upcoming events found.</p>
                  </div>
                )}
              </div>
            )}
          </TabsContent>

          <TabsContent value="past" className="space-y-6">
            {pastLoading ? (
              <div className="flex items-center justify-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {pastEvents?.map((event) => (
                  <Card key={event.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-xl">{event.title}</CardTitle>
                        <Badge variant="outline">Completed</Badge>
                      </div>
                      <CardDescription>
                        <div className="space-y-1">
                          <div>{formatDate(event.event_date)} at {formatTime(event.event_date)}</div>
                          {event.location && <div>{event.location}</div>}
                        </div>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">{event.description}</p>
                      <Button 
                        variant="outline"
                        onClick={() => setSelectedEvent(event)}
                      >
                        View Details
                      </Button>
                    </CardContent>
                  </Card>
                ))}
                {pastEvents?.length === 0 && (
                  <div className="col-span-full text-center py-12">
                    <p className="text-gray-500">No past events found.</p>
                  </div>
                )}
              </div>
            )}
          </TabsContent>
        </Tabs>

        {/* Event Details Modal */}
        <Dialog open={!!selectedEvent} onOpenChange={() => setSelectedEvent(null)}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>{selectedEvent?.title}</DialogTitle>
            </DialogHeader>
            {selectedEvent && (
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Event Details</h3>
                  <div className="space-y-2 text-gray-600">
                    <p><strong>Date:</strong> {formatDate(selectedEvent.event_date)}</p>
                    <p><strong>Time:</strong> {formatTime(selectedEvent.event_date)}</p>
                    {selectedEvent.location && <p><strong>Location:</strong> {selectedEvent.location}</p>}
                    {selectedEvent.max_attendees && <p><strong>Max Attendees:</strong> {selectedEvent.max_attendees}</p>}
                  </div>
                </div>
                {selectedEvent.description && (
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Description</h3>
                    <p className="text-gray-600">{selectedEvent.description}</p>
                  </div>
                )}
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
      <Footer />
      <FAQBot />
    </div>
  );
};

export default EventsPage;
