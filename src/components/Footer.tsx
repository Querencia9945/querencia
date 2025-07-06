
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-emerald-400 mb-4">Querencia</h3>
            <p className="text-gray-300 mb-6">
              Your comprehensive platform for event management, professional development, and community building.
            </p>
            <div className="flex space-x-4">
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => navigate('/contact')}
                className="text-gray-300 hover:text-emerald-400"
              >
                Contact Details
              </Button>
              <Button 
                variant="ghost" 
                size="sm"
                className="text-gray-300 hover:text-emerald-400"
              >
                Social Media Links
              </Button>
              <Button 
                variant="ghost" 
                size="sm"
                className="text-gray-300 hover:text-emerald-400"
              >
                External Links
              </Button>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => navigate('/events')}
                className="text-gray-300 hover:text-emerald-400 p-0 h-auto"
              >
                Events
              </Button>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => navigate('/internships')}
                className="text-gray-300 hover:text-emerald-400 p-0 h-auto"
              >
                Internships
              </Button>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => navigate('/about')}
                className="text-gray-300 hover:text-emerald-400 p-0 h-auto"
              >
                About Us
              </Button>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <div className="space-y-2">
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => navigate('/faqs')}
                className="text-gray-300 hover:text-emerald-400 p-0 h-auto"
              >
                FAQs
              </Button>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => navigate('/testimonials')}
                className="text-gray-300 hover:text-emerald-400 p-0 h-auto"
              >
                Testimonials
              </Button>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Querencia. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
