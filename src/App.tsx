import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Fleet from "./pages/Fleet";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";
import SuperiorLimousineLoader from "./components/loadingpage";

const queryClient = new QueryClient();

const App = () => {
  const [loading, setLoading] = useState(true);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    // Wait for the loading animation duration
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2800); // 2.8 seconds loader display

    // Wait for fade-out transition to complete before removing from DOM
    const removeTimer = setTimeout(() => {
      setShouldRender(false);
    }, 3600); // 2.8s + 800ms transition

    return () => {
      clearTimeout(timer);
      clearTimeout(removeTimer);
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        
        {shouldRender && (
          <div
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 9999,
              opacity: loading ? 1 : 0,
              transition: "opacity 800ms cubic-bezier(0.4, 0, 0.2, 1)",
              pointerEvents: loading ? "all" : "none",
            }}
          >
            <SuperiorLimousineLoader />
          </div>
        )}

        <BrowserRouter>
          <ScrollToTop />
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/fleet" element={<Fleet />} />
                <Route path="/services" element={<Services />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;

