'use client';

import React from 'react';
import Image from 'next/image';

interface ClickableImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  loading?: 'lazy' | 'eager';
  sizes?: string;
  style?: React.CSSProperties;
}

const ClickableImage: React.FC<ClickableImageProps> = ({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  loading = 'lazy',
  sizes,
  style
}) => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Merhaba Yiğit'in sitesinden geliyorum.");
    window.open(`https://wa.me/905392994793?text=${message}`, '_blank');
  };

  return (
    <div 
      className={`relative cursor-pointer ${className || ''}`}
      style={style}
      onClick={handleWhatsAppClick}
    >
      <Image 
        src={src}
        alt={alt}
        width={width}
        height={height}
        fill={!width || !height}
        sizes={sizes}
        className="object-cover"
        priority={priority}
        loading={loading}
      />
    </div>
  );
};

export default ClickableImage; 