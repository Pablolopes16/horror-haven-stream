
import React from 'react';
import { Film, Tv, Music } from 'lucide-react';

// Interface para definir uma categoria
interface Category {
  id: number;
  name: string;
  description: string;
  icon: React.ReactNode;
  movieCount: number;
  gradient: string;
}

// Componente Categories - Seção para navegar pelas diferentes categorias de terror
const Categories = () => {
  
  // Dados das categorias disponíveis com gradientes verde água
  const categories: Category[] = [
    {
      id: 1,
      name: "Terror Psicológico",
      description: "Filmes que exploram os medos da mente humana",
      icon: <Film className="h-8 w-8" />,
      movieCount: 127,
      gradient: "from-terror-aqua-dark to-terror-dark"
    },
    {
      id: 2,
      name: "Slasher",
      description: "Clássicos do terror com muito suspense e adrenalina",
      icon: <Tv className="h-8 w-8" />,
      movieCount: 89,
      gradient: "from-red-900 to-terror-aqua-dark"
    },
    {
      id: 3,
      name: "Sobrenatural",
      description: "Forças além da compreensão humana",
      icon: <Music className="h-8 w-8" />,
      movieCount: 156,
      gradient: "from-terror-aqua to-terror-dark"
    },
    {
      id: 4,
      name: "Terror Cósmico",
      description: "Horrores vindos do espaço e do desconhecido",
      icon: <Film className="h-8 w-8" />,
      movieCount: 73,
      gradient: "from-blue-900 to-terror-aqua-dark"
    },
    {
      id: 5,
      name: "Found Footage",
      description: "Terror documental que parece real demais",
      icon: <Tv className="h-8 w-8" />,
      movieCount: 45,
      gradient: "from-yellow-900 to-terror-aqua-dark"
    },
    {
      id: 6,
      name: "Terror Nacional",
      description: "O melhor do terror brasileiro e latino",
      icon: <Music className="h-8 w-8" />,
      movieCount: 34,
      gradient: "from-orange-900 to-terror-aqua-dark"
    }
  ];

  // Função para lidar com o clique em uma categoria
  const handleCategoryClick = (categoryName: string) => {
    console.log(`Navegando para categoria: ${categoryName}`);
    // Aqui implementaríamos a navegação para a página da categoria
  };

  return (
    <section id="categorias" className="py-16 px-4 bg-terror-darker/50">
      <div className="container mx-auto">
        
        {/* Cabeçalho da seção com verde água */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 aqua-text-glow">
            Explore o Terror
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Descubra diferentes subgêneros do terror e encontre exatamente 
            <span className="text-terror-aqua"> o tipo de medo que você procura</span>
          </p>
          {/* Linha decorativa com verde água */}
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-terror-aqua to-transparent mx-auto mt-6"></div>
        </div>

        {/* Grade de categorias */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              onClick={() => handleCategoryClick(category.name)}
              className="group relative overflow-hidden rounded-xl cursor-pointer transform transition-all duration-300 hover:scale-105"
            >
              {/* Card da categoria com gradiente */}
              <div className={`bg-gradient-to-br ${category.gradient} p-6 h-48 flex flex-col justify-between border border-terror-aqua/30 hover:border-terror-aqua/70 transition-all duration-300 relative overflow-hidden`}>
                
                {/* Cabeçalho da categoria */}
                <div className="flex items-start justify-between relative z-10">
                  <div className="text-terror-aqua group-hover:text-white transition-colors duration-300">
                    {category.icon}
                  </div>
                  <div className="text-right">
                    <span className="text-sm text-gray-400">
                      {category.movieCount} filmes
                    </span>
                  </div>
                </div>

                {/* Conteúdo principal */}
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-terror-aqua-light transition-colors duration-300">
                    {category.name}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {category.description}
                  </p>
                </div>

                {/* Efeito de brilho verde água no hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-terror-aqua/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                
                {/* Border glow effect com verde água */}
                <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-terror-aqua/50 transition-colors duration-300 group-hover:shadow-[0_0_20px_rgba(0,206,209,0.3)]"></div>
                
                {/* Efeito de partículas no hover */}
                <div className="absolute top-2 right-2 w-1 h-1 bg-terror-aqua rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-terror-aqua-light rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-500" style={{animationDelay: '0.2s'}}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action com verde água */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-terror-aqua to-terror-aqua-dark hover:from-terror-aqua-light hover:to-terror-aqua text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 aqua-glow border border-terror-aqua-light/30">
            Ver Todas as Categorias
          </button>
        </div>
      </div>
    </section>
  );
};

export default Categories;
