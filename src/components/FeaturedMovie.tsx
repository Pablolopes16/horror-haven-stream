
import React from 'react';
import { Play, ArrowLeft } from 'lucide-react';

// Interface para definir as propriedades do filme em destaque
interface FeaturedMovieData {
  id: number;
  title: string;
  year: number;
  duration: string;
  rating: string;
  image: string;
  description: string;
  fullDescription: string;
  genre: string;
  cast: string[];
  director: string;
  tags: string[];
}

// Componente FeaturedMovie - Filme principal em destaque
const FeaturedMovie = () => {
  // Dados do filme em destaque (simulando dados de API)
  const featuredMovie: FeaturedMovieData = {
    id: 1,
    title: "RUA DO MEDO",
    year: 2021,
    duration: "1h 47min",
    rating: "16+",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=450&fit=crop",
    description: "UMA TRILOGIA DE FILMES",
    fullDescription: "Depois de uma série de assassinatos brutais, um grupo de adolescentes enfrenta uma força maligna que aterrorizou a cidade há séculos. Bem-vindo à Rua do Medo.",
    genre: "Terror, Thriller",
    cast: ["Kiana Madeira", "Olivia Scott", "Welch", "Benjamin Flores Jr.", "mais"],
    director: "Leigh Janiak",
    tags: ["violência extrema", "conteúdo sexual", "drogas"]
  };

  const handlePlayMovie = () => {
    console.log(`Reproduzindo filme: ${featuredMovie.title}`);
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
          backgroundImage: `linear-gradient(rgba(10, 21, 21, 0.7), rgba(10, 21, 21, 0.8)), url('${featuredMovie.image}')`
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

      {/* Conteúdo principal */}
      <div className="relative z-20 container mx-auto px-4 py-20">
        <div className="max-w-4xl">
          
          {/* Botão de voltar */}
          <button 
            onClick={handleBack}
            className="mb-6 text-white hover:text-terror-aqua transition-colors flex items-center"
          >
            <ArrowLeft className="h-6 w-6" />
          </button>

          {/* Poster e informações principais */}
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            
            {/* Poster do filme */}
            <div className="relative">
              <div className="w-80 h-96 rounded-lg overflow-hidden border-4 border-terror-aqua shadow-2xl">
                <img 
                  src={featuredMovie.image}
                  alt={featuredMovie.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Logo CineFlow no poster */}
              <div className="absolute top-4 left-4 text-terror-aqua font-bold text-xl">
                CINEFLOW
              </div>
            </div>

            {/* Informações do filme */}
            <div className="flex-1 space-y-6">
              
              {/* Descrição e título */}
              <div>
                <p className="text-terror-aqua text-lg font-medium mb-2">
                  {featuredMovie.description}
                </p>
                <h1 className="text-6xl md:text-7xl font-bold text-white mb-4">
                  {featuredMovie.title}
                </h1>
                <div className="text-4xl font-bold text-terror-aqua">
                  PARTE 1
                </div>
              </div>

              {/* Botão de reproduzir */}
              <button
                onClick={handlePlayMovie}
                className="bg-gradient-to-r from-terror-orange to-red-600 hover:from-red-600 hover:to-terror-blood text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 text-lg"
              >
                <Play className="h-6 w-6" />
                <span>Reproduzir</span>
              </button>

              {/* Informações técnicas */}
              <div className="flex flex-wrap items-center gap-4 text-white">
                <span className="bg-terror-aqua text-terror-darker px-3 py-1 rounded font-bold">
                  {featuredMovie.rating}
                </span>
                <span>{featuredMovie.year}</span>
                <span>{featuredMovie.duration}</span>
                <span className="bg-gray-700 px-2 py-1 rounded text-sm">HD</span>
              </div>

              {/* Tags de conteúdo */}
              <div className="flex flex-wrap gap-2">
                {featuredMovie.tags.map((tag, index) => (
                  <span key={index} className="text-gray-400 text-sm">
                    {tag}{index < featuredMovie.tags.length - 1 ? ', ' : ''}
                  </span>
                ))}
              </div>

              {/* Sinopse */}
              <div>
                <h3 className="text-white font-bold text-lg mb-2">
                  Assista agora à trilogia completa
                </h3>
                <p className="text-gray-300 leading-relaxed max-w-2xl">
                  {featuredMovie.fullDescription}
                </p>
              </div>
            </div>
          </div>

          {/* Informações adicionais */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 text-white">
            
            {/* Elenco */}
            <div>
              <h4 className="text-terror-aqua font-bold mb-2">Elenco:</h4>
              <p className="text-gray-300">
                {featuredMovie.cast.join(', ')}
              </p>
            </div>

            {/* Gênero e direção */}
            <div>
              <h4 className="text-terror-aqua font-bold mb-2">Gênero:</h4>
              <p className="text-gray-300 mb-4">{featuredMovie.genre}</p>
              
              <h4 className="text-terror-aqua font-bold mb-2">Direção:</h4>
              <p className="text-gray-300">{featuredMovie.director}</p>
            </div>
          </div>

          {/* Categorias adicionais */}
          <div className="mt-6">
            <div className="flex flex-wrap gap-2 text-sm">
              <span className="text-terror-aqua">Este filme é:</span>
              <span className="text-gray-300">Arrepiante, Assustador, Irreverente</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedMovie;
