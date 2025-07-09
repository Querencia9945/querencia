
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import ProtectedRoute from "@/components/ProtectedRoute";
import Index from "./pages/Index";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import EmployeeDashboard from "./pages/EmployeeDashboard";
import EventsPage from "./pages/EventsPage";
import Internships from "./pages/Internships";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";
import AboutSection from "./pages/AboutSection";
import ToDoList from "./pages/ToDoList";
import ManageEvents from "./pages/ManageEvents";
import ManageInternships from "./pages/ManageInternships";
import ManageTestimonials from "./pages/ManageTestimonials";
import AttendanceForm from "./pages/AttendanceForm";
import FAQs from "./pages/FAQs";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/internships" element={<Internships />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<AboutSection />} />
            <Route path="/faqs" element={<FAQs />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/employee-dashboard"
              element={
                <ProtectedRoute>
                  <EmployeeDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/todos"
              element={
                <ProtectedRoute>
                  <ToDoList />
                </ProtectedRoute>
              }
            />
            <Route
              path="/manage-events"
              element={
                <ProtectedRoute>
                  <ManageEvents />
                </ProtectedRoute>
              }
            />
            <Route
              path="/manage-internships"
              element={
                <ProtectedRoute>
                  <ManageInternships />
                </ProtectedRoute>
              }
            />
            <Route
              path="/manage-testimonials"
              element={
                <ProtectedRoute>
                  <ManageTestimonials />
                </ProtectedRoute>
              }
            />
            <Route
              path="/attendance/:eventId"
              element={
                <ProtectedRoute>
                  <AttendanceForm />
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
