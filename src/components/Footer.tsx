
import React from 'react';
import { Facebook, Instagram, Twitter, Film } from 'lucide-react';

// Componente Footer - Rodapé da plataforma
const Footer = () => {
  
  // Função para lidar com cliques em links (placeholder)
  const handleLinkClick = (section: string) => {
    console.log(`Navegando para: ${section}`);
  };

  // Função para lidar com newsletter
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Inscrevendo na newsletter');
    // Aqui implementaríamos a lógica de newsletter
  };

  return (
    <footer className="bg-terror-darker border-t border-terror-green">
      <div className="container mx-auto px-4">
        
        {/* Seção principal do footer */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Coluna 1: Logo e descrição */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Film className="h-8 w-8 text-terror-orange" />
              <h3 className="text-2xl font-bold">
                <span className="text-terror-orange">CINE</span>
                <span className="text-white">FLOW</span>
              </h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              A plataforma de streaming interativo que revoluciona 
              a experiência de assistir filmes de terror. 
              Suas escolhas determinam o destino dos personagens.
            </p>
            
            {/* Redes sociais */}
            <div className="flex space-x-4 pt-4">
              <button 
                onClick={() => handleLinkClick('facebook')}
                className="text-gray-400 hover:text-terror-orange transition-colors duration-300"
              >
                <Facebook className="h-6 w-6" />
              </button>
              <button 
                onClick={() => handleLinkClick('instagram')}
                className="text-gray-400 hover:text-terror-orange transition-colors duration-300"
              >
                <Instagram className="h-6 w-6" />
              </button>
              <button 
                onClick={() => handleLinkClick('twitter')}
                className="text-gray-400 hover:text-terror-orange transition-colors duration-300"
              >
                <Twitter className="h-6 w-6" />
              </button>
            </div>
          </div>

          {/* Coluna 2: Links rápidos */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-lg">Navegação</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => handleLinkClick('inicio')}
                  className="text-gray-400 hover:text-terror-orange transition-colors duration-300 text-left"
                >
                  Início
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick('filmes')}
                  className="text-gray-400 hover:text-terror-orange transition-colors duration-300 text-left"
                >
                  Catálogo de Filmes
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick('series')}
                  className="text-gray-400 hover:text-terror-orange transition-colors duration-300 text-left"
                >
                  Séries Interativas
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick('categorias')}
                  className="text-gray-400 hover:text-terror-orange transition-colors duration-300 text-left"
                >
                  Categorias
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick('novidades')}
                  className="text-gray-400 hover:text-terror-orange transition-colors duration-300 text-left"
                >
                  Novidades
                </button>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Suporte */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-lg">Suporte</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => handleLinkClick('ajuda')}
                  className="text-gray-400 hover:text-terror-orange transition-colors duration-300 text-left"
                >
                  Central de Ajuda
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick('contato')}
                  className="text-gray-400 hover:text-terror-orange transition-colors duration-300 text-left"
                >
                  Fale Conosco
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick('termos')}
                  className="text-gray-400 hover:text-terror-orange transition-colors duration-300 text-left"
                >
                  Termos de Uso
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick('privacidade')}
                  className="text-gray-400 hover:text-terror-orange transition-colors duration-300 text-left"
                >
                  Política de Privacidade
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick('assinatura')}
                  className="text-gray-400 hover:text-terror-orange transition-colors duration-300 text-left"
                >
                  Gerenciar Assinatura
                </button>
              </li>
            </ul>
          </div>

          {/* Coluna 4: Newsletter */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-lg">Fique por Dentro</h4>
            <p className="text-gray-400 mb-4 text-sm">
              Receba as últimas novidades sobre lançamentos 
              e conteúdos exclusivos diretamente no seu email.
            </p>
            
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <input
                type="email"
                placeholder="Seu melhor email"
                className="w-full bg-terror-green/30 border border-terror-green text-white placeholder-gray-400 px-4 py-2 rounded-lg focus:outline-none focus:border-terror-orange transition-colors"
                required
              />
              <button
                type="submit"
                className="w-full bg-terror-orange hover:bg-terror-orange-dark text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300"
              >
                Inscrever-se
              </button>
            </form>
          </div>
        </div>

        {/* Seção inferior do footer */}
        <div className="border-t border-terror-green py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              © 2024 CineFlow. Todos os direitos reservados. 
              Plataforma desenvolvida com tecnologia de ponta para experiências interativas.
            </div>

            {/* Links legais */}
            <div className="flex space-x-6 text-sm">
              <button 
                onClick={() => handleLinkClick('cookies')}
                className="text-gray-400 hover:text-terror-orange transition-colors duration-300"
              >
                Política de Cookies
              </button>
              <button 
                onClick={() => handleLinkClick('acessibilidade')}
                className="text-gray-400 hover:text-terror-orange transition-colors duration-300"
              >
                Acessibilidade
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
