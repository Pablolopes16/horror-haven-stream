
import React, { useState, useEffect } from 'react';
import { removeBackground, loadImage } from '../utils/backgroundRemoval';

// Componente para processar a logo e remover o fundo
const LogoProcessor = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [processedLogoUrl, setProcessedLogoUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Função para processar a logo automaticamente quando o componente monta
  const processLogo = async () => {
    setIsProcessing(true);
    setError(null);
    
    try {
      console.log('Iniciando processamento da nova logo...');
      
      // Carregar a nova logo
      const response = await fetch('/lovable-uploads/eb326d5f-4b0f-47ad-9124-6b73717c5147.png');
      const blob = await response.blob();
      
      // Converter para elemento de imagem
      const imageElement = await loadImage(blob);
      
      // Remover o fundo
      const processedBlob = await removeBackground(imageElement);
      
      // Criar URL para a imagem processada
      const url = URL.createObjectURL(processedBlob);
      setProcessedLogoUrl(url);
      
      console.log('Nova logo processada com sucesso!');
    } catch (err) {
      console.error('Erro ao processar nova logo:', err);
      setError('Falha ao processar a logo. Usando versão original.');
    } finally {
      setIsProcessing(false);
    }
  };

  // Processar logo quando o componente monta
  useEffect(() => {
    processLogo();
  }, []);

  // Renderizar logo (processada ou original)
  const logoSrc = processedLogoUrl || '/lovable-uploads/eb326d5f-4b0f-47ad-9124-6b73717c5147.png';

  return (
    <div className="relative">
      {isProcessing && (
        <div className="absolute inset-0 bg-terror-aqua/20 rounded-lg flex items-center justify-center">
          <div className="text-terror-aqua text-sm">Processando logo...</div>
        </div>
      )}
      
      <img 
        src={logoSrc}
        alt="CineFlow Logo" 
        className="h-12 w-auto aqua-glow hover:animate-aqua-pulse transition-all duration-300"
        style={{ 
          filter: processedLogoUrl ? 'none' : 'brightness(1.2) contrast(1.1)',
          background: processedLogoUrl ? 'transparent' : 'none'
        }}
      />
      
      {error && (
        <div className="absolute -bottom-6 left-0 text-xs text-yellow-500">
          {error}
        </div>
      )}
    </div>
  );
};

export default LogoProcessor;
