import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FAQBot from "@/components/FAQBot";
const Index = () => {
  const navigate = useNavigate();
  return <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="flex-1 flex items-center justify-center py-20 px-4 bg-white">
        <div className="text-center max-w-2xl mx-auto">
          {/* Logo */}
          <div className="mb-12">
            <img src="/lovable-uploads/13888463-af06-43cb-8c75-b151d7dab5e2.png" alt="Querencia Logo" className="w-80 h-80 mx-auto object-contain drop-shadow-sm" />
          </div>
          
          {/* Main Heading */}
          <h1 className="text-6xl text-green-800 mb-4 tracking-tight font-thin">
            QUERENCIA
          </h1>
          
          {/* Subtitle */}
          <p className="text-2xl text-green-700 mb-12 font-medium">
            Be your own strength
          </p>
          
          {/* CTA Button */}
          <Button size="lg" onClick={() => navigate('/events')} className="bg-green-800 hover:bg-green-900 text-white px-12 py-4 text-lg font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
            START YOUR JOURNEY
          </Button>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-8xl font-bold text-green-800">4</div>
              <p className="text-xl text-gray-600 font-medium">City Reached</p>
            </div>
            <div className="space-y-2">
              <div className="text-8xl font-bold text-green-800">100+</div>
              <p className="text-xl text-gray-600 font-medium">Students Trained</p>
            </div>
            <div className="space-y-2">
              <div className="text-8xl font-bold text-green-800">10+</div>
              <p className="text-xl text-gray-600 font-medium">Success Stories</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-green-800 mb-8">CONTACT US</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-4xl font-bold text-gray-800 leading-tight">
                Reach Out To Us <br />
                <span className="text-green-800">Anytime.</span>
              </h3>
            </div>
            
            <div className="space-y-6">
              <div className="text-center">
                <p className="text-lg font-medium text-gray-600 mb-2">Email</p>
                <p className="text-xl font-bold text-gray-800">contact@querencia.org</p>
              </div>
              <div className="text-center">
                <p className="text-lg font-medium text-gray-600 mb-2">Phone</p>
                <p className="text-xl font-bold text-gray-800">+91 9365477568</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FAQBot />
    </div>;
};
export default Index;