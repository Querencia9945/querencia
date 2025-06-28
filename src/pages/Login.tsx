
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";

const Login = () => {
  const [isEmployee, setIsEmployee] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    console.log("Login attempt", { isEmployee });
    // Navigate based on user type
    if (isEmployee) {
      navigate('/employee-dashboard');
    } else {
      navigate('/dashboard');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Header />
      <div className="flex items-center justify-center py-20 px-4">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold">Welcome Back</CardTitle>
            <CardDescription>
              Sign in to access your Querencia account
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="Enter your email" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" placeholder="Enter your password" />
            </div>
            <div className="flex items-center space-x-2">
              <input 
                type="checkbox" 
                id="employee" 
                checked={isEmployee}
                onChange={(e) => setIsEmployee(e.target.checked)}
                className="rounded"
              />
              <Label htmlFor="employee" className="text-sm">
                I am an employee
              </Label>
            </div>
            <Button 
              onClick={handleLogin}
              className="w-full bg-blue-600 hover:bg-blue-700"
            >
              Sign In
            </Button>
            <div className="text-center text-sm text-gray-600">
              Don't have an account?{" "}
              <Button variant="link" className="p-0 h-auto text-blue-600">
                Sign up
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Login;
