
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FAQBot from "@/components/FAQBot";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section - Matching the provided design */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          {/* Logo and Title */}
          <div className="mb-8">
            <div className="w-64 h-64 mx-auto mb-8 relative">
              <div className="w-full h-full rounded-full border-8 border-green-700 flex items-center justify-center bg-white relative">
                {/* Decorative leaves */}
                <div className="absolute -top-4 -right-4 text-green-600 text-3xl">🌿</div>
                <div className="absolute -bottom-4 -left-4 text-green-600 text-3xl">🌿</div>
                <div className="absolute top-8 -left-8 text-green-600 text-2xl">🌿</div>
                <div className="absolute bottom-8 -right-8 text-green-600 text-2xl">🌿</div>
                
                <div className="text-center">
                  <h2 className="text-green-700 font-bold text-lg">QUERENCIA</h2>
                  <p className="text-gray-600 text-sm">Be your own strength</p>
                </div>
              </div>
            </div>
            
            <h1 className="text-6xl font-bold text-green-800 mb-4">
              QUERENCIA
            </h1>
            <p className="text-2xl text-gray-700 mb-8">
              Be your own strength
            </p>
            
            <Button 
              size="lg"
              onClick={() => navigate('/events')}
              className="bg-green-700 hover:bg-green-800 text-white text-lg px-12 py-4 rounded-full"
            >
              START YOUR JOURNEY
            </Button>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-7xl font-bold text-green-700 mb-2">4</h3>
              <p className="text-xl text-gray-600">City Reached</p>
            </div>
            <div>
              <h3 className="text-7xl font-bold text-green-700 mb-2">100+</h3>
              <p className="text-xl text-gray-600">Students Trained</p>
            </div>
            <div>
              <h3 className="text-7xl font-bold text-green-700 mb-2">10+</h3>
              <p className="text-xl text-gray-600">Success Stories</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-green-800 mb-8">CONTACT US</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <h3 className="text-3xl font-bold text-gray-800 mb-2">
                Reach Out To Us <span className="text-green-700">Anytime.</span>
              </h3>
            </div>
            
            <div className="text-right">
              <div className="mb-4">
                <p className="text-lg font-semibold text-gray-800">Email</p>
                <p className="text-lg text-gray-600">contact@querencia.org</p>
              </div>
              <div>
                <p className="text-lg font-semibold text-gray-800">Phone</p>
                <p className="text-lg text-gray-600">+91 9365477568</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Explore Our Platform
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => navigate('/events')}>
              <CardHeader>
                <CardTitle className="text-green-600">Events Management</CardTitle>
                <CardDescription>
                  Discover and manage upcoming events, register for sessions, and track your participation.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="ghost" className="text-green-600 hover:text-green-700">
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
                <CardTitle className="text-green-600">Success Stories</CardTitle>
                <CardDescription>
                  Read testimonials from our community members and their journey with Querencia.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="ghost" className="text-green-600 hover:text-green-700">
                  Read Stories →
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
      <FAQBot />
    </div>
  );
};

export default Index;
