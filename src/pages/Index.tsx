
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FAQBot from "@/components/FAQBot";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100">
      <Header />
      
      {/* Hero Section - Enhanced with animations and gradients */}
      <section className="relative py-20 px-4 min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating gradient orbs */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-green-400 to-green-600 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-green-300 to-green-500 rounded-full opacity-15 animate-bounce"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-r from-green-500 to-green-700 rounded-full opacity-10 animate-ping"></div>
          
          {/* Animated gradient background */}
          <div className="absolute inset-0 bg-gradient-to-r from-green-50/50 via-transparent to-green-50/50 animate-pulse"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          {/* Logo and Title */}
          <div className="mb-12 animate-fade-in">
            {/* Main Logo Circle with enhanced decorative elements */}
            <div className="w-80 h-80 mx-auto mb-12 relative group">
              {/* Rotating outer ring */}
              <div className="absolute inset-0 rounded-full border-4 border-green-200 animate-spin opacity-30"></div>
              <div className="absolute inset-2 rounded-full border-2 border-green-300 animate-spin opacity-20" style={{animationDirection: 'reverse', animationDuration: '8s'}}></div>
              
              {/* Main circular logo with gradient border */}
              <div className="w-full h-full rounded-full border-8 border-gradient-to-r from-green-600 via-green-700 to-green-800 bg-gradient-to-br from-white via-green-50 to-white shadow-2xl flex items-center justify-center relative overflow-visible group-hover:scale-105 transition-transform duration-500">
                {/* Enhanced decorative leaf elements with animations */}
                <div className="absolute -top-8 -right-8 text-green-600 text-4xl transform rotate-45 animate-bounce" style={{animationDelay: '0s'}}>🌿</div>
                <div className="absolute -bottom-8 -left-8 text-green-600 text-4xl transform -rotate-45 animate-bounce" style={{animationDelay: '0.5s'}}>🌿</div>
                <div className="absolute top-4 -left-12 text-green-600 text-3xl transform -rotate-12 animate-bounce" style={{animationDelay: '1s'}}>🌿</div>
                <div className="absolute bottom-4 -right-12 text-green-600 text-3xl transform rotate-12 animate-bounce" style={{animationDelay: '1.5s'}}>🌿</div>
                <div className="absolute -top-4 left-8 text-green-600 text-2xl transform rotate-90 animate-bounce" style={{animationDelay: '2s'}}>🌿</div>
                <div className="absolute -bottom-4 right-8 text-green-600 text-2xl transform -rotate-90 animate-bounce" style={{animationDelay: '2.5s'}}>🌿</div>
                
                {/* Floating sparkles */}
                <div className="absolute top-16 right-16 text-yellow-400 text-lg animate-ping">✨</div>
                <div className="absolute bottom-16 left-16 text-yellow-400 text-lg animate-ping" style={{animationDelay: '1s'}}>✨</div>
                <div className="absolute top-24 left-20 text-yellow-400 text-sm animate-ping" style={{animationDelay: '2s'}}>✨</div>
                
                {/* Center content with enhanced styling */}
                <div className="text-center z-10 relative">
                  <h2 className="text-green-700 font-bold text-2xl tracking-wider mb-2 animate-pulse">QUERENCIA</h2>
                  <p className="text-gray-600 text-lg tracking-wide bg-gradient-to-r from-gray-600 to-gray-800 bg-clip-text">Be your own strength</p>
                </div>
                
                {/* Large decorative Q with enhanced styling */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-green-700 font-bold text-[200px] opacity-10 leading-none animate-pulse">Q</div>
                </div>
                
                {/* Glowing effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-400/20 to-green-600/20 blur-xl animate-pulse"></div>
              </div>
            </div>
            
            {/* Main heading with gradient text */}
            <h1 className="text-8xl font-bold bg-gradient-to-r from-green-600 via-green-700 to-green-800 bg-clip-text text-transparent mb-6 tracking-wider animate-fade-in">
              QUERENCIA
            </h1>
            <p className="text-3xl bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent mb-12 font-medium tracking-wide animate-fade-in">
              Be your own strength
            </p>
            
            {/* Enhanced CTA Button */}
            <div className="relative group animate-fade-in">
              <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-green-800 rounded-full blur opacity-30 group-hover:opacity-60 transition duration-300"></div>
              <Button 
                size="lg"
                onClick={() => navigate('/events')}
                className="relative bg-gradient-to-r from-green-600 to-green-800 hover:from-green-700 hover:to-green-900 text-white text-xl px-16 py-6 rounded-full font-semibold tracking-wide shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
              >
                <span className="relative z-10">START YOUR JOURNEY</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-full"></div>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-green-400 rounded-full animate-ping opacity-60"></div>
          <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-green-500 rounded-full animate-ping opacity-40" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-green-600 rounded-full animate-ping opacity-50" style={{animationDelay: '2s'}}></div>
        </div>
      </section>

      {/* Statistics Section with enhanced animations */}
      <section className="py-16 px-4 bg-gradient-to-r from-gray-50 to-green-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="group transform hover:scale-105 transition-all duration-300">
              <h3 className="text-7xl font-bold bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent mb-2 group-hover:animate-pulse">4</h3>
              <p className="text-xl text-gray-600 group-hover:text-green-700 transition-colors duration-300">City Reached</p>
            </div>
            <div className="group transform hover:scale-105 transition-all duration-300">
              <h3 className="text-7xl font-bold bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent mb-2 group-hover:animate-pulse">100+</h3>
              <p className="text-xl text-gray-600 group-hover:text-green-700 transition-colors duration-300">Students Trained</p>
            </div>
            <div className="group transform hover:scale-105 transition-all duration-300">
              <h3 className="text-7xl font-bold bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent mb-2 group-hover:animate-pulse">10+</h3>
              <p className="text-xl text-gray-600 group-hover:text-green-700 transition-colors duration-300">Success Stories</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section with enhanced styling */}
      <section className="py-16 px-4 bg-gradient-to-br from-white to-green-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-green-700 to-green-900 bg-clip-text text-transparent mb-8">CONTACT US</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="text-left transform hover:scale-105 transition-all duration-300">
              <h3 className="text-3xl font-bold text-gray-800 mb-2">
                Reach Out To Us <span className="bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">Anytime.</span>
              </h3>
            </div>
            
            <div className="text-right transform hover:scale-105 transition-all duration-300">
              <div className="mb-4 group">
                <p className="text-lg font-semibold text-gray-800 group-hover:text-green-700 transition-colors duration-300">Email</p>
                <p className="text-lg text-gray-600 group-hover:text-green-600 transition-colors duration-300">contact@querencia.org</p>
              </div>
              <div className="group">
                <p className="text-lg font-semibold text-gray-800 group-hover:text-green-700 transition-colors duration-300">Phone</p>
                <p className="text-lg text-gray-600 group-hover:text-green-600 transition-colors duration-300">+91 9365477568</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section with enhanced cards */}
      <section className="py-16 px-4 bg-gradient-to-r from-gray-50 to-green-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-gray-800 to-green-800 bg-clip-text text-transparent mb-12">
            Explore Our Platform
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:scale-105 hover:-translate-y-2 bg-gradient-to-br from-white to-green-50 border-green-200 group" onClick={() => navigate('/events')}>
              <CardHeader>
                <CardTitle className="bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent group-hover:from-green-700 group-hover:to-green-900 transition-all duration-300">Events Management</CardTitle>
                <CardDescription className="group-hover:text-green-700 transition-colors duration-300">
                  Discover and manage upcoming events, register for sessions, and track your participation.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="ghost" className="text-green-600 hover:text-green-700 hover:bg-green-50 group-hover:scale-105 transition-all duration-300">
                  Explore Events →
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:scale-105 hover:-translate-y-2 bg-gradient-to-br from-white to-green-50 border-green-200 group" onClick={() => navigate('/internships')}>
              <CardHeader>
                <CardTitle className="bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent group-hover:from-green-700 group-hover:to-green-900 transition-all duration-300">Internships</CardTitle>
                <CardDescription className="group-hover:text-green-700 transition-colors duration-300">
                  Find internship opportunities and advance your career with our curated programs.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="ghost" className="text-green-600 hover:text-green-700 hover:bg-green-50 group-hover:scale-105 transition-all duration-300">
                  View Opportunities →
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:scale-105 hover:-translate-y-2 bg-gradient-to-br from-white to-green-50 border-green-200 group" onClick={() => navigate('/testimonials')}>
              <CardHeader>
                <CardTitle className="bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent group-hover:from-green-700 group-hover:to-green-900 transition-all duration-300">Success Stories</CardTitle>
                <CardDescription className="group-hover:text-green-700 transition-colors duration-300">
                  Read testimonials from our community members and their journey with Querencia.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="ghost" className="text-green-600 hover:text-green-700 hover:bg-green-50 group-hover:scale-105 transition-all duration-300">
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
