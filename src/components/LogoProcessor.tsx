
import React, { useState, useEffect } from 'react';

// Componente para processar a logo e remover o fundo
const LogoProcessor = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Renderizar logo diretamente sem processamento
  const logoSrc = '/lovable-uploads/ab9321b7-3c7d-47d3-98c6-1e13db86afe6.png';

  return (
    <div className="relative">
      <img 
        src={logoSrc}
        alt="CineFlow Logo" 
        className="h-24 w-auto aqua-glow hover:animate-aqua-pulse transition-all duration-300"
        style={{ 
          filter: 'brightness(1.3) contrast(1.2) drop-shadow(0 0 10px rgba(79, 209, 197, 0.5))',
          background: 'transparent'
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
