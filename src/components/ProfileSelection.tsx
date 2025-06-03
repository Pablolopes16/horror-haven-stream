
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

  // Componente para desenhar o Fantasma
  const GhostAvatar = () => (
    <div className="w-24 h-24 relative">
      {/* Corpo do fantasma */}
      <div className="absolute inset-0 bg-white rounded-t-full opacity-90 shadow-lg">
        {/* Base ondulada do fantasma */}
        <div className="absolute bottom-0 left-0 right-0 h-6 bg-white">
          <div className="absolute bottom-0 w-full h-6 bg-white" 
               style={{
                 clipPath: 'polygon(0% 100%, 12.5% 0%, 25% 100%, 37.5% 0%, 50% 100%, 62.5% 0%, 75% 100%, 87.5% 0%, 100% 100%)'
               }}>
          </div>
        </div>
      </div>
      
      {/* Olhos do fantasma */}
      <div className="absolute top-6 left-4 w-3 h-4 bg-black rounded-full"></div>
      <div className="absolute top-6 right-4 w-3 h-4 bg-black rounded-full"></div>
      
      {/* Boca do fantasma */}
      <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-4 h-3 bg-black rounded-full"></div>
      
      {/* Efeito de brilho */}
      <div className="absolute top-2 left-2 w-2 h-2 bg-white rounded-full opacity-80"></div>
      
      {/* Sombra fantasmagórica */}
      <div className="absolute -inset-1 bg-terror-aqua/20 rounded-t-full blur-sm -z-10"></div>
    </div>
  );

  // Componente para desenhar o Frankenstein
  const FrankensteinAvatar = () => (
    <div className="w-24 h-24 relative">
      {/* Cabeça */}
      <div className="absolute top-2 left-2 right-2 h-16 bg-green-600 rounded-t-lg border-2 border-green-800">
        {/* Cicatrizes */}
        <div className="absolute top-1 left-1 w-6 h-0.5 bg-green-800"></div>
        <div className="absolute top-3 right-1 w-4 h-0.5 bg-green-800"></div>
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-green-800"></div>
      </div>
      
      {/* Cabelo/topo da cabeça */}
      <div className="absolute top-0 left-3 right-3 h-4 bg-black rounded-t-lg"></div>
      
      {/* Olhos */}
      <div className="absolute top-6 left-5 w-2 h-2 bg-red-600 rounded-full"></div>
      <div className="absolute top-6 right-5 w-2 h-2 bg-red-600 rounded-full"></div>
      
      {/* Sobrancelhas */}
      <div className="absolute top-5 left-4 w-3 h-1 bg-black rounded"></div>
      <div className="absolute top-5 right-4 w-3 h-1 bg-black rounded"></div>
      
      {/* Nariz */}
      <div className="absolute top-9 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-green-700 rounded"></div>
      
      {/* Boca */}
      <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-6 h-1 bg-black rounded"></div>
      
      {/* Parafusos no pescoço */}
      <div className="absolute bottom-2 left-1 w-2 h-2 bg-gray-600 rounded-full"></div>
      <div className="absolute bottom-2 right-1 w-2 h-2 bg-gray-600 rounded-full"></div>
      
      {/* Pescoço */}
      <div className="absolute bottom-0 left-6 right-6 h-4 bg-green-600 border-2 border-green-800"></div>
      
      {/* Efeito elétrico */}
      <div className="absolute -inset-1 bg-yellow-400/20 rounded-lg blur-sm -z-10"></div>
    </div>
  );

  // Componente para desenhar o Vampiro
  const VampireAvatar = () => (
    <div className="w-24 h-24 relative">
      {/* Capa */}
      <div className="absolute inset-0 bg-black rounded-lg"></div>
      <div className="absolute top-1 left-1 right-1 bottom-4 bg-red-800 rounded-t-lg"></div>
      
      {/* Rosto */}
      <div className="absolute top-3 left-3 right-3 h-12 bg-gray-200 rounded-lg">
        {/* Cabelo */}
        <div className="absolute -top-1 left-0 right-0 h-4 bg-black rounded-t-lg"></div>
        <div className="absolute -top-1 left-2 w-2 h-6 bg-black rounded"></div>
        <div className="absolute -top-1 right-2 w-2 h-6 bg-black rounded"></div>
      </div>
      
      {/* Olhos vermelhos */}
      <div className="absolute top-6 left-6 w-2 h-2 bg-red-600 rounded-full"></div>
      <div className="absolute top-6 right-6 w-2 h-2 bg-red-600 rounded-full"></div>
      
      {/* Sobrancelhas angulares */}
      <div className="absolute top-5 left-5 w-3 h-1 bg-black rounded transform rotate-12"></div>
      <div className="absolute top-5 right-5 w-3 h-1 bg-black rounded transform -rotate-12"></div>
      
      {/* Nariz */}
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-1 h-2 bg-gray-300"></div>
      
      {/* Boca com presas */}
      <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-4 h-2 bg-red-700 rounded"></div>
      <div className="absolute top-11 left-1/2 transform -translate-x-1/2 -translate-x-1 w-1 h-2 bg-white rounded-b"></div>
      <div className="absolute top-11 left-1/2 transform -translate-x-1/2 translate-x-1 w-1 h-2 bg-white rounded-b"></div>
      
      {/* Colarinho da capa */}
      <div className="absolute bottom-2 left-2 right-2 h-3 bg-black"></div>
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-2 bg-red-600"></div>
      
      {/* Efeito sombrio */}
      <div className="absolute -inset-1 bg-red-900/30 rounded-lg blur-sm -z-10"></div>
    </div>
  );

  // Componente para desenhar a Abóbora
  const PumpkinAvatar = () => (
    <div className="w-24 h-24 relative">
      {/* Corpo da abóbora */}
      <div className="absolute inset-1 bg-orange-500 rounded-full">
        {/* Linhas da abóbora */}
        <div className="absolute top-0 bottom-0 left-3 w-0.5 bg-orange-700 rounded-full"></div>
        <div className="absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 w-0.5 bg-orange-700 rounded-full"></div>
        <div className="absolute top-0 bottom-0 right-3 w-0.5 bg-orange-700 rounded-full"></div>
      </div>
      
      {/* Cabo da abóbora */}
      <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-3 h-4 bg-green-600 rounded-t-lg"></div>
      <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 translate-x-1 w-2 h-3 bg-green-500 rounded transform rotate-12"></div>
      
      {/* Olhos triangulares */}
      <div className="absolute top-6 left-6 w-0 h-0 border-l-2 border-r-2 border-b-4 border-transparent border-b-black"></div>
      <div className="absolute top-6 right-6 w-0 h-0 border-l-2 border-r-2 border-b-4 border-transparent border-b-black"></div>
      
      {/* Nariz triangular */}
      <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-b-3 border-transparent border-b-black"></div>
      
      {/* Boca assombrada */}
      <div className="absolute top-13 left-1/2 transform -translate-x-1/2 w-8 h-3 bg-black rounded">
        {/* Dentes irregulares */}
        <div className="absolute top-0 left-1 w-1 h-2 bg-orange-500"></div>
        <div className="absolute top-0 left-3 w-1 h-1 bg-orange-500"></div>
        <div className="absolute top-0 right-3 w-1 h-1 bg-orange-500"></div>
        <div className="absolute top-0 right-1 w-1 h-2 bg-orange-500"></div>
      </div>
      
      {/* Brilho */}
      <div className="absolute top-3 left-4 w-3 h-3 bg-yellow-300 rounded-full opacity-60"></div>
      
      {/* Efeito de luz interna */}
      <div className="absolute -inset-1 bg-orange-400/40 rounded-full blur-sm -z-10"></div>
    </div>
  );

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
                {/* Renderizando os avatares detalhados */}
                {profile.id === '1' && <GhostAvatar />}
                {profile.id === '2' && <FrankensteinAvatar />}
                {profile.id === '3' && <VampireAvatar />}
                {profile.id === '4' && <PumpkinAvatar />}
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
