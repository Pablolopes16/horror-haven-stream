
import React from 'react';
import { Play, Music } from 'lucide-react';

// Componente Hero - Seção principal que destaca o filme em evidência
const Hero = () => {
  // Função para simular o play do filme (placeholder)
  const handlePlayMovie = () => {
    console.log('Reproduzindo filme em destaque');
    // Aqui implementaríamos a lógica de reprodução real
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background com imagem atmosférica de terror */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(10, 15, 10, 0.7), rgba(26, 47, 26, 0.8)), url('https://images.unsplash.com/photo-1500673922987-e212871fec22?w=1920&h=1080&fit=crop')`
        }}
      >
        {/* Overlay adicional para melhor legibilidade */}
        <div className="absolute inset-0 bg-gradient-to-r from-terror-darker/90 via-transparent to-terror-darker/90"></div>
      </div>

      {/* Conteúdo principal do hero */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Logo animado do CineFlow */}
          <div className="mb-8 animate-float">
            <Music className="h-16 w-16 text-terror-orange mx-auto mb-4 animate-glow" />
            <h1 className="text-6xl md:text-8xl font-bold mb-4">
              <span className="horror-text text-terror-orange">CINE</span>
              <span className="horror-text text-white">FLOW</span>
            </h1>
          </div>

          {/* Tagline principal */}
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-6 horror-text">
            O streaming interativo de terror
          </h2>
          
          {/* Subtítulo descritivo */}
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Onde suas escolhas decidem quem sobrevive. 
            <br />
            Mergulhe em uma experiência cinematográfica única.
          </p>

          {/* Botões de ação principais */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            
            {/* Botão principal - Assistir agora */}
            <button
              onClick={handlePlayMovie}
              className="group relative overflow-hidden bg-terror-orange hover:bg-terror-orange-dark text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 horror-glow flex items-center space-x-2 text-lg"
            >
              <Play className="h-6 w-6 group-hover:animate-pulse" />
              <span>Assistir Agora</span>
              
              {/* Efeito de brilho no hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </button>

            {/* Botão secundário - Explorar catálogo */}
            <button className="group border-2 border-terror-orange text-terror-orange hover:bg-terror-orange hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 text-lg">
              <span>Explorar Catálogo</span>
            </button>
          </div>

          {/* Indicador de rolagem */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-terror-orange rounded-full flex justify-center">
              <div className="w-1 h-3 bg-terror-orange rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Efeitos visuais adicionais */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Partículas flutuantes para criar atmosfera */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-terror-orange rounded-full animate-float opacity-60"></div>
        <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-terror-orange rounded-full animate-float opacity-40" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-3/4 w-1 h-1 bg-terror-orange rounded-full animate-float opacity-80" style={{animationDelay: '2s'}}></div>
      </div>
    </section>
  );
};

export default Hero;
