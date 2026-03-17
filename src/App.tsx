import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useState, useCallback } from "react";
import Index from "./pages/Index";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import TeamPage from "./pages/TeamPage";
import ContactPage from "./pages/ContactPage";
import WhoWeHelpPage from "./pages/WhoWeHelpPage";
import FAQsPage from "./pages/FAQsPage";

import NewsInsightsPage from "./pages/NewsInsightsPage";
import TaxCalendarPage from "./pages/TaxCalendarPage";
import ClientPortalPage from "./pages/ClientPortalPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import TermsPage from "./pages/TermsPage";
import ProfessionalMembershipsPage from "./pages/ProfessionalMembershipsPage";
import NotFound from "./pages/NotFound";
import Preloader from "./components/Preloader";
import ScrollToTop from "./components/ScrollToTop";
import ScrollToTopButton from "./components/ScrollToTopButton";

const queryClient = new QueryClient();

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/who-we-help" element={<WhoWeHelpPage />} />
        <Route path="/faqs" element={<FAQsPage />} />
       
        <Route path="/news-insights" element={<NewsInsightsPage />} />
        <Route path="/tax-calendar" element={<TaxCalendarPage />} />
        <Route path="/client-portal" element={<ClientPortalPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/professional-memberships" element={<ProfessionalMembershipsPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  const [loading, setLoading] = useState(true);
  const handleComplete = useCallback(() => setLoading(false), []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <AnimatePresence mode="wait">
          {loading && <Preloader onComplete={handleComplete} />}
        </AnimatePresence>
        {!loading && (
          <BrowserRouter>
            <ScrollToTop />
            <ScrollToTopButton />
            <AnimatedRoutes />
          </BrowserRouter>
        )}
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
