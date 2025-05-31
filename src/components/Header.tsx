
import React, { useState } from 'react';
import { Search, User, Menu, X, Film } from 'lucide-react';

// Componente Header - Barra de navegação principal da plataforma
const Header = () => {
  // Estado para controlar se o menu mobile está aberto
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Estado para o termo de busca
  const [searchTerm, setSearchTerm] = useState('');

  // Função para alternar o menu mobile
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Função para lidar com a busca (placeholder por enquanto)
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Buscando por:', searchTerm);
    // Aqui implementaríamos a lógica de busca real
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-terror-darker/95 backdrop-blur-md border-b border-terror-green">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo da CineFlow - inspirado no design das referências */}
          <div className="flex items-center space-x-2">
            <Film className="h-8 w-8 text-terror-orange animate-glow" />
            <h1 className="text-2xl font-bold horror-text text-terror-orange">
              CINE<span className="text-white">FLOW</span>
            </h1>
          </div>

          {/* Navegação desktop - oculta em telas pequenas */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="text-white hover:text-terror-orange transition-colors duration-300 font-medium">
              Início
            </a>
            <a href="#filmes" className="text-white hover:text-terror-orange transition-colors duration-300 font-medium">
              Filmes
            </a>
            <a href="#series" className="text-white hover:text-terror-orange transition-colors duration-300 font-medium">
              Séries
            </a>
            <a href="#categorias" className="text-white hover:text-terror-orange transition-colors duration-300 font-medium">
              Categorias
            </a>
          </nav>

          {/* Barra de busca - centralizada no desktop */}
          <form onSubmit={handleSearch} className="hidden md:flex items-center relative">
            <input
              type="text"
              placeholder="Buscar filmes de terror..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-terror-green/50 border border-terror-green text-white placeholder-gray-400 px-4 py-2 rounded-lg w-64 focus:outline-none focus:border-terror-orange transition-colors"
            />
            <button
              type="submit"
              className="absolute right-2 text-gray-400 hover:text-terror-orange transition-colors"
            >
              <Search className="h-5 w-5" />
            </button>
          </form>

          {/* Área do usuário e menu mobile */}
          <div className="flex items-center space-x-4">
            {/* Ícone do usuário - apenas desktop */}
            <button className="hidden md:block text-white hover:text-terror-orange transition-colors">
              <User className="h-6 w-6" />
            </button>

            {/* Botão do menu mobile */}
            <button
              onClick={toggleMenu}
              className="md:hidden text-white hover:text-terror-orange transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Menu mobile - aparece quando isMenuOpen é true */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-terror-green">
            <div className="py-4 space-y-4">
              {/* Barra de busca mobile */}
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  placeholder="Buscar filmes de terror..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-terror-green/50 border border-terror-green text-white placeholder-gray-400 px-4 py-2 rounded-lg focus:outline-none focus:border-terror-orange transition-colors"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-2 text-gray-400 hover:text-terror-orange transition-colors"
                >
                  <Search className="h-5 w-5" />
                </button>
              </form>

              {/* Links de navegação mobile */}
              <nav className="flex flex-col space-y-2">
                <a href="#inicio" className="text-white hover:text-terror-orange transition-colors font-medium py-2">
                  Início
                </a>
                <a href="#filmes" className="text-white hover:text-terror-orange transition-colors font-medium py-2">
                  Filmes
                </a>
                <a href="#series" className="text-white hover:text-terror-orange transition-colors font-medium py-2">
                  Séries
                </a>
                <a href="#categorias" className="text-white hover:text-terror-orange transition-colors font-medium py-2">
                  Categorias
                </a>
                <a href="#perfil" className="text-white hover:text-terror-orange transition-colors font-medium py-2">
                  Meu Perfil
                </a>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
