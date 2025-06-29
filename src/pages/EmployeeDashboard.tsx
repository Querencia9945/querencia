
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import AIChat from "@/components/AIChat";

const EmployeeDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-7xl mx-auto py-8 px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Employee Dashboard</h1>
          <p className="text-gray-600">Manage events, internships, testimonials, and oversee platform activities.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => navigate('/manage-events')}>
            <CardHeader>
              <CardTitle className="text-blue-600">Manage Events</CardTitle>
              <CardDescription>
                Create, edit, and manage events. View registrations and participant details.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="ghost" className="text-blue-600 hover:text-blue-700">
                Manage Events →
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => navigate('/manage-internships')}>
            <CardHeader>
              <CardTitle className="text-green-600">Manage Internships</CardTitle>
              <CardDescription>
                Create and manage internship opportunities and track applications.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="ghost" className="text-green-600 hover:text-green-700">
                Manage Internships →
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => navigate('/manage-testimonials')}>
            <CardHeader>
              <CardTitle className="text-purple-600">Success Stories</CardTitle>
              <CardDescription>
                Manage testimonials and success stories from users.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="ghost" className="text-purple-600 hover:text-purple-700">
                Manage Stories →
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <AIChat />
          
          <Card>
            <CardHeader>
              <CardTitle>Quick Stats</CardTitle>
              <CardDescription>Platform overview</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Total Events</span>
                  <span className="font-semibold">-</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Active Internships</span>
                  <span className="font-semibold">-</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Success Stories</span>
                  <span className="font-semibold">-</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDashboard;
