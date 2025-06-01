
import React, { useState } from 'react';
import { Eye, EyeOff, ArrowLeft } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import LogoProcessor from './LogoProcessor';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Tentativa de login:', { email, password });
    // Aqui implementaríamos a lógica de autenticação real
  };

  const handleSocialLogin = (provider: string) => {
    console.log(`Login com ${provider}`);
    // Aqui implementaríamos o login social
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background com gradiente verde água */}
      <div className="absolute inset-0 bg-gradient-to-br from-terror-darker via-terror-green to-terror-dark">
        {/* Efeitos atmosféricos */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/6 w-64 h-64 bg-terror-aqua/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/6 w-96 h-96 bg-terror-aqua-light/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        </div>
      </div>

      {/* Conteúdo principal */}
      <div className="relative z-10 w-full max-w-md mx-4">
        {/* Logo no topo */}
        <div className="text-center mb-8">
          <div className="h-16 w-auto mx-auto mb-4 flex justify-center">
            <LogoProcessor />
          </div>
        </div>

        {/* Card de login */}
        <div className="bg-terror-aqua/20 backdrop-blur-md border border-terror-aqua/30 rounded-2xl p-8 shadow-2xl">
          {/* Botão voltar */}
          <button className="mb-6 text-terror-aqua hover:text-terror-aqua-light transition-colors">
            <ArrowLeft className="h-6 w-6" />
          </button>

          {/* Título */}
          <h2 className="text-3xl font-bold text-white text-center mb-8 aqua-text-glow">
            Login
          </h2>

          {/* Formulário */}
          <form onSubmit={handleLogin} className="space-y-6">
            {/* Campo E-mail */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-white font-medium">
                E-mail:
              </Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/90 border-0 text-terror-dark placeholder-gray-500 focus:ring-2 focus:ring-terror-aqua focus:bg-white"
                placeholder="Digite seu e-mail"
                required
              />
            </div>

            {/* Campo Senha */}
            <div className="space-y-2">
              <Label htmlFor="password" className="text-white font-medium">
                Senha:
              </Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-white/90 border-0 text-terror-dark placeholder-gray-500 focus:ring-2 focus:ring-terror-aqua focus:bg-white pr-10"
                  placeholder="Digite sua senha"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            {/* Link esqueceu senha */}
            <div className="text-right">
              <button
                type="button"
                className="text-terror-aqua hover:text-terror-aqua-light text-sm transition-colors"
              >
                Esqueceu a senha?
              </button>
            </div>

            {/* Botão Entrar */}
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-3 text-lg transition-all duration-300 transform hover:scale-105"
            >
              Entrar
            </Button>
          </form>

          {/* Link para cadastro */}
          <div className="mt-6 text-center">
            <p className="text-white mb-4">
              Ainda não tem uma conta?{' '}
              <button className="text-terror-aqua hover:text-terror-aqua-light font-semibold transition-colors">
                Cadastrar
              </button>
              <br />
              <span className="text-sm text-gray-300">
                ou faça login usando sua conta:
              </span>
            </p>

            {/* Botões de login social */}
            <div className="flex justify-center space-x-4 mt-4">
              <button
                onClick={() => handleSocialLogin('Google')}
                className="w-12 h-12 bg-white/20 hover:bg-white/30 border border-white/30 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <span className="text-white font-bold">G</span>
              </button>
              
              <button
                onClick={() => handleSocialLogin('LinkedIn')}
                className="w-12 h-12 bg-white/20 hover:bg-white/30 border border-white/30 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <span className="text-white font-bold">in</span>
              </button>
              
              <button
                onClick={() => handleSocialLogin('Facebook')}
                className="w-12 h-12 bg-white/20 hover:bg-white/30 border border-white/30 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <span className="text-white font-bold">f</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
