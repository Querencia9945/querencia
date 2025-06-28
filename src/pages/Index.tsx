
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Welcome to <span className="text-blue-600">Querencia</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Your comprehensive platform for event management, professional development, and community building. 
            Connect, learn, and grow with us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              onClick={() => navigate('/login')}
              className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4"
            >
              Get Started
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={() => navigate('/about')}
              className="text-lg px-8 py-4"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Explore Our Platform
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => navigate('/events')}>
              <CardHeader>
                <CardTitle className="text-blue-600">Events Management</CardTitle>
                <CardDescription>
                  Discover and manage upcoming events, register for sessions, and track your participation.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="ghost" className="text-blue-600 hover:text-blue-700">
                  Explore Events →
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => navigate('/internships')}>
              <CardHeader>
                <CardTitle className="text-green-600">Internships</CardTitle>
                <CardDescription>
                  Find internship opportunities and advance your career with our curated programs.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="ghost" className="text-green-600 hover:text-green-700">
                  View Opportunities →
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => navigate('/testimonials')}>
              <CardHeader>
                <CardTitle className="text-purple-600">Success Stories</CardTitle>
                <CardDescription>
                  Read testimonials from our community members and their journey with Querencia.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="ghost" className="text-purple-600 hover:text-purple-700">
                  Read Stories →
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
