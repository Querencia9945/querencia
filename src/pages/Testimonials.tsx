
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FAQBot from "@/components/FAQBot";
import { useLocalStorage } from "@/hooks/useLocalStorage";

const Testimonials = () => {
  const [testimonials] = useLocalStorage('testimonials', [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Software Engineer",
      company: "TechCorp",
      content: "Querencia helped me land my dream internship! The platform made it easy to discover opportunities and the events were incredibly valuable for networking.",
      rating: 5,
      image: "/placeholder.svg"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Marketing Specialist",
      company: "Creative Agency",
      content: "The workshops and seminars on Querencia have been instrumental in my professional development. I've learned so much and made great connections.",
      rating: 5,
      image: "/placeholder.svg"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "UX Designer",
      company: "Design Studio",
      content: "As a recent graduate, Querencia provided me with the guidance and opportunities I needed to start my career. The community is supportive and inspiring.",
      rating: 5,
      image: "/placeholder.svg"
    },
    {
      id: 4,
      name: "David Kim",
      role: "Data Analyst",
      company: "DataInsights Co",
      content: "The events are well-organized and the content is always relevant. I've attended multiple workshops and each one has added real value to my skillset.",
      rating: 5,
      image: "/placeholder.svg"
    },
    {
      id: 5,
      name: "Lisa Thompson",
      role: "Project Manager",
      company: "Innovation Hub",
      content: "Querencia has become my go-to platform for professional development. The quality of events and the networking opportunities are unmatched.",
      rating: 5,
      image: "/placeholder.svg"
    },
    {
      id: 6,
      name: "Alex Morgan",
      role: "Business Analyst",
      company: "Consulting Group",
      content: "I've been using Querencia for over a year now, and it has consistently exceeded my expectations. The team behind it really cares about the community.",
      rating: 5,
      image: "/placeholder.svg"
    }
  ]);

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
    <div className="min-h-screen bg-gray-50">
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
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-green-600 mb-2">500+</div>
              <div className="text-gray-600">Happy Members</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-green-600 mb-2">150+</div>
              <div className="text-gray-600">Events Hosted</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-green-600 mb-2">95%</div>
              <div className="text-gray-600">Satisfaction Rate</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-green-600 mb-2">200+</div>
              <div className="text-gray-600">Career Placements</div>
            </CardContent>
          </Card>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback>
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <Badge variant="outline" className="text-xs mt-1">
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
        <Card className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Join Our Community?</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Start your journey with Querencia today. Discover events, find opportunities, 
              and connect with like-minded professionals who share your ambitions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Get Started
              </button>
              <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors">
                Learn More
              </button>
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
