import { useState, ImgHTMLAttributes } from 'react';

interface OptimizedImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'onClick'> {
  src: string;
  alt: string;
  className?: string;
  onClick?: (e?: React.MouseEvent<HTMLImageElement>) => void;
}

/**
 * OptimizedImage component that handles WebP with JPEG fallback
 * Images are optimized at build time via vite-imagetools (max 1200px, 75% quality)
 * This component provides runtime fallback handling for older browsers
 */
const OptimizedImage = ({ src, alt, className, onClick, loading = 'lazy', ...props }: OptimizedImageProps) => {
  const [hasError, setHasError] = useState(false);
  
  // For images processed by imagetools, the src might be a picture object
  // or a simple string URL. Handle both cases.
  const isPictureObject = typeof src === 'object' && src !== null;
  
  if (isPictureObject && 'sources' in (src as any)) {
    const pictureData = src as { sources: Record<string, string>; img: { src: string; w: number; h: number } };
    
    return (
      <picture>
        {Object.entries(pictureData.sources).map(([format, srcSet]) => (
          <source 
            key={format} 
            srcSet={srcSet} 
            type={`image/${format}`} 
          />
        ))}
        <img
          src={pictureData.img.src}
          alt={alt}
          className={className}
          onClick={onClick}
          loading={loading}
          width={pictureData.img.w}
          height={pictureData.img.h}
          {...props}
        />
      </picture>
    );
  }
  
  // For simple string URLs (fallback or non-optimized images)
  const srcString = typeof src === 'string' ? src : '';
  
  // Generate WebP URL if it's a JPEG/PNG
  const isOptimizable = /\.(jpe?g|png)$/i.test(srcString);
  const webpSrc = isOptimizable && !hasError 
    ? srcString.replace(/\.(jpe?g|png)$/i, '.webp') 
    : null;
  
  // If we have a potential WebP version, use picture element
  if (webpSrc && !hasError) {
    return (
      <picture>
        <source srcSet={webpSrc} type="image/webp" />
        <img
          src={srcString}
          alt={alt}
          className={className}
          onClick={onClick}
          loading={loading}
          onError={() => setHasError(true)}
          {...props}
        />
      </picture>
    );
  }
  
  // Fallback to simple img tag
  return (
    <img
      src={srcString}
      alt={alt}
      className={className}
      onClick={onClick}
      loading={loading}
      {...props}
    />
  );
};

export default OptimizedImage;
