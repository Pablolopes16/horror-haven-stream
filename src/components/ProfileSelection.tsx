
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
      {/* Sombra base */}
      <div className="absolute inset-0 bg-white/10 rounded-t-full blur-lg transform translate-y-2"></div>
      
      {/* Corpo principal do fantasma */}
      <div className="absolute inset-x-2 top-1 bottom-3 bg-gradient-to-b from-white via-gray-50 to-gray-100 rounded-t-full shadow-2xl">
        {/* Brilho interno */}
        <div className="absolute top-2 left-3 w-4 h-6 bg-white/80 rounded-full blur-sm"></div>
        <div className="absolute top-4 right-4 w-2 h-3 bg-white/60 rounded-full blur-sm"></div>
      </div>
      
      {/* Base ondulada detalhada */}
      <div className="absolute bottom-0 left-2 right-2 h-8 overflow-hidden">
        <div className="absolute bottom-0 w-full h-8 bg-gradient-to-b from-gray-100 to-white"
             style={{
               clipPath: 'polygon(0% 100%, 10% 20%, 20% 100%, 30% 30%, 40% 100%, 50% 25%, 60% 100%, 70% 35%, 80% 100%, 90% 20%, 100% 100%)'
             }}>
        </div>
      </div>
      
      {/* Olhos expressivos */}
      <div className="absolute top-7 left-5">
        <div className="w-4 h-5 bg-black rounded-full relative">
          <div className="absolute top-1 left-1 w-1.5 h-2 bg-white rounded-full opacity-80"></div>
        </div>
      </div>
      <div className="absolute top-7 right-5">
        <div className="w-4 h-5 bg-black rounded-full relative">
          <div className="absolute top-1 right-1 w-1.5 h-2 bg-white rounded-full opacity-80"></div>
        </div>
      </div>
      
      {/* Boca assombrada */}
      <div className="absolute top-14 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-4 bg-black rounded-full relative">
          <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-red-600 rounded-full opacity-70"></div>
        </div>
      </div>
      
      {/* Aura fantasmagórica */}
      <div className="absolute -inset-2 bg-cyan-400/20 rounded-full blur-md animate-pulse"></div>
    </div>
  );

  // Componente para desenhar o Frankenstein
  const FrankensteinAvatar = () => (
    <div className="w-24 h-24 relative">
      {/* Sombra */}
      <div className="absolute inset-0 bg-green-900/30 rounded-lg blur-lg transform translate-y-1"></div>
      
      {/* Cabelo/topo da cabeça */}
      <div className="absolute top-0 left-4 right-4 h-6 bg-gradient-to-b from-black to-gray-800 rounded-t-xl">
        <div className="absolute top-2 left-2 w-8 h-1 bg-gray-700 rounded"></div>
      </div>
      
      {/* Cabeça principal */}
      <div className="absolute top-4 left-3 right-3 h-14 bg-gradient-to-b from-green-500 via-green-600 to-green-700 rounded-lg border-2 border-green-800 shadow-xl">
        {/* Cicatrizes detalhadas */}
        <div className="absolute top-2 left-1 w-6 h-0.5 bg-green-900 rounded-full shadow-sm"></div>
        <div className="absolute top-2 left-1 w-6 h-0.5 bg-red-800/50 rounded-full transform translate-y-0.5"></div>
        
        <div className="absolute top-5 right-1 w-4 h-0.5 bg-green-900 rounded-full"></div>
        <div className="absolute top-5 right-1 w-4 h-0.5 bg-red-800/50 rounded-full transform translate-y-0.5"></div>
        
        <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-green-900 rounded-full"></div>
        <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-red-800/50 rounded-full transform translate-y-0.5"></div>
        
        {/* Sombreamento facial */}
        <div className="absolute inset-1 bg-green-800/20 rounded-lg"></div>
      </div>
      
      {/* Sobrancelhas grossas */}
      <div className="absolute top-7 left-5 w-4 h-1.5 bg-black rounded transform -rotate-12 shadow-sm"></div>
      <div className="absolute top-7 right-5 w-4 h-1.5 bg-black rounded transform rotate-12 shadow-sm"></div>
      
      {/* Olhos vermelhos brilhantes */}
      <div className="absolute top-9 left-6">
        <div className="w-3 h-3 bg-red-600 rounded-full relative shadow-lg">
          <div className="absolute inset-0 bg-red-500 rounded-full animate-pulse"></div>
          <div className="absolute top-0.5 left-0.5 w-1 h-1 bg-red-300 rounded-full"></div>
        </div>
      </div>
      <div className="absolute top-9 right-6">
        <div className="w-3 h-3 bg-red-600 rounded-full relative shadow-lg">
          <div className="absolute inset-0 bg-red-500 rounded-full animate-pulse"></div>
          <div className="absolute top-0.5 right-0.5 w-1 h-1 bg-red-300 rounded-full"></div>
        </div>
      </div>
      
      {/* Nariz */}
      <div className="absolute top-11 left-1/2 transform -translate-x-1/2 w-2 h-3 bg-green-700 rounded shadow-inner"></div>
      
      {/* Boca */}
      <div className="absolute top-14 left-1/2 transform -translate-x-1/2 w-7 h-2 bg-black rounded shadow-inner">
        <div className="absolute top-0.5 left-1 w-1 h-1 bg-white rounded-full"></div>
        <div className="absolute top-0.5 right-1 w-1 h-1 bg-white rounded-full"></div>
      </div>
      
      {/* Pescoço */}
      <div className="absolute bottom-1 left-7 right-7 h-5 bg-gradient-to-b from-green-600 to-green-700 border-2 border-green-800 shadow-lg"></div>
      
      {/* Parafusos metálicos */}
      <div className="absolute bottom-3 left-2">
        <div className="w-3 h-3 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full border border-gray-700 shadow-lg">
          <div className="absolute inset-0.5 bg-gray-300 rounded-full"></div>
          <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-0.5 h-1 bg-gray-700"></div>
        </div>
      </div>
      <div className="absolute bottom-3 right-2">
        <div className="w-3 h-3 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full border border-gray-700 shadow-lg">
          <div className="absolute inset-0.5 bg-gray-300 rounded-full"></div>
          <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-0.5 h-1 bg-gray-700"></div>
        </div>
      </div>
      
      {/* Efeito elétrico */}
      <div className="absolute -inset-1 bg-yellow-400/30 rounded-lg blur-sm animate-pulse"></div>
    </div>
  );

  // Componente para desenhar o Vampiro
  const VampireAvatar = () => (
    <div className="w-24 h-24 relative">
      {/* Sombra dramática */}
      <div className="absolute inset-0 bg-red-900/40 rounded-lg blur-lg transform translate-y-1"></div>
      
      {/* Capa externa */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black rounded-lg shadow-2xl"></div>
      
      {/* Capa interna vermelha */}
      <div className="absolute top-2 left-2 right-2 bottom-5 bg-gradient-to-b from-red-800 via-red-700 to-red-900 rounded-t-lg shadow-inner">
        <div className="absolute inset-1 bg-red-800/50 rounded-t-lg"></div>
      </div>
      
      {/* Rosto pálido */}
      <div className="absolute top-4 left-4 right-4 h-11 bg-gradient-to-b from-gray-100 via-gray-200 to-gray-300 rounded-lg shadow-lg border border-gray-300">
        {/* Sombreamento facial */}
        <div className="absolute inset-x-1 top-1 bottom-1 bg-gray-100/80 rounded-lg"></div>
      </div>
      
      {/* Cabelo negro */}
      <div className="absolute top-3 left-4 right-4 h-5 bg-gradient-to-b from-black to-gray-800 rounded-t-lg"></div>
      <div className="absolute top-3 left-5 w-3 h-7 bg-black rounded transform -rotate-12"></div>
      <div className="absolute top-3 right-5 w-3 h-7 bg-black rounded transform rotate-12"></div>
      
      {/* Sobrancelhas dramáticas */}
      <div className="absolute top-7 left-6 w-4 h-1 bg-black rounded transform rotate-20 shadow-sm"></div>
      <div className="absolute top-7 right-6 w-4 h-1 bg-black rounded transform -rotate-20 shadow-sm"></div>
      
      {/* Olhos vermelhos intensos */}
      <div className="absolute top-8 left-7">
        <div className="w-3 h-3 bg-red-600 rounded-full relative shadow-lg">
          <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-red-800 rounded-full"></div>
          <div className="absolute top-0.5 left-0.5 w-1 h-1 bg-red-300 rounded-full"></div>
          <div className="absolute -inset-0.5 bg-red-600/50 rounded-full blur-sm animate-pulse"></div>
        </div>
      </div>
      <div className="absolute top-8 right-7">
        <div className="w-3 h-3 bg-red-600 rounded-full relative shadow-lg">
          <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-red-800 rounded-full"></div>
          <div className="absolute top-0.5 right-0.5 w-1 h-1 bg-red-300 rounded-full"></div>
          <div className="absolute -inset-0.5 bg-red-600/50 rounded-full blur-sm animate-pulse"></div>
        </div>
      </div>
      
      {/* Nariz aristocrático */}
      <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-1.5 h-3 bg-gray-300 shadow-inner"></div>
      
      {/* Boca com presas */}
      <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-5 h-2 bg-red-800 rounded shadow-lg">
        <div className="absolute inset-0 bg-gradient-to-b from-red-700 to-red-900 rounded"></div>
      </div>
      {/* Presas */}
      <div className="absolute top-13 left-1/2 transform -translate-x-1/2 -translate-x-1.5 w-1 h-3 bg-white rounded-b shadow-sm"></div>
      <div className="absolute top-13 left-1/2 transform -translate-x-1/2 translate-x-1.5 w-1 h-3 bg-white rounded-b shadow-sm"></div>
      
      {/* Colarinho da capa */}
      <div className="absolute bottom-2 left-3 right-3 h-4 bg-black shadow-inner">
        <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-10 h-2 bg-red-700 rounded"></div>
        <div className="absolute top-0.5 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-red-600"></div>
      </div>
      
      {/* Aura sombria */}
      <div className="absolute -inset-1 bg-red-900/20 rounded-lg blur-md"></div>
    </div>
  );

  // Componente para desenhar a Abóbora
  const PumpkinAvatar = () => (
    <div className="w-24 h-24 relative">
      {/* Sombra */}
      <div className="absolute inset-0 bg-orange-800/40 rounded-full blur-lg transform translate-y-1"></div>
      
      {/* Corpo principal da abóbora */}
      <div className="absolute inset-2 bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600 rounded-full shadow-2xl border-2 border-orange-700">
        {/* Brilho superior */}
        <div className="absolute top-2 left-3 w-5 h-6 bg-yellow-300/60 rounded-full blur-sm"></div>
        <div className="absolute top-1 right-4 w-3 h-4 bg-orange-300/80 rounded-full blur-sm"></div>
        
        {/* Sombreamento inferior */}
        <div className="absolute bottom-2 inset-x-2 h-4 bg-orange-700/30 rounded-full blur-sm"></div>
      </div>
      
      {/* Linhas características da abóbora */}
      <div className="absolute top-2 bottom-2 left-5 w-1 bg-orange-800 rounded-full shadow-inner"></div>
      <div className="absolute top-2 bottom-2 left-1/2 transform -translate-x-1/2 w-1 bg-orange-800 rounded-full shadow-inner"></div>
      <div className="absolute top-2 bottom-2 right-5 w-1 bg-orange-800 rounded-full shadow-inner"></div>
      
      {/* Cabo detalhado */}
      <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-6 bg-gradient-to-b from-green-500 to-green-700 rounded-t-xl shadow-lg border border-green-800">
        <div className="absolute inset-1 bg-green-400/50 rounded-t-lg"></div>
      </div>
      {/* Folha do cabo */}
      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 translate-x-2 w-3 h-4 bg-green-500 rounded-full transform rotate-25 shadow-md border border-green-700">
        <div className="absolute inset-0.5 bg-green-400 rounded-full"></div>
      </div>
      
      {/* Olhos triangulares brilhantes */}
      <div className="absolute top-8 left-7">
        <div className="w-0 h-0 border-l-3 border-r-3 border-b-5 border-transparent border-b-yellow-400 relative">
          <div className="absolute -bottom-5 -left-3 w-0 h-0 border-l-3 border-r-3 border-b-5 border-transparent border-b-orange-900"></div>
          <div className="absolute -bottom-4 -left-2 w-0 h-0 border-l-2 border-r-2 border-b-3 border-transparent border-b-yellow-300"></div>
        </div>
      </div>
      <div className="absolute top-8 right-7">
        <div className="w-0 h-0 border-l-3 border-r-3 border-b-5 border-transparent border-b-yellow-400 relative">
          <div className="absolute -bottom-5 -left-3 w-0 h-0 border-l-3 border-r-3 border-b-5 border-transparent border-b-orange-900"></div>
          <div className="absolute -bottom-4 -left-2 w-0 h-0 border-l-2 border-r-2 border-b-3 border-transparent border-b-yellow-300"></div>
        </div>
      </div>
      
      {/* Nariz triangular */}
      <div className="absolute top-12 left-1/2 transform -translate-x-1/2">
        <div className="w-0 h-0 border-l-2 border-r-2 border-b-4 border-transparent border-b-yellow-400 relative">
          <div className="absolute -bottom-4 -left-2 w-0 h-0 border-l-2 border-r-2 border-b-4 border-transparent border-b-orange-900"></div>
        </div>
      </div>
      
      {/* Boca sinistra */}
      <div className="absolute top-15 left-1/2 transform -translate-x-1/2 w-10 h-4 bg-yellow-400 rounded-lg shadow-inner border-2 border-orange-900">
        <div className="absolute inset-1 bg-yellow-300 rounded"></div>
        
        {/* Dentes irregulares */}
        <div className="absolute top-0 left-2 w-1.5 h-3 bg-orange-500 rounded-b"></div>
        <div className="absolute top-0 left-4 w-1 h-2 bg-orange-500 rounded-b"></div>
        <div className="absolute top-0 right-4 w-1 h-2 bg-orange-500 rounded-b"></div>
        <div className="absolute top-0 right-2 w-1.5 h-3 bg-orange-500 rounded-b"></div>
        
        {/* Brilho interno */}
        <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-6 h-1 bg-yellow-200 rounded blur-sm"></div>
      </div>
      
      {/* Efeito de luz interna */}
      <div className="absolute -inset-1 bg-orange-400/30 rounded-full blur-md animate-pulse"></div>
      <div className="absolute top-8 left-8 w-6 h-6 bg-yellow-400/40 rounded-full blur-lg animate-pulse" style={{animationDelay: '1s'}}></div>
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
