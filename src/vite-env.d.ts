/// <reference types="vite/client" />

// Type declarations for vite-imagetools
declare module '*?format=webp&w=1200&quality=75' {
  const src: string;
  export default src;
}

declare module '*?as=picture' {
  const picture: {
    sources: Record<string, string>;
    img: { src: string; w: number; h: number };
  };
  export default picture;
}

// Allow importing images with query params
declare module '*.jpg' {
  const src: string;
  export default src;
}

declare module '*.jpeg' {
  const src: string;
  export default src;
}

declare module '*.png' {
  const src: string;
  export default src;
}

declare module '*.webp' {
  const src: string;
  export default src;
}
