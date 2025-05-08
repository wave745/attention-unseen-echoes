
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Decode from "./pages/Decode";
import Submit from "./pages/Submit";
import Observe from "./pages/Observe";
import Order from "./pages/Order";
import AudioController from "./components/AudioController";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="relative w-full min-h-screen overflow-hidden">
          <div className="noise"></div>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/decode" element={<Decode />} />
            <Route path="/submit" element={<Submit />} />
            <Route path="/observe" element={<Observe />} />
            <Route path="/order" element={<Order />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
