
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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
              className="text-2xl font-bold text-blue-600 cursor-pointer hover:text-blue-700 transition-colors"
              onClick={() => navigate('/')}
            >
              Querencia
            </h1>
            <nav className="hidden md:flex space-x-6">
              <Button 
                variant="ghost" 
                onClick={() => navigate('/faqs')}
                className="hover:text-blue-600"
              >
                FAQs
              </Button>
              <Button 
                variant="ghost" 
                onClick={() => navigate('/internships')}
                className="hover:text-blue-600"
              >
                Internships
              </Button>
              <Button 
                variant="ghost" 
                onClick={() => navigate('/about')}
                className="hover:text-blue-600"
              >
                About
              </Button>
              <Button 
                variant="ghost" 
                onClick={() => navigate('/testimonials')}
                className="hover:text-blue-600"
              >
                Testimonials
              </Button>
              <Button 
                variant="ghost" 
                onClick={() => navigate('/events')}
                className="hover:text-blue-600"
              >
                Events
              </Button>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Avatar className="cursor-pointer">
                    <AvatarImage src={user.user_metadata?.avatar_url} />
                    <AvatarFallback>
                      {user.user_metadata?.full_name?.charAt(0) || user.email?.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => navigate('/dashboard')}>
                    Dashboard
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={handleSignOut}>
                    Sign Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <>
                <Button 
                  variant="outline"
                  onClick={() => navigate('/auth')}
                >
                  Login
                </Button>
                <Button 
                  onClick={() => navigate('/auth')}
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  Get Started
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
