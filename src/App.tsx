
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import PageTransition from "./components/PageTransition";
import Home from "./pages/Home";
import Index from "./pages/Index";
import LoginPage from "./pages/LoginPage";
import MeusCursos from "./pages/MeusCursos";
import Comunidade from "./pages/Comunidade";
import Mentores from "./pages/Mentores";
import Suporte from "./pages/Suporte";
import PerfilTutor from "./pages/PerfilTutor";
import AulaAoV

ivo from "./pages/AulaAoVivo";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <AuthProvider>
        <BrowserRouter>
          <PageTransition>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/register" element={<Index />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/cursos" element={<MeusCursos />} />
              <Route path="/comunidade" element={<Comunidade />} />
              <Route path="/mentores" element={<Mentores />} />
              <Route path="/suporte" element={<Suporte />} />
              <Route path="/tutor/:id" element={<PerfilTutor />} />
              <Route path="/aula/:id" element={<AulaAoVivo />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </PageTransition>
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
