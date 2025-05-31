
import React, { useState } from 'react';
import { Play, Film } from 'lucide-react';

// Interface para definir as propriedades do filme
interface Movie {
  id: number;
  title: string;
  year: number;
  rating: string;
  image: string;
  description: string;
  genre: string;
}

// Props do componente MovieCard
interface MovieCardProps {
  movie: Movie;
  onPlay?: (movieId: number) => void;
}

// Componente MovieCard - Card individual para exibir informações do filme
const MovieCard: React.FC<MovieCardProps> = ({ movie, onPlay }) => {
  // Estado para controlar o hover do card
  const [isHovered, setIsHovered] = useState(false);

  // Função para lidar com o clique no botão play
  const handlePlayClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Impede que o clique se propague para o card
    if (onPlay) {
      onPlay(movie.id);
    }
    console.log(`Reproduzindo filme: ${movie.title}`);
  };

  // Função para lidar com o clique no card
  const handleCardClick = () => {
    console.log(`Abrindo detalhes do filme: ${movie.title}`);
    // Aqui implementaríamos a navegação para a página de detalhes
  };

  return (
    <div
      className="group relative overflow-hidden rounded-lg cursor-pointer transform transition-all duration-300 hover:scale-105"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleCardClick}
    >
      {/* Container da imagem do filme */}
      <div className="relative aspect-[2/3] overflow-hidden rounded-lg">
        
        {/* Imagem do poster do filme */}
        <img
          src={movie.image}
          alt={movie.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          onError={(e) => {
            // Fallback caso a imagem não carregue
            e.currentTarget.src = 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=600&fit=crop';
          }}
        />

        {/* Overlay escuro que aparece no hover com tons de verde água */}
        <div className={`absolute inset-0 bg-gradient-to-t from-terror-darker via-terror-aqua/20 to-transparent transition-opacity duration-300 ${
          isHovered ? 'opacity-90' : 'opacity-0'
        }`} />

        {/* Badge de classificação no canto superior direito com verde água */}
        <div className="absolute top-2 right-2 bg-terror-aqua/90 text-white text-xs font-bold px-2 py-1 rounded border border-terror-aqua-light/50">
          {movie.rating}
        </div>

        {/* Botão de play que aparece no hover com estilo verde água */}
        <div className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
          isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
        }`}>
          <button
            onClick={handlePlayClick}
            className="bg-gradient-to-r from-terror-aqua to-terror-aqua-dark hover:from-terror-aqua-light hover:to-terror-aqua text-white rounded-full p-4 transform transition-all duration-200 hover:scale-110 aqua-glow border border-terror-aqua-light/30"
          >
            <Play className="h-6 w-6 fill-current" />
          </button>
        </div>

        {/* Informações do filme que aparecem no hover */}
        <div className={`absolute bottom-0 left-0 right-0 p-4 transition-all duration-300 ${
          isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          
          {/* Título do filme com glow verde água */}
          <h3 className="text-white font-bold text-lg mb-1 aqua-text-glow">
            {movie.title}
          </h3>
          
          {/* Ano e gênero */}
          <div className="flex items-center space-x-2 text-sm text-gray-300 mb-2">
            <span>{movie.year}</span>
            <span className="text-terror-aqua">•</span>
            <span className="text-terror-aqua-light">{movie.genre}</span>
          </div>
          
          {/* Descrição do filme (truncada) */}
          <p className="text-gray-400 text-sm line-clamp-2">
            {movie.description}
          </p>
        </div>

        {/* Borda que aparece no hover com efeito verde água */}
        <div className={`absolute inset-0 rounded-lg border-2 transition-all duration-300 ${
          isHovered ? 'border-terror-aqua/60 shadow-[0_0_20px_rgba(0,206,209,0.4)]' : 'border-transparent'
        }`} />
      </div>

      {/* Título visível sempre (fora do hover) */}
      <div className={`mt-3 transition-opacity duration-300 ${isHovered ? 'opacity-0' : 'opacity-100'}`}>
        <h3 className="text-white font-semibold text-base truncate hover:text-terror-aqua transition-colors duration-300">
          {movie.title}
        </h3>
        <p className="text-gray-400 text-sm">
          {movie.year} • <span className="text-terror-aqua-light">{movie.genre}</span>
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
