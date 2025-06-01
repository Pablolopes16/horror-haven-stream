
import React, { useState } from 'react';
import { Search, User, Menu, X } from 'lucide-react';

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
    <header className="fixed top-0 left-0 right-0 z-50 bg-terror-darker/95 backdrop-blur-md border-b border-terror-aqua/30">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo oficial da CineFlow */}
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/68e7f2cf-8512-45ad-b59d-892dffc832a8.png" 
              alt="CineFlow Logo" 
              className="h-12 w-auto aqua-glow hover:animate-aqua-pulse transition-all duration-300"
            />
          </div>

          {/* Navegação desktop - oculta em telas pequenas */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="text-white hover:text-terror-aqua transition-colors duration-300 font-medium relative group">
              Início
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-terror-aqua transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#filmes" className="text-white hover:text-terror-aqua transition-colors duration-300 font-medium relative group">
              Filmes
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-terror-aqua transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#series" className="text-white hover:text-terror-aqua transition-colors duration-300 font-medium relative group">
              Séries
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-terror-aqua transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#categorias" className="text-white hover:text-terror-aqua transition-colors duration-300 font-medium relative group">
              Categorias
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-terror-aqua transition-all duration-300 group-hover:w-full"></span>
            </a>
          </nav>

          {/* Barra de busca com estilo verde água */}
          <form onSubmit={handleSearch} className="hidden md:flex items-center relative">
            <input
              type="text"
              placeholder="Buscar filmes de terror..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-terror-green/30 border border-terror-aqua/50 text-white placeholder-gray-400 px-4 py-2 rounded-lg w-64 focus:outline-none focus:border-terror-aqua focus:ring-2 focus:ring-terror-aqua/30 transition-all duration-300"
            />
            <button
              type="submit"
              className="absolute right-2 text-gray-400 hover:text-terror-aqua transition-colors"
            >
              <Search className="h-5 w-5" />
            </button>
          </form>

          {/* Área do usuário e menu mobile */}
          <div className="flex items-center space-x-4">
            {/* Ícone do usuário - apenas desktop */}
            <button className="hidden md:block text-white hover:text-terror-aqua transition-colors">
              <User className="h-6 w-6" />
            </button>

            {/* Botão do menu mobile */}
            <button
              onClick={toggleMenu}
              className="md:hidden text-white hover:text-terror-aqua transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Menu mobile com estilo verde água */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-terror-aqua/30">
            <div className="py-4 space-y-4">
              {/* Barra de busca mobile */}
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  placeholder="Buscar filmes de terror..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-terror-green/30 border border-terror-aqua/50 text-white placeholder-gray-400 px-4 py-2 rounded-lg focus:outline-none focus:border-terror-aqua focus:ring-2 focus:ring-terror-aqua/30 transition-all duration-300"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-2 text-gray-400 hover:text-terror-aqua transition-colors"
                >
                  <Search className="h-5 w-5" />
                </button>
              </form>

              {/* Links de navegação mobile */}
              <nav className="flex flex-col space-y-2">
                <a href="#inicio" className="text-white hover:text-terror-aqua transition-colors font-medium py-2">
                  Início
                </a>
                <a href="#filmes" className="text-white hover:text-terror-aqua transition-colors font-medium py-2">
                  Filmes
                </a>
                <a href="#series" className="text-white hover:text-terror-aqua transition-colors font-medium py-2">
                  Séries
                </a>
                <a href="#categorias" className="text-white hover:text-terror-aqua transition-colors font-medium py-2">
                  Categorias
                </a>
                <a href="#perfil" className="text-white hover:text-terror-aqua transition-colors font-medium py-2">
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
