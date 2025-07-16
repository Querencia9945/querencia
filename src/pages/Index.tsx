import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FAQBot from "@/components/FAQBot";

const Index = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section - Changed to white background */}
      <section className="flex-1 flex items-center justify-center py-20 px-4 bg-white">
        <div className="text-center max-w-2xl mx-auto">
          {/* Logo */}
          <div className="mb-12">
            <img 
              src="/lovable-uploads/13888463-af06-43cb-8c75-b151d7dab5e2.png" 
              alt="Querencia Logo" 
              className="w-80 h-80 mx-auto object-contain drop-shadow-sm" 
            />
          </div>
          
          {/* Main Heading */}
          <h1 className="text-7xl text-green-800 mb-4 tracking-tight font-serif">
            QUERENCIA
          </h1>
          
          {/* Subtitle */}
          <p className="text-2xl text-green-700 mb-12 font-medium">
            Be your own strength
          </p>
          
          {/* CTA Button */}
          <Button 
            size="lg" 
            onClick={() => navigate('/events')} 
            className="bg-green-800 hover:bg-green-900 text-white px-12 py-4 text-lg font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            START YOUR JOURNEY
          </Button>
        </div>
      </section>

      {/* News Section */}
      <section className="py-16 px-4 bg-green-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-green-800 mb-8">LATEST NEWS & ACHIEVEMENTS</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src="/lovable-uploads/20996266-bbe4-458c-b893-2344f83d1a06.png" 
                alt="Aman Gupta Recognition" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-green-800 mb-2">Recognition from boAt Co-Founder</h3>
                <p className="text-green-700">Aman Gupta, co-founder of boAt has recognised Querencia's efforts to build a better generation of skilled youth!</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src="/lovable-uploads/90897efa-33ca-41ed-b779-6302d0a0e301.png" 
                alt="Government Approval" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-green-800 mb-2">Government Approval</h3>
                <p className="text-green-700">Querencia's financial literacy curriculum has been approved by the Department of Finance, Govt. Of Assam.</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src="/lovable-uploads/0de0e92c-362e-4031-b890-1e0c69664df7.png" 
                alt="IIT Recognition" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-green-800 mb-2">IIT Guwahati Recognition</h3>
                <p className="text-green-700">Awarded by IIT Guwahati as one of the top 0.9% teen-led startups in India. Recognised as "outstanding impactful idea".</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src="/lovable-uploads/fee99186-32cb-4b89-892f-a34f86fd890c.png" 
                alt="University of Delaware Recognition" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-green-800 mb-2">International Recognition</h3>
                <p className="text-green-700">Querencia is recognised by University of Delaware, USA as one of top 100 emerging innovations.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 px-4 bg-green-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-8xl font-bold text-green-800">17+</div>
              <p className="text-xl text-green-700 font-medium">Cities Reached</p>
            </div>
            <div className="space-y-2">
              <div className="text-8xl font-bold text-green-800">10,000+</div>
              <p className="text-xl text-green-700 font-medium">Students Trained</p>
            </div>
            <div className="space-y-2">
              <div className="text-8xl font-bold text-green-800">100+</div>
              <p className="text-xl text-green-700 font-medium">Success Stories</p>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-16 px-4 bg-green-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-green-800 mb-4">EVENTS</h2>
            <p className="text-lg text-green-700 max-w-4xl mx-auto">
              Querencia has hosted 5+ offline and 20+ online events over a year. Supported well by a team of more than 150 interns, the events have enriched more than 10,000 students with 21st century skills.
            </p>
          </div>
          <div className="text-center">
            <Button 
              onClick={() => navigate('/events')}
              className="bg-green-800 hover:bg-green-900 text-white px-8 py-3 text-lg font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              View All Events
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-green-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-green-800 mb-8">CONTACT US</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-4xl font-bold text-green-800 leading-tight">
                Reach Out To Us <br />
                <span className="text-green-600">Anytime.</span>
              </h3>
            </div>
            
            <div className="space-y-6">
              <div className="text-center">
                <p className="text-lg font-medium text-green-700 mb-2">Email</p>
                <p className="text-xl font-bold text-green-800">querencia.tgf@gmail.com</p>
              </div>
              <div className="text-center">
                <p className="text-lg font-medium text-green-700 mb-2">Phone</p>
                <p className="text-xl font-bold text-green-800">+91 9365477568</p>
              </div>
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
