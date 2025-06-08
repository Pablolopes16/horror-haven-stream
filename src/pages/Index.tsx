
import React from 'react';
// Importação de todos os componentes necessários para a página principal
import Header from '../components/Header';
import Hero from '../components/Hero';
import FeaturedMovie from '../components/FeaturedMovie';
import MovieGrid, { sampleMovies } from '../components/MovieGrid';
import Categories from '../components/Categories';
import Footer from '../components/Footer';

// Componente da página principal da plataforma CineFlow
const Index = () => {
  
  // Função para lidar com a reprodução de filmes quando o usuário clica em "Play"
  const handlePlayMovie = (movieId: number) => {
    console.log(`Iniciando reprodução do filme com ID: ${movieId}`);
    // TODO: Implementar lógica para abrir o player de vídeo
  };

  // Organização dos filmes em diferentes categorias para exibição
  const featuredMovies = sampleMovies.slice(0, 6); // Primeiros 6 filmes para destaque
  const horrorMovies = sampleMovies.filter(movie => movie.genre === 'Terror'); // Filmes apenas de terror
  const thrillerMovies = sampleMovies.filter(movie => movie.genre === 'Thriller' || movie.genre === 'Suspense'); // Filmes de suspense e thriller
  const mysteryMovies = sampleMovies.filter(movie => movie.genre === 'Mistério' || movie.genre === 'Drama'); // Filmes de mistério e drama

  return (
    // Container principal com gradiente de fundo personalizado
    <div className="min-h-screen bg-terror-gradient">
      
      {/* Cabeçalho fixo da aplicação com navegação */}
      <Header />

      {/* Seção hero - banner principal da página */}
      <Hero />

      {/* Seção de filme em destaque com informações detalhadas */}
      <FeaturedMovie />

      {/* Conteúdo principal da página */}
      <main className="relative z-10">
        
        {/* Grid de filmes em destaque - seção principal */}
        <MovieGrid
          title="Filmes em Destaque"
          movies={featuredMovies}
          onPlayMovie={handlePlayMovie}
        />

        {/* Grid específico para filmes de terror puro */}
        {horrorMovies.length > 0 && (
          <MovieGrid
            title="Terror Puro"
            movies={horrorMovies}
            onPlayMovie={handlePlayMovie}
          />
        )}

        {/* Grid para filmes de suspense e thriller */}
        {thrillerMovies.length > 0 && (
          <MovieGrid
            title="Suspense & Thriller"
            movies={thrillerMovies}
            onPlayMovie={handlePlayMovie}
          />
        )}

        {/* Grid para filmes de mistério e drama */}
        {mysteryMovies.length > 0 && (
          <MovieGrid
            title="Mistério & Drama"
            movies={mysteryMovies}
            onPlayMovie={handlePlayMovie}
          />
        )}

        {/* Seção de categorias de filmes */}
        <Categories />

        {/* Seção promocional - Novos lançamentos */}
        <section className="py-12 px-4 bg-terror-dark/30">
          <div className="container mx-auto text-center">
            {/* Título da seção de lançamentos */}
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 horror-text">
              Novos Lançamentos Toda Semana
            </h2>
            {/* Descrição promocional */}
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Mantenha-se sempre no limite do terror com nossos lançamentos semanais. 
              Experiências interativas que vão além do cinema tradicional.
            </p>
            {/* Botão call-to-action */}
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
