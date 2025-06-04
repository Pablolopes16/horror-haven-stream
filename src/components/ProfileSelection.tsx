
import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { Button } from './ui/button';
import LogoProcessor from './LogoProcessor';

// Tipos para os perfis de usuário
interface UserProfile {
  id: string;
  name: string;
  avatar: string;
  isKid?: boolean;
}

// Perfis de exemplo baseados no protótipo
const defaultProfiles: UserProfile[] = [
  {
    id: '1',
    name: 'Fantasma',
    avatar: '/lovable-uploads/18b90af2-24d1-49c9-b277-3a3f360b4ec8.png'
  },
  {
    id: '2',
    name: 'Frankenstein',
    avatar: '/lovable-uploads/18b90af2-24d1-49c9-b277-3a3f360b4ec8.png'
  },
  {
    id: '3',
    name: 'Vampiro',
    avatar: '/lovable-uploads/18b90af2-24d1-49c9-b277-3a3f360b4ec8.png'
  },
  {
    id: '4',
    name: 'Abóbora',
    avatar: '/lovable-uploads/18b90af2-24d1-49c9-b277-3a3f360b4ec8.png'
  }
];

const ProfileSelection = () => {
  const [profiles] = useState<UserProfile[]>(defaultProfiles);
  const [selectedProfile, setSelectedProfile] = useState<string | null>(null);

  const handleProfileSelect = (profileId: string) => {
    setSelectedProfile(profileId);
    console.log(`Perfil selecionado: ${profileId}`);
  };

  const handleCreateProfile = () => {
    console.log('Criar novo perfil');
    // Aqui implementaríamos a criação de um novo perfil
  };

  const handleEnter = () => {
    if (selectedProfile) {
      console.log(`Entrando com perfil: ${selectedProfile}`);
      // Aqui implementaríamos a navegação para a tela principal
    }
  };

  const handleManageProfiles = () => {
    console.log('Gerenciar perfis');
    // Aqui implementaríamos a tela de gerenciamento de perfis
  };

  // Função para extrair avatar específico da imagem baseado no ID
  const getAvatarStyle = (profileId: string) => {
    const baseStyle = {
      width: '80px',
      height: '80px',
      backgroundImage: `url(/lovable-uploads/18b90af2-24d1-49c9-b277-3a3f360b4ec8.png)`,
      backgroundSize: '400px 80px',
      backgroundRepeat: 'no-repeat'
    };
    
    switch(profileId) {
      case '1': // Fantasma
        return {
          ...baseStyle,
          backgroundPosition: '0px 0px'
        };
      case '2': // Frankenstein  
        return {
          ...baseStyle,
          backgroundPosition: '-80px 0px'
        };
      case '3': // Vampiro
        return {
          ...baseStyle,
          backgroundPosition: '-160px 0px'
        };
      case '4': // Abóbora
        return {
          ...baseStyle,
          backgroundPosition: '-240px 0px'
        };
      default:
        return baseStyle;
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background com gradiente verde água igual ao login */}
      <div className="absolute inset-0 bg-gradient-to-br from-terror-darker via-terror-green to-terror-dark">
        {/* Efeitos atmosféricos */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/6 w-64 h-64 bg-terror-aqua/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/6 w-96 h-96 bg-terror-aqua-light/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        </div>
      </div>

      {/* Conteúdo principal */}
      <div className="relative z-10 w-full max-w-4xl mx-4 text-center">
        {/* Logo no topo */}
        <div className="mb-12">
          <div className="flex justify-center mb-8">
            <LogoProcessor />
          </div>
        </div>

        {/* Título principal */}
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-16">
          Quem está assistindo?
        </h1>

        {/* Grid de perfis */}
        <div className="flex justify-center items-center gap-8 mb-12 flex-wrap">
          {profiles.map((profile) => (
            <div
              key={profile.id}
              onClick={() => handleProfileSelect(profile.id)}
              className={`cursor-pointer transition-all duration-300 transform hover:scale-110 ${
                selectedProfile === profile.id 
                  ? 'ring-4 ring-terror-orange rounded-2xl' 
                  : 'hover:ring-2 hover:ring-terror-aqua rounded-2xl'
              }`}
            >
              <div className="w-32 h-32 bg-white/90 border-2 border-terror-aqua/30 rounded-2xl flex items-center justify-center overflow-hidden backdrop-blur-sm">
                <div style={getAvatarStyle(profile.id)} />
              </div>
              <p className="text-white mt-3 font-medium">{profile.name}</p>
            </div>
          ))}

          {/* Botão para adicionar novo perfil */}
          <div
            onClick={handleCreateProfile}
            className="cursor-pointer transition-all duration-300 transform hover:scale-110 hover:ring-2 hover:ring-terror-aqua rounded-2xl"
          >
            <div className="w-32 h-32 bg-terror-dark/50 border-2 border-terror-aqua/30 rounded-2xl flex items-center justify-center backdrop-blur-sm">
              <Plus className="w-12 h-12 text-terror-aqua" />
            </div>
            <p className="text-white mt-3 font-medium">Adicionar</p>
          </div>
        </div>

        {/* Botão Entrar */}
        {selectedProfile && (
          <div className="mb-8">
            <Button
              onClick={handleEnter}
              className="bg-gradient-to-r from-terror-orange to-terror-orange-dark hover:from-terror-orange-dark hover:to-terror-orange text-white font-bold py-3 px-12 text-lg transition-all duration-300 transform hover:scale-105"
            >
              Entrar
            </Button>
          </div>
        )}

        {/* Link Gerenciar Perfis */}
        <button
          onClick={handleManageProfiles}
          className="text-terror-aqua hover:text-terror-aqua-light transition-colors duration-300 text-lg font-medium underline"
        >
          Gerenciar Perfis
        </button>
      </div>
    </div>
  );
};

export default ProfileSelection;
