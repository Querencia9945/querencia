
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import ProtectedRoute from "@/components/ProtectedRoute";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import EmployeeDashboard from "./pages/EmployeeDashboard";
import FAQs from "./pages/FAQs";
import Internships from "./pages/Internships";
import AboutSection from "./pages/AboutSection";
import Testimonials from "./pages/Testimonials";
import EventsPage from "./pages/EventsPage";
import AttendanceForm from "./pages/AttendanceForm";
import ToDoList from "./pages/ToDoList";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AuthProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/dashboard" element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } />
            <Route path="/employee-dashboard" element={
              <ProtectedRoute>
                <EmployeeDashboard />
              </ProtectedRoute>
            } />
            <Route path="/faqs" element={<FAQs />} />
            <Route path="/internships" element={<Internships />} />
            <Route path="/about" element={<AboutSection />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/attendance" element={
              <ProtectedRoute>
                <AttendanceForm />
              </ProtectedRoute>
            } />
            <Route path="/todo" element={
              <ProtectedRoute>
                <ToDoList />
              </ProtectedRoute>
            } />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
