
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import FeaturedMovie from '../components/FeaturedMovie';
import MovieGrid, { sampleMovies } from '../components/MovieGrid';
import Categories from '../components/Categories';
import Footer from '../components/Footer';

// Página principal da plataforma CineFlow
const Index = () => {
  
  // Função para lidar com a reprodução de filmes
  const handlePlayMovie = (movieId: number) => {
    console.log(`Iniciando reprodução do filme com ID: ${movieId}`);
    // Aqui implementaríamos a lógica para abrir o player de vídeo
  };

  // Dividindo os filmes em diferentes categorias para exibição
  const featuredMovies = sampleMovies.slice(0, 6); // Filmes em destaque
  const horrorMovies = sampleMovies.filter(movie => movie.genre === 'Terror'); // Filmes de terror puro
  const thrillerMovies = sampleMovies.filter(movie => movie.genre === 'Thriller' || movie.genre === 'Suspense'); // Thrillers e suspense
  const mysteryMovies = sampleMovies.filter(movie => movie.genre === 'Mistério' || movie.genre === 'Drama'); // Mistério e drama

  return (
    <div className="min-h-screen bg-terror-gradient">
      
      {/* Cabeçalho fixo da aplicação */}
      <Header />

      {/* Seção hero principal */}
      <Hero />

      {/* Filme em destaque com informações detalhadas */}
      <FeaturedMovie />

      {/* Seção principal de conteúdo */}
      <main className="relative z-10">
        
        {/* Grid de filmes em destaque */}
        <MovieGrid
          title="Filmes em Destaque"
          movies={featuredMovies}
          onPlayMovie={handlePlayMovie}
        />

        {/* Grid específico para terror */}
        {horrorMovies.length > 0 && (
          <MovieGrid
            title="Terror Puro"
            movies={horrorMovies}
            onPlayMovie={handlePlayMovie}
          />
        )}

        {/* Grid para thrillers e suspense */}
        {thrillerMovies.length > 0 && (
          <MovieGrid
            title="Suspense & Thriller"
            movies={thrillerMovies}
            onPlayMovie={handlePlayMovie}
          />
        )}

        {/* Grid para mistério e drama */}
        {mysteryMovies.length > 0 && (
          <MovieGrid
            title="Mistério & Drama"
            movies={mysteryMovies}
            onPlayMovie={handlePlayMovie}
          />
        )}

        {/* Seção de categorias */}
        <Categories />

        {/* Seção adicional - Novos lançamentos */}
        <section className="py-12 px-4 bg-terror-dark/30">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 horror-text">
              Novos Lançamentos Toda Semana
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Mantenha-se sempre no limite do terror com nossos lançamentos semanais. 
              Experiências interativas que vão além do cinema tradicional.
            </p>
            <button className="bg-gradient-to-r from-terror-orange to-red-600 hover:from-red-600 hover:to-terror-blood text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 horror-glow">
              Ver Próximos Lançamentos
            </button>
          </div>
        </section>
      </main>

      {/* Rodapé da aplicação */}
      <Footer />
    </div>
  );
};

export default Index;
