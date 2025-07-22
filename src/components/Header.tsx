
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

const Header = () => {
  const navigate = useNavigate();
  const { user, signOut } = useAuth();

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <img 
                src="/lovable-uploads/13888463-af06-43cb-8c75-b151d7dab5e2.png" 
                alt="Querencia Logo" 
                className="w-8 h-8 object-contain"
              />
              <h1 
                className="text-xl font-bold text-emerald-800 cursor-pointer hover:text-emerald-900 transition-colors"
                onClick={() => navigate('/')}
              >
                QUERENCIA
              </h1>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Button 
              variant="ghost" 
              onClick={() => navigate('/about')}
              className="text-gray-700 hover:text-emerald-800 font-medium"
            >
              ABOUT
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => navigate('/events')}
              className="text-gray-700 hover:text-emerald-800 font-medium"
            >
              EVENTS
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => navigate('/testimonials')}
              className="text-gray-700 hover:text-emerald-800 font-medium"
            >
              TESTIMONY
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => navigate('/internships')}
              className="text-gray-700 hover:text-emerald-800 font-medium"
            >
              CAREER
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => navigate('/contact')}
              className="text-gray-700 hover:text-emerald-800 font-medium"
            >
              CONTACT
            </Button>
          </nav>

          <div className="flex items-center">
            {user ? (
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-700">Welcome, {user.username}</span>
                <Button 
                  variant="outline"
                  onClick={() => navigate('/employee-dashboard')}
                  className="border-emerald-800 text-emerald-800 hover:bg-emerald-50"
                >
                  Dashboard
                </Button>
                <Button 
                  variant="outline"
                  onClick={handleSignOut}
                  className="border-emerald-800 text-emerald-800 hover:bg-emerald-50"
                >
                  Sign Out
                </Button>
              </div>
            ) : (
              <Button 
                onClick={() => navigate('/auth')}
                className="bg-emerald-800 hover:bg-emerald-900 text-white px-6 py-2 rounded-full font-medium"
              >
                Login
              </Button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
