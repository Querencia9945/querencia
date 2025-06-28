
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const EventsPage = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const upcomingEvents = [
    {
      id: 1,
      title: "Tech Innovation Summit",
      date: "2024-07-15",
      time: "10:00 AM",
      location: "Convention Center",
      description: "Join industry leaders for cutting-edge technology discussions.",
      status: "upcoming"
    },
    {
      id: 2,
      title: "Career Development Workshop",
      date: "2024-07-20",
      time: "2:00 PM",
      location: "Meeting Room A",
      description: "Professional development and career growth strategies.",
      status: "upcoming"
    },
    {
      id: 3,
      title: "Networking Mixer",
      date: "2024-07-25",
      time: "6:00 PM",
      location: "Rooftop Lounge",
      description: "Connect with professionals from various industries.",
      status: "upcoming"
    }
  ];

  const pastEvents = [
    {
      id: 4,
      title: "AI & Machine Learning Conference",
      date: "2024-06-10",
      time: "9:00 AM",
      location: "Auditorium",
      description: "Deep dive into AI technologies and applications.",
      status: "completed"
    },
    {
      id: 5,
      title: "Startup Pitch Competition",
      date: "2024-06-05",
      time: "1:00 PM",
      location: "Innovation Hub",
      description: "Entrepreneurs showcase their innovative ideas.",
      status: "completed"
    }
  ];

  const handleRegister = (eventId) => {
    console.log("Registering for event:", eventId);
    // Registration logic would go here
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingEvents.map((event) => (
                <Card key={event.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-xl">{event.title}</CardTitle>
                      <Badge variant="secondary">Upcoming</Badge>
                    </div>
                    <CardDescription>
                      <div className="space-y-1">
                        <div>{event.date} at {event.time}</div>
                        <div>{event.location}</div>
                      </div>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{event.description}</p>
                    <div className="flex space-x-2">
                      <Button 
                        onClick={() => handleRegister(event.id)}
                        className="bg-blue-600 hover:bg-blue-700"
                      >
                        Register
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
            </div>
          </TabsContent>

          <TabsContent value="past" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pastEvents.map((event) => (
                <Card key={event.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-xl">{event.title}</CardTitle>
                      <Badge variant="outline">Completed</Badge>
                    </div>
                    <CardDescription>
                      <div className="space-y-1">
                        <div>{event.date} at {event.time}</div>
                        <div>{event.location}</div>
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
            </div>
          </TabsContent>
        </Tabs>
      </div>
      <Footer />
    </div>
  );
};

export default EventsPage;
