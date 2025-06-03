
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
    avatar: '/lovable-uploads/68e7f2cf-8512-45ad-b59d-892dffc832a8.png'
  },
  {
    id: '2',
    name: 'Frankenstein',
    avatar: '/lovable-uploads/eb326d5f-4b0f-47ad-9124-6b73717c5147.png'
  },
  {
    id: '3',
    name: 'Vampiro',
    avatar: '/lovable-uploads/ab9321b7-3c7d-47d3-98c6-1e13db86afe6.png'
  },
  {
    id: '4',
    name: 'Abóbora',
    avatar: '/lovable-uploads/68e7f2cf-8512-45ad-b59d-892dffc832a8.png'
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
              <div className="w-32 h-32 bg-terror-dark/50 border-2 border-terror-aqua/30 rounded-2xl flex items-center justify-center overflow-hidden backdrop-blur-sm">
                {/* Usando as mesmas imagens do protótipo */}
                {profile.id === '1' && (
                  <div className="w-20 h-20 bg-gray-500 rounded-lg flex items-center justify-center">
                    <div className="w-16 h-16 bg-white rounded-lg opacity-80"></div>
                  </div>
                )}
                {profile.id === '2' && (
                  <div className="w-20 h-20 bg-red-600 rounded-lg flex items-center justify-center">
                    <div className="w-16 h-14 bg-green-700 rounded-t-lg"></div>
                  </div>
                )}
                {profile.id === '3' && (
                  <div className="w-20 h-20 bg-gray-800 rounded-lg flex items-center justify-center relative">
                    <div className="w-16 h-16 bg-white rounded-full"></div>
                    <div className="absolute top-2 left-6 w-2 h-6 bg-red-600"></div>
                    <div className="absolute top-2 right-6 w-2 h-6 bg-red-600"></div>
                  </div>
                )}
                {profile.id === '4' && (
                  <div className="w-20 h-20 bg-orange-600 rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 bg-black rounded-full mb-2"></div>
                  </div>
                )}
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
