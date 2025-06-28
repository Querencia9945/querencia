
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
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
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/employee-dashboard" element={<EmployeeDashboard />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/internships" element={<Internships />} />
          <Route path="/about" element={<AboutSection />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/attendance" element={<AttendanceForm />} />
          <Route path="/todo" element={<ToDoList />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
