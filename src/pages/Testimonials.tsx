
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FAQBot from "@/components/FAQBot";
import { useNavigate } from "react-router-dom";

const Testimonials = () => {
  const navigate = useNavigate();

  const testimonials = [
    {
      id: 1,
      name: "Saniya Bansal",
      role: "Student",
      company: "PGDAV College, Delhi University",
      content: "It is a platform through which I not only develop my communication skills but also I get the chance to improve my leadership skills and identity myself new.",
      rating: 5,
    },
    {
      id: 2,
      name: "Durlabh Biswas",
      role: "Student", 
      company: "KIIT, Bhubaneswar",
      content: "My communication skills have certainly improved since I joined. I learnt team work and team leading here. Approaching people and talking to them is something I didn't know until I joined Querencia. It was a really great experience here.",
      rating: 5,
    },
    {
      id: 3,
      name: "Uddipa Pal",
      role: "Student",
      company: "NIOS, Kolkata", 
      content: "My time management skills, being accountable for my work, public speaking, confidence, reaching out to strangers skills everything has increased!",
      rating: 5,
    },
    {
      id: 4,
      name: "Kanishkna M. Moral",
      role: "Student",
      company: "Royal Global School, Assam",
      content: "It has helped my communication skills, my speaking skills, my creativity, how an organisation works, my ethics and my way of thinking",
      rating: 5,
    },
    {
      id: 5,
      name: "Nairhita S. Bhuyan", 
      role: "Student",
      company: "Delhi University",
      content: "Helped me learn how to navigate through LinkedIn better",
      rating: 5,
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className={`text-lg ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
      >
        ★
      </span>
    ));
  };

  return (
    <div className="min-h-screen bg-green-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">What Our Community Says</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Hear from professionals who have grown their careers and expanded their networks through Querencia.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto py-12 px-4">
        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-12">
          <Card className="text-center bg-green-100 border-green-300">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-green-600 mb-2">10,000+</div>
              <div className="text-green-700">Happy Members</div>
            </CardContent>
          </Card>
          <Card className="text-center bg-green-100 border-green-300">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-green-600 mb-2">25+</div>
              <div className="text-green-700">Events Hosted</div>
            </CardContent>
          </Card>
          <Card className="text-center bg-green-100 border-green-300">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-green-600 mb-2">10,000+</div>
              <div className="text-green-700">Students Trained</div>
            </CardContent>
          </Card>
          <Card className="text-center bg-green-100 border-green-300">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-green-600 mb-2">100+</div>
              <div className="text-green-700">Success Stories</div>
            </CardContent>
          </Card>
          <Card className="text-center bg-green-100 border-green-300">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-green-600 mb-2">17+</div>
              <div className="text-green-700">Cities</div>
            </CardContent>
          </Card>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="hover:shadow-lg transition-shadow bg-white border-green-200">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarFallback className="bg-green-100 text-green-700">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <Badge variant="outline" className="text-xs mt-1 border-green-300 text-green-700">
                      {testimonial.company}
                    </Badge>
                  </div>
                </div>
                <div className="flex space-x-1 mt-2">
                  {renderStars(testimonial.rating)}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 italic">"{testimonial.content}"</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <Card className="mt-12 bg-gradient-to-r from-green-50 to-green-100 border-green-300">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold text-green-900 mb-4">Ready to Join Our Community?</h2>
            <p className="text-green-700 mb-6 max-w-2xl mx-auto">
              Start your journey with Querencia today. Discover events, find opportunities, 
              and connect with like-minded professionals who share your ambitions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => navigate('/events')}
                className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors"
              >
                Get Started
              </Button>
              <Button 
                onClick={() => navigate('/about')}
                className="border border-green-600 text-green-600 px-8 py-3 rounded-lg hover:bg-green-50 transition-colors"
                variant="outline"
              >
                Learn More
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <Footer />
      <FAQBot />
    </div>
  );
};

export default Testimonials;
