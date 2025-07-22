
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
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex items-center">
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/13888463-af06-43cb-8c75-b151d7dab5e2.png" 
                alt="Querencia Logo" 
                className="w-10 h-10 object-contain"
              />
              <h1 
                className="text-2xl font-bold text-emerald-800 cursor-pointer hover:text-emerald-900 transition-colors tracking-tight"
                onClick={() => navigate('/')}
              >
                QUERENCIA
              </h1>
            </div>
          </div>
          
          {/* Navigation Menu */}
          <nav className="hidden md:flex items-center space-x-1">
            <Button 
              variant="ghost" 
              onClick={() => navigate('/about')}
              className="text-gray-700 hover:text-emerald-800 hover:bg-emerald-50 font-medium px-4 py-2 rounded-md transition-all duration-200"
            >
              ABOUT
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => navigate('/events')}
              className="text-gray-700 hover:text-emerald-800 hover:bg-emerald-50 font-medium px-4 py-2 rounded-md transition-all duration-200"
            >
              EVENTS
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => navigate('/testimonials')}
              className="text-gray-700 hover:text-emerald-800 hover:bg-emerald-50 font-medium px-4 py-2 rounded-md transition-all duration-200"
            >
              TESTIMONY
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => navigate('/internships')}
              className="text-gray-700 hover:text-emerald-800 hover:bg-emerald-50 font-medium px-4 py-2 rounded-md transition-all duration-200"
            >
              CAREER
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => navigate('/contact')}
              className="text-gray-700 hover:text-emerald-800 hover:bg-emerald-50 font-medium px-4 py-2 rounded-md transition-all duration-200"
            >
              CONTACT
            </Button>
          </nav>

          {/* User Actions */}
          <div className="flex items-center space-x-3">
            {user ? (
              <>
                <span className="text-sm text-gray-600 font-medium hidden sm:block">
                  Welcome, {user.username}
                </span>
                <Button 
                  variant="outline"
                  onClick={() => navigate('/employee-dashboard')}
                  className="border-emerald-700 text-emerald-700 hover:bg-emerald-50 hover:border-emerald-800 font-medium px-4 py-2 transition-all duration-200"
                >
                  Dashboard
                </Button>
                <Button 
                  variant="outline"
                  onClick={handleSignOut}
                  className="border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 font-medium px-4 py-2 transition-all duration-200"
                >
                  Sign Out
                </Button>
              </>
            ) : (
              <Button 
                onClick={() => navigate('/auth')}
                className="bg-emerald-800 hover:bg-emerald-900 text-white px-6 py-2 rounded-md font-medium shadow-sm hover:shadow-md transition-all duration-200"
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
