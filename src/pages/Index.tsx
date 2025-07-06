
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FAQBot from "@/components/FAQBot";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section - Centered Design */}
      <section className="flex-1 flex items-center justify-center py-20 px-4">
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
          <h1 className="text-6xl font-bold text-emerald-800 mb-4 tracking-tight">
            QUERENCIA
          </h1>
          
          {/* Subtitle */}
          <p className="text-2xl text-emerald-700 mb-12 font-medium">
            Be your own strength
          </p>
          
          {/* CTA Button */}
          <Button 
            size="lg"
            onClick={() => navigate('/events')}
            className="bg-emerald-800 hover:bg-emerald-900 text-white px-12 py-4 text-lg font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            START YOUR JOURNEY
          </Button>
        </div>
      </section>

      <Footer />
      <FAQBot />
    </div>
  );
};

export default Index;
