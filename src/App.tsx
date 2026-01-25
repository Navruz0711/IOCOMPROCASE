import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import ChiSiamo from "./pages/ChiSiamo";
import ComeTiAiutiamo from "./pages/ComeTiAiutiamo";
import CosaTiProponiamo from "./pages/CosaTiProponiamo";
import Contatti from "./pages/Contatti";
import Privacy from "./pages/Privacy";
import Cookie from "./pages/Cookie";
import Disclaimer from "./pages/Disclaimer";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/chi-siamo" element={<ChiSiamo />} />
            <Route path="/come-ti-aiutiamo" element={<ComeTiAiutiamo />} />
            <Route path="/cosa-ti-proponiamo" element={<CosaTiProponiamo />} />
            <Route path="/contatti" element={<Contatti />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/cookie" element={<Cookie />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
