import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export', // Permet l'export statique pour GitHub Pages
  trailingSlash: true, // Ajoute des slashes pour la compatibilité GitHub Pages
  basePath: '/nextjs-dashboard', // Chemin de base pour GitHub Pages
  assetPrefix: '/nextjs-dashboard', // Préfixe pour les assets
  images: {
    unoptimized: true, // Désactive l'optimisation d'images pour l'export statique
  },
};

export default nextConfig;
