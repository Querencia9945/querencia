
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";

const AttendanceForm = () => {
  const [selectedEvent, setSelectedEvent] = useState("");
  const [notes, setNotes] = useState("");
  const { user } = useAuth();
  const { toast } = useToast();
  const queryClient = useQueryClient();

  // Fetch events
  const { data: events, isLoading: eventsLoading } = useQuery({
    queryKey: ['events'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('events')
        .select('*')
        .order('event_date', { ascending: true });
      
      if (error) throw error;
      return data;
    }
  });

  // Submit attendance
  const attendanceMutation = useMutation({
    mutationFn: async ({ eventId, notes }: { eventId: string; notes: string }) => {
      const { data, error } = await supabase
        .from('attendance')
        .insert({
          user_id: user!.id,
          event_id: eventId,
          notes: notes.trim() || null
        });
      
      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      toast({
        title: "Success!",
        description: "Your attendance has been recorded.",
      });
      setSelectedEvent("");
      setNotes("");
      queryClient.invalidateQueries({ queryKey: ['attendance'] });
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to record attendance.",
        variant: "destructive"
      });
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedEvent) {
      toast({
        title: "Error",
        description: "Please select an event.",
        variant: "destructive"
      });
      return;
    }
    
    attendanceMutation.mutate({ eventId: selectedEvent, notes });
  };

  if (eventsLoading) {
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
      <div className="max-w-2xl mx-auto py-8 px-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Attendance Form</CardTitle>
            <CardDescription>
              Please select an event to mark your attendance.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="event">Select Event</Label>
                <Select value={selectedEvent} onValueChange={setSelectedEvent}>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose an event" />
                  </SelectTrigger>
                  <SelectContent>
                    {events?.map((event) => (
                      <SelectItem key={event.id} value={event.id}>
                        {event.title} - {new Date(event.event_date).toLocaleDateString()}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="notes">Additional Notes (Optional)</Label>
                <Textarea
                  id="notes"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Any additional comments or feedback..."
                  rows={4}
                />
              </div>

              <Button 
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700"
                disabled={attendanceMutation.isPending}
              >
                {attendanceMutation.isPending ? "Recording..." : "Submit Attendance"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AttendanceForm;
