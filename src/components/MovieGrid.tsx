
import React from 'react';
import MovieCard from './MovieCard';

// Interface para definir as propriedades do filme (reutilizada do MovieCard)
interface Movie {
  id: number;
  title: string;
  year: number;
  rating: string;
  image: string;
  description: string;
  genre: string;
}

// Props do componente MovieGrid
interface MovieGridProps {
  title: string;
  movies: Movie[];
  onPlayMovie?: (movieId: number) => void;
}

// Componente MovieGrid - Grade de filmes organizada por categoria
const MovieGrid: React.FC<MovieGridProps> = ({ title, movies, onPlayMovie }) => {
  
  // Função para lidar com a reprodução de um filme
  const handlePlayMovie = (movieId: number) => {
    if (onPlayMovie) {
      onPlayMovie(movieId);
    }
  };

  return (
    <section className="py-12 px-4">
      <div className="container mx-auto">
        
        {/* Título da seção com estilo verde água */}
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 aqua-text-glow">
            {title}
          </h2>
          {/* Linha decorativa embaixo do título com gradiente verde água */}
          <div className="w-24 h-1 bg-gradient-to-r from-terror-aqua via-terror-aqua-light to-transparent rounded-full"></div>
        </div>

        {/* Grade responsiva de filmes */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              onPlay={handlePlayMovie}
            />
          ))}
        </div>

        {/* Botão para ver mais filmes da categoria com estilo verde água */}
        <div className="text-center mt-8">
          <button className="bg-gradient-to-r from-terror-green to-terror-aqua-dark hover:from-terror-aqua hover:to-terror-aqua-light text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 border border-terror-aqua/30 hover:border-terror-aqua aqua-glow">
            Ver Mais em {title}
          </button>
        </div>
      </div>
    </section>
  );
};

// Dados de exemplo para os filmes (simulando uma API)
export const sampleMovies: Movie[] = [
  {
    id: 1,
    title: "A Casa de Papel",
    year: 2022,
    rating: "16+",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=600&fit=crop",
    description: "Um thriller psicológico que vai te manter na borda da cadeira até o último minuto.",
    genre: "Thriller"
  },
  {
    id: 2,
    title: "Floresta Sombria",
    year: 2023,
    rating: "18+",
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=600&fit=crop",
    description: "Uma jornada aterrorizante através de uma floresta onde cada sombra esconde um perigo.",
    genre: "Terror"
  },
  {
    id: 3,
    title: "Montanha do Medo",
    year: 2023,
    rating: "16+",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&h=600&fit=crop",
    description: "No topo da montanha, o terror toma uma forma que ninguém esperava.",
    genre: "Suspense"
  },
  {
    id: 4,
    title: "Luz Entre Árvores",
    year: 2022,
    rating: "14+",
    image: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=400&h=600&fit=crop",
    description: "Uma luz misteriosa na floresta atrai visitantes... mas nem todos retornam.",
    genre: "Mistério"
  },
  {
    id: 5,
    title: "Os Viajantes",
    year: 2021,
    rating: "16+",
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&h=600&fit=crop",
    description: "Dois viajantes descobrem que nem toda jornada tem um destino seguro.",
    genre: "Drama"
  },
  {
    id: 6,
    title: "Ecos do Passado",
    year: 2023,
    rating: "18+",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=600&fit=crop",
    description: "O passado nunca morre, ele apenas espera o momento certo para voltar.",
    genre: "Terror"
  }
];

export default MovieGrid;
