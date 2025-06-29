
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import Header from "@/components/Header";
import AIChat from "@/components/AIChat";

const Dashboard = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  // Fetch user's todos
  const { data: todos } = useQuery({
    queryKey: ['todos', user?.id],
    queryFn: async () => {
      if (!user) return [];
      const { data, error } = await supabase
        .from('todos')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false })
        .limit(5);
      
      if (error) throw error;
      return data;
    },
    enabled: !!user
  });

  // Fetch upcoming events
  const { data: events } = useQuery({
    queryKey: ['events'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('events')
        .select('*')
        .gte('event_date', new Date().toISOString())
        .order('event_date', { ascending: true })
        .limit(3);
      
      if (error) throw error;
      return data;
    }
  });

  // Fetch user's notifications
  const { data: notifications } = useQuery({
    queryKey: ['notifications', user?.id],
    queryFn: async () => {
      if (!user) return [];
      const { data, error } = await supabase
        .from('notifications')
        .select('*')
        .eq('user_id', user.id)
        .eq('read', false)
        .order('created_at', { ascending: false })
        .limit(5);
      
      if (error) throw error;
      return data;
    },
    enabled: !!user
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-7xl mx-auto py-8 px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, {user?.username || 'User'}!</h1>
          <p className="text-gray-600">Here's what's happening on your dashboard.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Quick Actions */}
          <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => navigate('/attendance')}>
            <CardHeader>
              <CardTitle className="text-blue-600">Attendance Form</CardTitle>
              <CardDescription>
                Mark your attendance for events and sessions.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="ghost" className="text-blue-600 hover:text-blue-700">
                Fill Attendance →
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => navigate('/todo')}>
            <CardHeader>
              <CardTitle className="text-green-600">To Do List</CardTitle>
              <CardDescription>
                Manage your tasks and commitments.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="ghost" className="text-green-600 hover:text-green-700">
                View Tasks →
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => navigate('/events')}>
            <CardHeader>
              <CardTitle className="text-purple-600">Browse Events</CardTitle>
              <CardDescription>
                Discover upcoming events and register.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="ghost" className="text-purple-600 hover:text-purple-700">
                View Events →
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Todos */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Tasks</CardTitle>
              <CardDescription>Your latest todos and priorities</CardDescription>
            </CardHeader>
            <CardContent>
              {todos && todos.length > 0 ? (
                <div className="space-y-2">
                  {todos.map((todo) => (
                    <div key={todo.id} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                      <span className={todo.completed ? 'line-through text-gray-500' : ''}>{todo.title}</span>
                      <span className={`text-xs px-2 py-1 rounded ${
                        todo.priority === 'high' ? 'bg-red-100 text-red-600' :
                        todo.priority === 'medium' ? 'bg-yellow-100 text-yellow-600' :
                        'bg-green-100 text-green-600'
                      }`}>
                        {todo.priority}
                      </span>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500">No tasks yet. Create your first todo!</p>
              )}
            </CardContent>
          </Card>

          {/* AI Chat */}
          <AIChat />
        </div>

        {/* Upcoming Events */}
        {events && events.length > 0 && (
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Upcoming Events</CardTitle>
              <CardDescription>Don't miss these upcoming events</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {events.map((event) => (
                  <div key={event.id} className="p-4 border rounded-lg">
                    <h3 className="font-semibold">{event.title}</h3>
                    <p className="text-sm text-gray-600">{event.location}</p>
                    <p className="text-sm text-blue-600">
                      {new Date(event.event_date).toLocaleDateString()}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Notifications */}
        {notifications && notifications.length > 0 && (
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Recent Notifications</CardTitle>
              <CardDescription>Stay updated with the latest news</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {notifications.map((notification) => (
                  <div key={notification.id} className="p-3 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-blue-900">{notification.title}</h4>
                    <p className="text-blue-700 text-sm">{notification.message}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
