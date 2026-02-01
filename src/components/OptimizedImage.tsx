import { ImgHTMLAttributes } from 'react';

interface OptimizedImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'onClick'> {
  src: string;
  alt: string;
  className?: string;
  onClick?: (e?: React.MouseEvent<HTMLImageElement>) => void;
}

/**
 * Simple image component (optimization disabled for now)
 */
const OptimizedImage = ({ src, alt, className, onClick, loading = 'lazy', ...props }: OptimizedImageProps) => {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onClick={onClick}
      loading={loading}
      {...props}
    />
  );
};

export default OptimizedImage;
