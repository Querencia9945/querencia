
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-7xl mx-auto py-8 px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Visitor Dashboard</h1>
          <p className="text-gray-600">Welcome back! Here's what's available for you.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => navigate('/attendance')}>
            <CardHeader>
              <CardTitle className="text-blue-600">Attendance Form</CardTitle>
              <CardDescription>
                Mark your attendance for events and sessions you're participating in.
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
                Manage your tasks and keep track of your goals and commitments.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="ghost" className="text-green-600 hover:text-green-700">
                View Tasks →
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button 
              variant="outline"
              onClick={() => navigate('/events')}
              className="h-20 text-left justify-start"
            >
              <div>
                <div className="font-semibold">Browse Events</div>
                <div className="text-sm text-gray-600">Find upcoming events</div>
              </div>
            </Button>
            <Button 
              variant="outline"
              onClick={() => navigate('/internships')}
              className="h-20 text-left justify-start"
            >
              <div>
                <div className="font-semibold">View Internships</div>
                <div className="text-sm text-gray-600">Explore opportunities</div>
              </div>
            </Button>
            <Button 
              variant="outline"
              onClick={() => navigate('/faqs')}
              className="h-20 text-left justify-start"
            >
              <div>
                <div className="font-semibold">Get Help</div>
                <div className="text-sm text-gray-600">Check FAQs</div>
              </div>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
