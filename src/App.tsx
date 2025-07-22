
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import ProtectedRoute from "@/components/ProtectedRoute";
import Index from "./pages/Index";
import Auth from "./pages/Auth";
import EmployeeDashboard from "./pages/EmployeeDashboard";
import ManageEvents from "./pages/ManageEvents";
import ManageInternships from "./pages/ManageInternships";
import ManageTestimonials from "./pages/ManageTestimonials";
import FAQs from "./pages/FAQs";
import Internships from "./pages/Internships";
import AboutSection from "./pages/AboutSection";
import Testimonials from "./pages/Testimonials";
import EventsPage from "./pages/EventsPage";
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
            <Route path="/auth" element={<Auth />} />
            <Route path="/employee-dashboard" element={
              <ProtectedRoute>
                <EmployeeDashboard />
              </ProtectedRoute>
            } />
            <Route path="/manage-events" element={
              <ProtectedRoute>
                <ManageEvents />
              </ProtectedRoute>
            } />
            <Route path="/manage-internships" element={
              <ProtectedRoute>
                <ManageInternships />
              </ProtectedRoute>
            } />
            <Route path="/manage-testimonials" element={
              <ProtectedRoute>
                <ManageTestimonials />
              </ProtectedRoute>
            } />
            <Route path="/faqs" element={<FAQs />} />
            <Route path="/internships" element={<Internships />} />
            <Route path="/about" element={<AboutSection />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
