
// Importações dos componentes de toast e tooltip para feedback ao usuário
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

// Importações para gerenciamento de estado e roteamento
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Importação de todas as páginas da aplicação
import Index from "./pages/Index";
import LoginPage from "./pages/Login";
import ProfileSelectionPage from "./pages/ProfileSelection";
import RegistrationPage from "./pages/Registration";
import PlansPage from "./pages/Plans";
import PasswordResetPage from "./pages/PasswordReset";
import NotFound from "./pages/NotFound";

// Cliente para gerenciamento de queries e cache de dados
const queryClient = new QueryClient();

// Componente principal da aplicação
const App = () => (
  // Provider para gerenciamento de estado com React Query
  <QueryClientProvider client={queryClient}>
    {/* Provider para tooltips globais */}
    <TooltipProvider>
      {/* Componente de notificação toast */}
      <Toaster />
      
      {/* Configuração do roteamento da aplicação */}
      <BrowserRouter>
        <Routes>
          {/* Rota principal - página inicial */}
          <Route path="/" element={<Index />} />
          
          {/* Rota para página de login */}
          <Route path="/login" element={<LoginPage />} />
          
          {/* Rota para página de cadastro/registro */}
          <Route path="/registration" element={<RegistrationPage />} />
          
          {/* Rota para seleção de perfis */}
          <Route path="/profiles" element={<ProfileSelectionPage />} />
          
          {/* Rota para página de planos de assinatura */}
          <Route path="/plans" element={<PlansPage />} />
          
          {/* Rota para recuperação de senha */}
          <Route path="/password-reset" element={<PasswordResetPage />} />
          
          {/* Rota catch-all para páginas não encontradas - DEVE SER A ÚLTIMA */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
