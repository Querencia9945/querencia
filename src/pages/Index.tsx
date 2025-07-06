
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FAQBot from "@/components/FAQBot";
import { ArrowRight, Target, Users, TrendingUp } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-24 px-4 overflow-hidden">
        {/* Subtle background elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/30 to-slate-50/30"></div>
        <div className="absolute top-20 right-20 w-72 h-72 bg-emerald-100/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-slate-100/20 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="text-left">
              <div className="inline-flex items-center px-4 py-2 bg-emerald-50 rounded-full text-emerald-700 text-sm font-medium mb-8">
                <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
                Empowering Professional Growth
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                Be Your Own
                <span className="text-emerald-600 block">Strength</span>
              </h1>
              
              <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-lg">
                Discover your inner sanctuary of strength and growth. Join Querencia to unlock transformative opportunities and connect with like-minded professionals.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg"
                  onClick={() => navigate('/events')}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 text-lg font-medium group"
                >
                  Begin Your Journey
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => navigate('/testimonials')}
                  className="border-2 border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-4 text-lg font-medium"
                >
                  Success Stories
                </Button>
              </div>
            </div>
            
            {/* Right Content - Logo */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-200/20 to-slate-200/20 rounded-full blur-2xl scale-110"></div>
                <img 
                  src="/lovable-uploads/13888463-af06-43cb-8c75-b151d7dab5e2.png" 
                  alt="Querencia Logo" 
                  className="relative z-10 w-80 h-80 lg:w-96 lg:h-96 object-contain drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-200 transition-colors">
                <Target className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-4xl font-bold text-slate-900 mb-2">4</h3>
              <p className="text-slate-600 font-medium">Cities Reached</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-200 transition-colors">
                <Users className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-4xl font-bold text-slate-900 mb-2">100+</h3>
              <p className="text-slate-600 font-medium">Students Empowered</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-200 transition-colors">
                <TrendingUp className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-4xl font-bold text-slate-900 mb-2">10+</h3>
              <p className="text-slate-600 font-medium">Success Stories</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Explore Our Offerings</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Discover transformative opportunities designed to accelerate your professional growth and personal development.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-2 border-slate-100 hover:border-emerald-200 hover:shadow-xl transition-all duration-300 cursor-pointer group" onClick={() => navigate('/events')}>
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-emerald-200 transition-colors">
                  <Target className="h-6 w-6 text-emerald-600" />
                </div>
                <CardTitle className="text-xl text-slate-900 group-hover:text-emerald-700 transition-colors">
                  Events Management
                </CardTitle>
                <CardDescription className="text-slate-600">
                  Discover transformative events, register for exclusive sessions, and track your journey of growth.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="ghost" className="text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50 p-0 h-auto font-medium group">
                  Explore Events
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-slate-100 hover:border-emerald-200 hover:shadow-xl transition-all duration-300 cursor-pointer group" onClick={() => navigate('/internships')}>
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-emerald-200 transition-colors">
                  <TrendingUp className="h-6 w-6 text-emerald-600" />
                </div>
                <CardTitle className="text-xl text-slate-900 group-hover:text-emerald-700 transition-colors">
                  Internships
                </CardTitle>
                <CardDescription className="text-slate-600">
                  Unlock career opportunities and advance your professional journey with our curated programs.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="ghost" className="text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50 p-0 h-auto font-medium group">
                  View Opportunities
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-slate-100 hover:border-emerald-200 hover:shadow-xl transition-all duration-300 cursor-pointer group" onClick={() => navigate('/testimonials')}>
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-emerald-200 transition-colors">
                  <Users className="h-6 w-6 text-emerald-600" />
                </div>
                <CardTitle className="text-xl text-slate-900 group-hover:text-emerald-700 transition-colors">
                  Success Stories
                </CardTitle>
                <CardDescription className="text-slate-600">
                  Be inspired by testimonials from our community and their transformative journeys with Querencia.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="ghost" className="text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50 p-0 h-auto font-medium group">
                  Read Stories
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Connect With Us</h2>
          <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto">
            Ready to begin your transformative journey? Get in touch with our team.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="font-semibold text-slate-900 mb-2">Email</h3>
              <p className="text-emerald-600 font-medium">contact@querencia.org</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="font-semibold text-slate-900 mb-2">Phone</h3>
              <p className="text-emerald-600 font-medium">+91 9365477568</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FAQBot />
    </div>
  );
};

export default Index;
