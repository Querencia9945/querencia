
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const handleInstagram = () => {
    window.open('https://instagram.com', '_blank');
  };

  const handleLinkedIn = () => {
    window.open('https://linkedin.com', '_blank');
  };

  return (
    <footer className="bg-green-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-green-400 mb-4">Querencia</h3>
            <p className="text-green-100 mb-6">
              Equipping youth with 21st century life skills, one city at a time
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-green-300">Quick Links</h4>
            <div className="space-y-2 flex flex-col">
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => navigate('/events')}
                className="text-green-100 hover:text-green-300 hover:bg-green-800 p-0 h-auto justify-start"
              >
                Events
              </Button>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => navigate('/internships')}
                className="text-green-100 hover:text-green-300 hover:bg-green-800 p-0 h-auto justify-start"
              >
                Internships
              </Button>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => navigate('/about')}
                className="text-green-100 hover:text-green-300 hover:bg-green-800 p-0 h-auto justify-start"
              >
                About Us
              </Button>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-green-300">Support</h4>
            <div className="space-y-2 flex flex-col">
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => navigate('/faqs')}
                className="text-green-100 hover:text-green-300 hover:bg-green-800 p-0 h-auto justify-start"
              >
                FAQs
              </Button>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => navigate('/testimonials')}
                className="text-green-100 hover:text-green-300 hover:bg-green-800 p-0 h-auto justify-start"
              >
                Testimonials
              </Button>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => navigate('/contact')}
                className="text-green-100 hover:text-green-300 hover:bg-green-800 p-0 h-auto justify-start"
              >
                Contact Details
              </Button>
              <div className="pt-2">
                <p className="text-sm font-medium text-green-300 mb-2">Social Media Links</p>
                <div className="space-y-1">
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={handleInstagram}
                    className="text-green-100 hover:text-green-300 hover:bg-green-800 p-0 h-auto justify-start text-sm"
                  >
                    Instagram
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={handleLinkedIn}
                    className="text-green-100 hover:text-green-300 hover:bg-green-800 p-0 h-auto justify-start text-sm"
                  >
                    LinkedIn
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-green-800 mt-8 pt-8 text-center text-green-300">
          <p>&copy; 2024 Querencia. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
