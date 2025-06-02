
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
        className="h-20 w-auto aqua-glow hover:animate-aqua-pulse transition-all duration-300"
        style={{ 
          filter: 'brightness(2) contrast(3) saturate(0) invert(1) drop-shadow(0 0 15px rgba(79, 209, 197, 0.8))',
          background: 'transparent',
          mixBlendMode: 'screen'
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
