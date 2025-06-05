
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useToast } from "@/hooks/use-toast";

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
    <div className="min-h-screen bg-gradient-to-br from-terror-darker via-terror-dark to-terror-green flex items-center justify-center p-4">
      {/* Background overlay com efeito de terror */}
      <div className="absolute inset-0 bg-black/30"></div>
      
      <div className="relative z-10 w-full max-w-md">
        <Card className="bg-terror-aqua/90 backdrop-blur-sm border-terror-aqua/30 shadow-2xl">
          <CardContent className="p-8">
            {/* Botão de voltar */}
            <Link 
              to="/login" 
              className="inline-flex items-center text-terror-darker hover:text-terror-green transition-colors mb-6"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
            </Link>

            {/* Título */}
            <h1 className="text-3xl font-bold text-terror-darker text-center mb-8 font-serif">
              Redefinir Senha
            </h1>

            {/* Formulário */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-terror-darker font-medium mb-2">
                  E-mail cadastrado
                </label>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white/90 border-none text-terror-darker placeholder:text-gray-500 focus:ring-2 focus:ring-terror-green"
                  placeholder="seu@email.com"
                />
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-terror-orange hover:bg-terror-orange-dark text-white font-bold py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                {isLoading ? 'Enviando...' : 'Enviar link'}
              </Button>
            </form>

            {/* Texto informativo */}
            <p className="text-center text-terror-darker/80 text-sm mt-6 leading-relaxed">
              Uma mensagem será enviada para seu e-mail
              <br />
              para redefinir senha
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PasswordReset;
