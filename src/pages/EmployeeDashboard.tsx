
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";

const EmployeeDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-7xl mx-auto py-8 px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Employee Dashboard</h1>
          <p className="text-gray-600">Manage events, track attendance, and oversee platform activities.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => navigate('/events')}>
            <CardHeader>
              <CardTitle className="text-blue-600">Event Management</CardTitle>
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

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-green-600">Attendance Tracking</CardTitle>
              <CardDescription>
                Monitor event attendance, generate reports, and track participation metrics.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="ghost" className="text-green-600 hover:text-green-700">
                View Reports →
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-purple-600">User Management</CardTitle>
              <CardDescription>
                Manage user accounts, permissions, and platform access controls.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="ghost" className="text-purple-600 hover:text-purple-700">
                Manage Users →
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => navigate('/internships')}>
            <CardHeader>
              <CardTitle className="text-orange-600">Internship Programs</CardTitle>
              <CardDescription>
                Create and manage internship opportunities and track applications.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="ghost" className="text-orange-600 hover:text-orange-700">
                Manage Programs →
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-red-600">Analytics</CardTitle>
              <CardDescription>
                View platform analytics, user engagement, and performance metrics.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="ghost" className="text-red-600 hover:text-red-700">
                View Analytics →
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => navigate('/testimonials')}>
            <CardHeader>
              <CardTitle className="text-teal-600">Content Management</CardTitle>
              <CardDescription>
                Manage testimonials, FAQs, and other platform content.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="ghost" className="text-teal-600 hover:text-teal-700">
                Manage Content →
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDashboard;
