
import React, { useState } from 'react';
import { Eye, EyeOff, ArrowLeft } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Checkbox } from './ui/checkbox';
import LogoProcessor from './LogoProcessor';

const Registration = () => {
  const [formData, setFormData] = useState({
    email: '',
    confirmEmail: '',
    password: '',
    confirmPassword: '',
    name: '',
    surname: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [acceptPrivacy, setAcceptPrivacy] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleRegistration = (e: React.FormEvent) => {
    e.preventDefault();
    if (!acceptPrivacy) {
      alert('Você deve aceitar as políticas de privacidade para continuar.');
      return;
    }
    console.log('Dados de cadastro:', formData);
    // Aqui implementaríamos a lógica de cadastro real
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

        {/* Card de cadastro */}
        <div className="bg-terror-aqua/20 backdrop-blur-md border border-terror-aqua/30 rounded-2xl p-8 shadow-2xl">
          {/* Botão voltar */}
          <button className="mb-6 text-terror-aqua hover:text-terror-aqua-light transition-colors">
            <ArrowLeft className="h-6 w-6" />
          </button>

          {/* Título */}
          <h2 className="text-3xl font-bold text-white text-center mb-8 aqua-text-glow">
            Crie sua conta
          </h2>

          {/* Formulário */}
          <form onSubmit={handleRegistration} className="space-y-4">
            {/* Campo E-mail */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-white font-medium">
                E-mail:
              </Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="bg-white/90 border-0 text-terror-dark placeholder-gray-500 focus:ring-2 focus:ring-terror-aqua focus:bg-white"
                placeholder="Digite seu e-mail"
                required
              />
            </div>

            {/* Campo Confirmar E-mail */}
            <div className="space-y-2">
              <Label htmlFor="confirmEmail" className="text-white font-medium">
                Confirmar E-mail:
              </Label>
              <Input
                id="confirmEmail"
                type="email"
                value={formData.confirmEmail}
                onChange={(e) => handleInputChange('confirmEmail', e.target.value)}
                className="bg-white/90 border-0 text-terror-dark placeholder-gray-500 focus:ring-2 focus:ring-terror-aqua focus:bg-white"
                placeholder="Confirme seu e-mail"
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
                  value={formData.password}
                  onChange={(e) => handleInputChange('password', e.target.value)}
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

            {/* Campo Confirmar Senha */}
            <div className="space-y-2">
              <Label htmlFor="confirmPassword" className="text-white font-medium">
                Confirmar senha:
              </Label>
              <div className="relative">
                <Input
                  id="confirmPassword"
                  type={showConfirmPassword ? 'text' : 'password'}
                  value={formData.confirmPassword}
                  onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                  className="bg-white/90 border-0 text-terror-dark placeholder-gray-500 focus:ring-2 focus:ring-terror-aqua focus:bg-white pr-10"
                  placeholder="Confirme sua senha"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            {/* Campo Nome */}
            <div className="space-y-2">
              <Label htmlFor="name" className="text-white font-medium">
                Nome:
              </Label>
              <Input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                className="bg-white/90 border-0 text-terror-dark placeholder-gray-500 focus:ring-2 focus:ring-terror-aqua focus:bg-white"
                placeholder="Digite seu nome"
                required
              />
            </div>

            {/* Campo Sobrenome */}
            <div className="space-y-2">
              <Label htmlFor="surname" className="text-white font-medium">
                Sobrenome:
              </Label>
              <Input
                id="surname"
                type="text"
                value={formData.surname}
                onChange={(e) => handleInputChange('surname', e.target.value)}
                className="bg-white/90 border-0 text-terror-dark placeholder-gray-500 focus:ring-2 focus:ring-terror-aqua focus:bg-white"
                placeholder="Digite seu sobrenome"
                required
              />
            </div>

            {/* Checkbox Políticas de Privacidade */}
            <div className="flex items-center space-x-3 pt-4">
              <Checkbox
                id="privacy"
                checked={acceptPrivacy}
                onCheckedChange={setAcceptPrivacy}
                className="data-[state=checked]:bg-terror-aqua data-[state=checked]:border-terror-aqua"
              />
              <Label 
                htmlFor="privacy" 
                className="text-white text-sm cursor-pointer hover:text-terror-aqua-light transition-colors"
              >
                Aceitar políticas de privacidade
              </Label>
            </div>

            {/* Botão Criar Conta */}
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-terror-orange to-terror-orange-dark hover:from-terror-orange-dark hover:to-terror-orange text-white font-bold py-3 text-lg transition-all duration-300 transform hover:scale-105 mt-6"
            >
              Criar conta
            </Button>
          </form>

          {/* Link para login */}
          <div className="mt-6 text-center">
            <p className="text-white">
              Já tem uma conta?{' '}
              <button className="text-terror-aqua hover:text-terror-aqua-light font-semibold transition-colors">
                Faça login
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
