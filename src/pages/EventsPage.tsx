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

  // Past events data with your categories
  const pastEventsData = [
    // Youth Parliaments and Skill Development Sessions
    {
      id: 'youth-1',
      title: 'Don Bosco Lichubari Model United Nations',
      category: 'Youth Parliaments and Skill Development Sessions',
      description: 'A comprehensive Model United Nations event focused on developing diplomatic and communication skills.',
      event_date: '2024-03-15T10:00:00Z',
      location: 'Don Bosco Lichubari, Assam'
    },
    {
      id: 'youth-2', 
      title: 'Don Bosco Baghchung Youth Parliament',
      category: 'Youth Parliaments and Skill Development Sessions',
      description: 'Youth parliament session designed to enhance leadership and public speaking abilities.',
      event_date: '2024-04-20T14:00:00Z',
      location: 'Don Bosco Baghchung'
    },
    {
      id: 'youth-3',
      title: 'Querencia Youth Parliament, Pragjyotika English School',
      category: 'Youth Parliaments and Skill Development Sessions', 
      description: 'Interactive youth parliament focusing on civic engagement and debate skills.',
      event_date: '2024-05-10T11:00:00Z',
      location: 'Pragjyotika English School'
    },
    {
      id: 'youth-4',
      title: 'Querencia Youth Parliament - Online Conferences',
      category: 'Youth Parliaments and Skill Development Sessions',
      description: 'Virtual youth parliament sessions accessible to students nationwide.',
      event_date: '2024-06-05T16:00:00Z',
      location: 'Online'
    },
    {
      id: 'youth-5',
      title: 'Querencia Skill Development Summit',
      category: 'Youth Parliaments and Skill Development Sessions',
      description: 'Comprehensive summit covering essential 21st century skills for youth development.',
      event_date: '2024-07-15T09:00:00Z',
      location: 'Multiple Venues'
    },
    // Meet ups and fun activities
    {
      id: 'meetup-1',
      title: 'North East Organisations Meet',
      category: 'Meet ups and fun activities',
      description: 'Networking event bringing together organizations from across Northeast India.',
      event_date: '2024-08-20T15:00:00Z',
      location: 'Guwahati, Assam'
    },
    {
      id: 'meetup-2',
      title: 'Define, 2025 - New Year Resolution Workshop',
      category: 'Meet ups and fun activities',
      description: 'Interactive workshop helping participants set and achieve meaningful goals for 2025.',
      event_date: '2024-12-28T10:00:00Z',
      location: 'Multiple Cities'
    },
    {
      id: 'meetup-3',
      title: 'Pehla Pyaar - the untold love stories',
      category: 'Meet ups and fun activities',
      description: 'Storytelling event celebrating first love experiences and emotional connections.',
      event_date: '2024-02-14T18:00:00Z',
      location: 'Community Centers'
    },
    // Social Welfare Initiatives
    {
      id: 'social-1',
      title: 'Food Donation Drives',
      category: 'Social Welfare Initiatives',
      description: 'Community-driven initiative to provide meals to those in need.',
      event_date: '2024-01-15T08:00:00Z',
      location: 'Various Locations'
    },
    {
      id: 'social-2',
      title: 'Cloth Donation Drives',
      category: 'Social Welfare Initiatives',
      description: 'Collecting and distributing clothing to underprivileged communities.',
      event_date: '2024-02-10T09:00:00Z',
      location: 'Various Locations'
    },
    {
      id: 'social-3',
      title: 'Educational Drives in slums',
      category: 'Social Welfare Initiatives',
      description: 'Educational outreach programs in underprivileged areas.',
      event_date: '2024-03-05T14:00:00Z',
      location: 'Urban Slums'
    },
    {
      id: 'social-4',
      title: 'Orphanage Visits',
      category: 'Social Welfare Initiatives',
      description: 'Regular visits to orphanages providing educational and recreational activities.',
      event_date: '2024-04-12T11:00:00Z',
      location: 'Local Orphanages'
    }
  ];

  // Upcoming events data
  const upcomingEventsData = [
    {
      id: 'upcoming-1',
      title: 'Don Bosco Lichubari Model United Nations 2.0',
      description: 'The second edition of our successful Model United Nations event.',
      event_date: '2025-03-15T10:00:00Z',
      location: 'Don Bosco Lichubari, Assam'
    },
    {
      id: 'upcoming-2',
      title: 'Skill development summits @Green Earth Guardians',
      description: 'Environmental awareness and skill development summit.',
      event_date: '2025-04-20T09:00:00Z',
      location: 'Green Earth Guardians Venue'
    }
  ];

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

  const groupEventsByCategory = (events: any[]) => {
    return events.reduce((groups: any, event: any) => {
      const category = event.category || 'Other';
      if (!groups[category]) {
        groups[category] = [];
      }
      groups[category].push(event);
      return groups;
    }, {});
  };

  return (
    <div className="min-h-screen bg-green-50">
      <Header />
      <div className="max-w-7xl mx-auto py-8 px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-green-900 mb-2">Events</h1>
          <p className="text-green-600">Discover and register for upcoming events and view past event details.</p>
        </div>

        <Tabs defaultValue="past" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 max-w-md">
            <TabsTrigger value="past">Past Events</TabsTrigger>
            <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
          </TabsList>

          <TabsContent value="past" className="space-y-8">
            {Object.entries(groupEventsByCategory(pastEventsData)).map(([category, events]: [string, any]) => (
              <div key={category}>
                <h2 className="text-2xl font-bold text-green-800 mb-6">{category}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {events.map((event: any) => (
                    <Card key={event.id} className="hover:shadow-lg transition-shadow bg-white border-green-200">
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <CardTitle className="text-xl text-green-800">{event.title}</CardTitle>
                          <Badge variant="outline" className="border-green-300 text-green-700">Completed</Badge>
                        </div>
                        <CardDescription className="text-green-600">
                          <div className="space-y-1">
                            <div>{formatDate(event.event_date)} at {formatTime(event.event_date)}</div>
                            {event.location && <div>{event.location}</div>}
                          </div>
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-green-700 mb-4">{event.description}</p>
                        <Button 
                          variant="outline"
                          onClick={() => setSelectedEvent(event)}
                          className="border-green-300 text-green-700 hover:bg-green-50"
                        >
                          View Details
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </TabsContent>

          <TabsContent value="upcoming" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingEventsData.map((event) => (
                <Card key={event.id} className="hover:shadow-lg transition-shadow bg-white border-green-200">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-xl text-green-800">{event.title}</CardTitle>
                      <Badge className="bg-green-600 text-white">Upcoming</Badge>
                    </div>
                    <CardDescription className="text-green-600">
                      <div className="space-y-1">
                        <div>{formatDate(event.event_date)} at {formatTime(event.event_date)}</div>
                        {event.location && <div>{event.location}</div>}
                      </div>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-green-700 mb-4">{event.description}</p>
                    <div className="flex space-x-2">
                      <Button className="bg-green-600 hover:bg-green-700 text-white">
                        Register
                      </Button>
                      <Button 
                        variant="outline"
                        onClick={() => setSelectedEvent(event)}
                        className="border-green-300 text-green-700 hover:bg-green-50"
                      >
                        Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Event Details Modal */}
        <Dialog open={!!selectedEvent} onOpenChange={() => setSelectedEvent(null)}>
          <DialogContent className="max-w-2xl bg-white">
            <DialogHeader>
              <DialogTitle className="text-green-800">{selectedEvent?.title}</DialogTitle>
            </DialogHeader>
            {selectedEvent && (
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-green-900 mb-2">Event Details</h3>
                  <div className="space-y-2 text-green-700">
                    <p><strong>Date:</strong> {formatDate(selectedEvent.event_date)}</p>
                    <p><strong>Time:</strong> {formatTime(selectedEvent.event_date)}</p>
                    {selectedEvent.location && <p><strong>Location:</strong> {selectedEvent.location}</p>}
                    {selectedEvent.category && <p><strong>Category:</strong> {selectedEvent.category}</p>}
                  </div>
                </div>
                {selectedEvent.description && (
                  <div>
                    <h3 className="font-semibold text-green-900 mb-2">Description</h3>
                    <p className="text-green-700">{selectedEvent.description}</p>
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
