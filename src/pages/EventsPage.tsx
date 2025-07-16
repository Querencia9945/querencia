
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
    queryKey: ['event_registrations', 'user'],
    queryFn: async () => {
      const { data: userData } = await supabase.auth.getUser();
      if (!userData.user) return [];

      const { data, error } = await supabase
        .from('event_registrations')
        .select('event_id')
        .eq('user_id', userData.user.id);
      
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
        .from('event_registrations')
        .insert([{
          user_id: userData.user.id,
          event_id: eventId,
          status: 'registered'
        }]);
      
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['event_registrations', 'user'] });
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

  // Past events data with detailed descriptions
  const pastEventsData = [
    // Youth Parliaments and Skill Development Sessions
    {
      id: 'youth-1',
      title: 'Don Bosco Lichubari Model United Nations',
      category: 'Youth Parliaments and Skill Development Sessions',
      description: 'As the pioneering post-COVID Model United Nations conference in Jorhat, this event marked a significant return to in-person collaborative learning. It successfully brought together over 220 students from more than 20 schools across the region, fostering diplomatic discourse within 6 distinct committees. Notably, it was made accessible to a broader student base by being the most affordable conference in the circuit, underscoring our commitment to inclusive skill development.',
      event_date: '2024-03-15T10:00:00Z',
      location: 'Don Bosco Lichubari, Assam'
    },
    {
      id: 'youth-2', 
      title: 'Don Bosco Baghchung Youth Parliament',
      category: 'Youth Parliaments and Skill Development Sessions',
      description: 'This impactful one-day youth parliament engaged over 120 participants in a crucial discussion centered on Assam\'s pressing flood issues. Through simulated parliamentary proceedings, students honed their public speaking, critical thinking, and policy formulation skills, directly addressing real-world challenges.',
      event_date: '2024-04-20T14:00:00Z',
      location: 'Don Bosco Baghchung'
    },
    {
      id: 'youth-3',
      title: 'Querencia Youth Parliament, Pragjyotika English School',
      category: 'Youth Parliaments and Skill Development Sessions', 
      description: 'A large-scale one-day youth parliament, this event drew over 250 participants, providing an extensive platform for young voices to engage in meaningful debates and discussions on contemporary issues. It exemplified our capacity to mobilize and empower a significant number of students within a single impactful day.',
      event_date: '2024-05-10T11:00:00Z',
      location: 'Pragjyotika English School'
    },
    {
      id: 'youth-4',
      title: 'Querencia Youth Parliament - Online Conferences',
      category: 'Youth Parliaments and Skill Development Sessions',
      description: 'Extending our reach beyond geographical boundaries, these exclusive online conferences provided accessible platforms for youth to engage in timely discussions on current issues. These digital sessions ensure that students can continue to develop their civic awareness and argumentation skills from anywhere.',
      event_date: '2024-06-05T16:00:00Z',
      location: 'Online'
    },
    {
      id: 'youth-5',
      title: 'Querencia Skill Development Summit',
      category: 'Youth Parliaments and Skill Development Sessions',
      description: 'Our intensive, two-day summits typically engage over 30 participants in deep dives into essential 21st-century skills. These sessions are structured around our core curriculum, covering vital topics like Entrepreneurship & Startup Simulation, Public Speaking, Design Thinking, Financial and Media Literacy, Acing Speaking Competitions, and Leadership & Soft Skills, providing comprehensive training for future leaders.',
      event_date: '2024-07-15T09:00:00Z',
      location: 'Multiple Venues'
    },
    // Meet ups and fun activities
    {
      id: 'meetup-1',
      title: 'North East Organisations Meet',
      category: 'Meet ups and fun activities',
      description: 'This groundbreaking event was the first and only gathering in the North East dedicated to honoring social welfare NGOs. It brought together over 150 participants, including more than 60 NGO and NPO founders. This unique meet-up fostered a powerful environment where organizations shared their missions and collaboratively encouraged each other, strengthening the regional social welfare ecosystem.',
      event_date: '2024-08-20T15:00:00Z',
      location: 'Guwahati, Assam'
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
          <p className="text-green-700 mt-4 leading-relaxed">
            At Querencia, our commitment to empowering youth through 21st-century skills comes to life through a diverse array of impactful events. From rigorous skill development summits to engaging youth parliaments and heartwarming social welfare initiatives, we've had the privilege of hosting 25+ events that have cumulatively trained over 10,000 students and positively impacted over 10,000 happy members across 17+ cities. Each initiative is designed to foster critical thinking, leadership, and a sense of civic responsibility, helping young individuals truly become their own strength.
          </p>
        </div>

        <Tabs defaultValue="past" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 max-w-md">
            <TabsTrigger value="past">Past Events</TabsTrigger>
            <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
          </TabsList>

          <TabsContent value="past" className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-green-800 mb-4">Youth Parliaments and Skill Development Sessions</h2>
              <p className="text-green-700 mb-6">These flagship events are at the core of our mission, providing hands-on experience in public speaking, debate, and civic engagement, aligning with our comprehensive Querencia Skill Development Summit curriculum.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {pastEventsData.filter(event => event.category === 'Youth Parliaments and Skill Development Sessions').map((event: any) => (
                  <Card key={event.id} className="hover:shadow-lg transition-shadow bg-white border-green-200 cursor-pointer" onClick={() => setSelectedEvent(event)}>
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
                      <p className="text-green-700 mb-4 line-clamp-3">{event.description}</p>
                      <Button 
                        variant="outline"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedEvent(event);
                        }}
                        className="border-green-300 text-green-700 hover:bg-green-50"
                      >
                        View Details
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-green-800 mb-4">Meet ups and fun activities</h2>
              <p className="text-green-700 mb-6">These engaging activities are often carried out as a joint collaboration with our sister social welfare organization, "Guzaarish." They foster community, creativity, and personal development in an informal setting.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {pastEventsData.filter(event => event.category === 'Meet ups and fun activities').map((event: any) => (
                  <Card key={event.id} className="hover:shadow-lg transition-shadow bg-white border-green-200 cursor-pointer" onClick={() => setSelectedEvent(event)}>
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
                      <p className="text-green-700 mb-4 line-clamp-3">{event.description}</p>
                      <Button 
                        variant="outline"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedEvent(event);
                        }}
                        className="border-green-300 text-green-700 hover:bg-green-50"
                      >
                        View Details
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="upcoming" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Show database events first */}
              {upcomingEvents?.map((event) => (
                <Card key={event.id} className="hover:shadow-lg transition-shadow bg-white border-green-200 cursor-pointer" onClick={() => setSelectedEvent(event)}>
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
                      <Button 
                        className="bg-green-600 hover:bg-green-700 text-white"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleRegister(event.id);
                        }}
                        disabled={isRegistered(event.id) || registerMutation.isPending}
                      >
                        {isRegistered(event.id) ? 'Registered' : (registerMutation.isPending ? 'Registering...' : 'Register')}
                      </Button>
                      <Button 
                        variant="outline"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedEvent(event);
                        }}
                        className="border-green-300 text-green-700 hover:bg-green-50"
                      >
                        Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
              
              {/* Show hardcoded upcoming events */}
              {upcomingEventsData.map((event) => (
                <Card key={event.id} className="hover:shadow-lg transition-shadow bg-white border-green-200 cursor-pointer" onClick={() => setSelectedEvent(event)}>
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
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedEvent(event);
                        }}
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
          <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto bg-white">
            <DialogHeader>
              <DialogTitle className="text-green-800 text-2xl">{selectedEvent?.title}</DialogTitle>
            </DialogHeader>
            {selectedEvent && (
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-green-900 mb-3 text-lg">Event Details</h3>
                  <div className="space-y-2 text-green-700">
                    <p><strong>Date:</strong> {formatDate(selectedEvent.event_date)}</p>
                    <p><strong>Time:</strong> {formatTime(selectedEvent.event_date)}</p>
                    {selectedEvent.location && <p><strong>Location:</strong> {selectedEvent.location}</p>}
                    {selectedEvent.category && <p><strong>Category:</strong> {selectedEvent.category}</p>}
                  </div>
                </div>
                {selectedEvent.description && (
                  <div>
                    <h3 className="font-semibold text-green-900 mb-3 text-lg">Description</h3>
                    <p className="text-green-700 leading-relaxed">{selectedEvent.description}</p>
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
