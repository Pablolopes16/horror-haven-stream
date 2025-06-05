
import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

interface Plan {
  id: string;
  name: string;
  description: string;
  features: Array<{ text: string; included: boolean }>;
  price: string;
  highlighted?: boolean;
}

const plans: Plan[] = [
  {
    id: 'essential',
    name: 'Plano Essencial',
    description: 'Ideal para quem quer começar.',
    features: [
      { text: 'Qualidade de vídeo HD (720p)', included: true },
      { text: 'Mais de uma tela por vez', included: false },
      { text: 'Acesso a todo o catálogo sem anúncios', included: false },
      { text: 'Download não disponível', included: false }
    ],
    price: 'R$ 19,90/mês'
  },
  {
    id: 'premium',
    name: 'Plano Premium',
    description: 'Mais qualidade, sem interrupções.',
    features: [
      { text: 'Qualidade Full HD (1080p)', included: true },
      { text: 'Até 2 telas simultâneas', included: true },
      { text: 'Acesso completo sem anúncios', included: true },
      { text: 'Download de conteúdos em 1 dispositivo', included: true },
      { text: 'Perfis personalizados', included: true }
    ],
    price: 'R$ 29,90/mês',
    highlighted: true
  },
  {
    id: 'master',
    name: 'Plano Master',
    description: 'A melhor experiência para toda a família.',
    features: [
      { text: 'Acesso total e sem anúncios', included: true },
      { text: 'Qualidade Ultra HD 4K + Áudio Dolby Atmos', included: true },
      { text: 'Até 4 telas simultâneas', included: true },
      { text: 'Downloads ilimitados em até 4 dispositivos', included: true },
      { text: 'Acesso antecipado a lançamentos e conteúdos exclusivos', included: true }
    ],
    price: 'R$ 44,90/mês'
  }
];

const PlansSelection = () => {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const handlePlanSelect = (planId: string) => {
    setSelectedPlan(planId);
    console.log(`Plano selecionado: ${planId}`);
  };

  const handleBack = () => {
    console.log('Voltar');
    // Implementar navegação de volta
  };

  return (
    <div className="min-h-screen bg-terror-aqua-gradient relative overflow-hidden">
      {/* Efeitos atmosféricos */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/6 w-64 h-64 bg-terror-aqua/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/6 w-96 h-96 bg-terror-aqua-light/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Conteúdo principal */}
      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Botão voltar */}
        <div className="mb-8">
          <Button
            onClick={handleBack}
            variant="ghost"
            className="text-white hover:bg-white/10 p-2"
          >
            <ArrowLeft className="w-6 h-6" />
          </Button>
        </div>

        {/* Cabeçalho */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Escolha o seu Plano
          </h1>
          <p className="text-xl text-terror-aqua-light">
            Cancele a qualquer momento
          </p>
        </div>

        {/* Grid de planos */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-8">
          {plans.map((plan) => (
            <Card
              key={plan.id}
              className={`relative horror-card transition-all duration-300 transform hover:scale-105 cursor-pointer ${
                plan.highlighted 
                  ? 'border-terror-orange ring-2 ring-terror-orange/50' 
                  : 'border-terror-aqua/30'
              } ${
                selectedPlan === plan.id 
                  ? 'ring-4 ring-terror-aqua' 
                  : ''
              }`}
              onClick={() => handlePlanSelect(plan.id)}
            >
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold text-white mb-2">
                  {plan.name}
                </CardTitle>
                <p className="text-terror-aqua-light text-sm">
                  {plan.description}
                </p>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Lista de recursos */}
                <div className="space-y-3">
                  {plan.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <span className={`text-lg ${
                        feature.included ? 'text-green-400' : 'text-red-400'
                      }`}>
                        {feature.included ? '✓' : '✗'}
                      </span>
                      <span className={`text-sm ${
                        feature.included ? 'text-white' : 'text-gray-400'
                      }`}>
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Preço */}
                <div className="pt-4 border-t border-terror-aqua/20">
                  <div className="text-center mb-4">
                    <span className="text-3xl font-bold text-white">
                      {plan.price}
                    </span>
                  </div>

                  {/* Botão de seleção */}
                  <Button
                    className="w-full bg-gradient-to-r from-terror-orange to-terror-orange-dark hover:from-terror-orange-dark hover:to-terror-orange text-white font-bold py-3 transition-all duration-300"
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePlanSelect(plan.id);
                    }}
                  >
                    SELECIONAR
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Nota legal */}
        <div className="text-center text-xs text-gray-400 max-w-4xl mx-auto">
          <p className="mb-2">
            Válido ao final do período de cobrança. Termos se aplicam.
          </p>
          <p>
            Alguns programas no Hulu (Sem Anúncios) podem conter publicidade comercial. 
            Cada serviço deve ser acessado separadamente em cada serviço.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PlansSelection;
