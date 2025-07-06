
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
          <div className="flex items-center space-x-8">
            <h1 
              className="text-2xl font-bold text-emerald-600 cursor-pointer hover:text-emerald-700 transition-colors"
              onClick={() => navigate('/')}
            >
              Querencia
            </h1>
            <nav className="hidden md:flex space-x-6">
              <Button 
                variant="ghost" 
                onClick={() => navigate('/faqs')}
                className="hover:text-emerald-600"
              >
                FAQs
              </Button>
              <Button 
                variant="ghost" 
                onClick={() => navigate('/internships')}
                className="hover:text-emerald-600"
              >
                Internships
              </Button>
              <Button 
                variant="ghost" 
                onClick={() => navigate('/about')}
                className="hover:text-emerald-600"
              >
                About
              </Button>
              <Button 
                variant="ghost" 
                onClick={() => navigate('/testimonials')}
                className="hover:text-emerald-600"
              >
                Testimonials
              </Button>
              <Button 
                variant="ghost" 
                onClick={() => navigate('/events')}
                className="hover:text-emerald-600"
              >
                Events
              </Button>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-700">Welcome, {user.username}</span>
                <Button 
                  variant="outline"
                  onClick={() => navigate('/employee-dashboard')}
                >
                  Dashboard
                </Button>
                <Button 
                  variant="outline"
                  onClick={handleSignOut}
                >
                  Sign Out
                </Button>
              </div>
            ) : (
              <Button 
                onClick={() => navigate('/auth')}
                className="bg-emerald-600 hover:bg-emerald-700"
              >
                Employee Login
              </Button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
