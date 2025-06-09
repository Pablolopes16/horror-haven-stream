
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useToast } from "@/hooks/use-toast";
import LogoProcessor from './LogoProcessor';

const PasswordReset = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Email obrigatório",
        description: "Por favor, insira seu e-mail.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    // Simular envio do link de redefinição
    setTimeout(() => {
      toast({
        title: "Link enviado!",
        description: "Verifique sua caixa de entrada para redefinir sua senha.",
      });
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background com gradiente verde água seguindo o padrão do site */}
      <div className="absolute inset-0 bg-gradient-to-br from-terror-darker via-terror-green to-terror-dark">
        {/* Efeitos atmosféricos com verde água */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/6 w-64 h-64 bg-terror-aqua/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/6 w-96 h-96 bg-terror-aqua-light/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        </div>
      </div>

      {/* Conteúdo principal */}
      <div className="relative z-10 w-full max-w-md mx-4">
        {/* Logo no topo seguindo o padrão do site */}
        <div className="text-center mb-8">
          <div className="h-16 w-auto mx-auto mb-4 flex justify-center">
            <LogoProcessor />
          </div>
        </div>

        {/* Card de redefinição de senha com o design padrão */}
        <div className="bg-terror-aqua/20 backdrop-blur-md border border-terror-aqua/30 rounded-2xl p-8 shadow-2xl">
          {/* Botão de voltar */}
          <Link 
            to="/login" 
            className="inline-flex items-center text-terror-aqua hover:text-terror-aqua-light transition-colors mb-6"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
          </Link>

          {/* Título */}
          <h1 className="text-3xl font-bold text-white text-center mb-8 aqua-text-glow">
            Redefinir Senha
          </h1>

          {/* Formulário */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-white font-medium mb-2">
                E-mail cadastrado
              </label>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/90 border-0 text-terror-dark placeholder-gray-500 focus:ring-2 focus:ring-terror-aqua focus:bg-white"
                placeholder="seu@email.com"
              />
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-terror-orange to-terror-orange-dark hover:from-terror-orange-dark hover:to-terror-orange text-white font-bold py-3 text-lg transition-all duration-300 transform hover:scale-105"
            >
              {isLoading ? 'Enviando...' : 'Enviar link'}
            </Button>
          </form>

          {/* Texto informativo */}
          <p className="text-center text-white/80 text-sm mt-6 leading-relaxed">
            Uma mensagem será enviada para seu e-mail
            <br />
            para redefinir senha
          </p>
        </div>
      </div>
    </div>
  );
};

export default PasswordReset;
