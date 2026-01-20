import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import SmoothScroll from "./components/SmoothScroll";
import PageTransition from "./components/PageTransition";
import SplitTransition from "./components/SplitTransition";
import BackgroundMusic from "./components/BackgroundMusic";
import Index from "./pages/Index";
import MenuPage from "./pages/MenuPage";
import WorkshopsPage from "./pages/WorkshopsPage";
import LocationsPage from "./pages/LocationsPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const AnimatedRoutes = () => {
  const location = useLocation();
  const isFirstRender = useRef(true);
  const [skipAnimation, setSkipAnimation] = useState(false);
  const useSplitTransition = location.pathname === "/" || location.pathname === "/contact";
  
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      // Show split transition on first load for home page
      setSkipAnimation(false);
    }
    
    // Scroll to top when navigating to a new page
    // Use Lenis if available, otherwise fallback to window.scrollTo
    const lenis = (window as any).__lenis;
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  }, [location.pathname]);

  // Use SplitTransition for Home and Contact pages, PageTransition for others
  const TransitionComponent = useSplitTransition ? SplitTransition : PageTransition;
  
  return (
    <AnimatePresence mode="wait">
      <TransitionComponent key={location.pathname} skipAnimation={skipAnimation}>
        <Routes location={location}>
          <Route path="/" element={<Index />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/workshops" element={<WorkshopsPage />} />
          <Route path="/location" element={<LocationsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </TransitionComponent>
    </AnimatePresence>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <SmoothScroll>
        <Toaster />
        <Sonner />
        <BackgroundMusic />
        <BrowserRouter>
          <AnimatedRoutes />
        </BrowserRouter>
      </SmoothScroll>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
