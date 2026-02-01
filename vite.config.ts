import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { imagetools } from "vite-imagetools";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    imagetools({
      defaultDirectives: (url) => {
        // Skip logo files - they need PNG transparency
        if (url.pathname.includes('logo')) {
          return new URLSearchParams();
        }
        // Apply optimization to all other images from assets folder
        if (url.pathname.includes('/assets/')) {
          return new URLSearchParams({
            format: 'webp;jpg',
            w: '1200',
            quality: '75',
            as: 'picture'
          });
        }
        return new URLSearchParams();
      }
    }),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
