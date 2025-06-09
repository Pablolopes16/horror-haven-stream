
import React from 'react';
import { Play, ArrowLeft } from 'lucide-react';

// Componente FeaturedMovie - Filme principal em destaque (versão simplificada)
const FeaturedMovie = () => {
  
  const handlePlayMovie = () => {
    console.log('Reproduzindo filme');
  };

  const handleBack = () => {
    console.log('Voltando à navegação');
  };

  return (
    <section className="relative min-h-screen flex items-center bg-terror-darker overflow-hidden">
      {/* Background do filme */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(10, 21, 21, 0.7), rgba(10, 21, 21, 0.8)), url('https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=450&fit=crop')`
        }}
      />
      
      {/* Grid de filmes pequenos nas laterais */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 hidden lg:flex flex-col space-y-4 z-10">
        {[1, 2, 3, 4].map((index) => (
          <div key={index} className="w-20 h-28 bg-gray-800 rounded overflow-hidden opacity-70 hover:opacity-100 transition-opacity cursor-pointer">
            <img 
              src={`https://images.unsplash.com/photo-${1500673922987 + index}?w=80&h=112&fit=crop`}
              alt={`Filme ${index}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      <div className="absolute right-4 top-1/2 -translate-y-1/2 hidden lg:flex flex-col space-y-4 z-10">
        {[5, 6, 7, 8].map((index) => (
          <div key={index} className="w-20 h-28 bg-gray-800 rounded overflow-hidden opacity-70 hover:opacity-100 transition-opacity cursor-pointer">
            <img 
              src={`https://images.unsplash.com/photo-${1500673922987 + index}?w=80&h=112&fit=crop`}
              alt={`Filme ${index}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Conteúdo principal simplificado */}
      <div className="relative z-20 container mx-auto px-4 py-20">
        <div className="max-w-4xl">
          
          {/* Botão de voltar */}
          <button 
            onClick={handleBack}
            className="mb-6 text-white hover:text-terror-aqua transition-colors flex items-center"
          >
            <ArrowLeft className="h-6 w-6" />
          </button>

          {/* Layout simplificado */}
          <div className="flex flex-col lg:flex-row gap-8 items-center justify-center">
            
            {/* Poster do filme */}
            <div className="relative">
              <div className="w-80 h-96 rounded-lg overflow-hidden border-4 border-terror-aqua shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=450&fit=crop"
                  alt="Filme em destaque"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Logo CineFlow no poster */}
              <div className="absolute top-4 left-4 text-terror-aqua font-bold text-xl">
                CINEFLOW
              </div>
            </div>

            {/* Botão de reproduzir centralizado */}
            <div className="flex flex-col items-center space-y-6">
              <button
                onClick={handlePlayMovie}
                className="bg-gradient-to-r from-terror-orange to-red-600 hover:from-red-600 hover:to-terror-blood text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 text-lg"
              >
                <Play className="h-6 w-6" />
                <span>Reproduzir</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedMovie;
