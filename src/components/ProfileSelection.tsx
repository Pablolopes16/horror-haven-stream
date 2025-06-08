
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

// Perfis de exemplo com as novas imagens
const defaultProfiles: UserProfile[] = [
  {
    id: '1',
    name: 'Fantasma',
    avatar: '/lovable-uploads/b80d581a-0a19-4197-a0ca-680018c378e2.png'
  },
  {
    id: '2',
    name: 'Frankenstein',
    avatar: '/lovable-uploads/fdece66c-e67a-48cf-9626-921e83cd17f3.png'
  },
  {
    id: '3',
    name: 'Vampiro',
    avatar: '/lovable-uploads/5c8335b9-f86c-4663-86f6-598509922575.png'
  },
  {
    id: '4',
    name: 'Abóbora',
    avatar: '/lovable-uploads/405d476c-0d89-4123-b819-fb6f2c11ef0e.png'
  }
];

const ProfileSelection = () => {
  // Estado para gerenciar a lista de perfis disponíveis
  const [profiles] = useState<UserProfile[]>(defaultProfiles);
  // Estado para controlar qual perfil está selecionado
  const [selectedProfile, setSelectedProfile] = useState<string | null>(null);

  // Função para lidar com a seleção de um perfil
  const handleProfileSelect = (profileId: string) => {
    setSelectedProfile(profileId);
    console.log(`Perfil selecionado: ${profileId}`);
  };

  // Função para criar um novo perfil
  const handleCreateProfile = () => {
    console.log('Criar novo perfil');
    // Aqui implementaríamos a criação de um novo perfil
  };

  // Função para entrar com o perfil selecionado
  const handleEnter = () => {
    if (selectedProfile) {
      console.log(`Entrando com perfil: ${selectedProfile}`);
      // Aqui implementaríamos a navegação para a tela principal
    }
  };

  // Função para gerenciar os perfis existentes
  const handleManageProfiles = () => {
    console.log('Gerenciar perfis');
    // Aqui implementaríamos a tela de gerenciamento de perfis
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-terror-aqua-gradient">
      {/* Efeitos atmosféricos de fundo */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/6 w-64 h-64 bg-terror-aqua/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/6 w-96 h-96 bg-terror-aqua-light/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Conteúdo principal da página */}
      <div className="relative z-10 w-full max-w-4xl mx-4 text-center">
        {/* Seção do logo no topo */}
        <div className="mb-12">
          <div className="flex justify-center mb-8">
            <LogoProcessor />
          </div>
        </div>

        {/* Título principal da página */}
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-16">
          Quem está assistindo?
        </h1>

        {/* Grid de perfis disponíveis */}
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
              {/* Container da imagem do perfil sem bordas brancas */}
              <div className="w-32 h-32 bg-transparent rounded-2xl flex items-center justify-center overflow-hidden">
                <img 
                  src={profile.avatar} 
                  alt={profile.name}
                  className="w-20 h-20 object-contain"
                />
              </div>
              {/* Nome do perfil */}
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

        {/* Botão para entrar com o perfil selecionado */}
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

        {/* Link para gerenciar perfis */}
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
