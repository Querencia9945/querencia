
import React, { createContext, useContext, useState } from 'react';
import { useToast } from '@/hooks/use-toast';

interface User {
  id: string;
  username: string;
  role: string;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  signIn: (username: string, password: string) => Promise<{ error: any }>;
  signOut: () => Promise<{ error: any }>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(() => {
    // Check localStorage for existing user
    const savedUser = localStorage.getItem('querencia_user');
    return savedUser ? JSON.parse(savedUser) : null;
  });
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const signIn = async (username: string, password: string) => {
    try {
      setLoading(true);
      
      // Updated credentials check
      if (username === 'staff@querencia' && password === '123456') {
        const userData = {
          id: 'employee-1',
          username: 'staff@querencia',
          role: 'employee'
        };
        
        setUser(userData);
        localStorage.setItem('querencia_user', JSON.stringify(userData));
        
        toast({
          title: "Welcome!",
          description: "You have successfully signed in.",
        });
        
        return { error: null };
      } else {
        const error = new Error('Invalid credentials');
        toast({
          title: "Sign in failed",
          description: "Invalid username or password",
          variant: "destructive"
        });
        return { error };
      }
    } catch (error: any) {
      toast({
        title: "Sign in failed",
        description: error.message,
        variant: "destructive"
      });
      return { error };
    } finally {
      setLoading(false);
    }
  };

  const signOut = async () => {
    try {
      setUser(null);
      localStorage.removeItem('querencia_user');
      toast({
        title: "Signed out",
        description: "You have been signed out successfully.",
      });
      return { error: null };
    } catch (error: any) {
      toast({
        title: "Sign out failed",
        description: error.message,
        variant: "destructive"
      });
      return { error };
    }
  };

  const value = {
    user,
    loading,
    signIn,
    signOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
