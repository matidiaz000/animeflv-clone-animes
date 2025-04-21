import { createModuleFederationConfig } from '@module-federation/rsbuild-plugin';

export default createModuleFederationConfig({
  name: 'animes',
  filename: "remoteEntry.js",
  exposes: {
    '.': './src/App.tsx',
  },
  shared: {
    react: {
      singleton: true,
      eager: true,
    },
    'react-dom': {
      singleton: true,
      eager: true,
    },
    'react-router-dom': {
      singleton: true,
      eager: true,
    },
    '@matidiaz000/animeflv-clone-library': {
      singleton: true,
      eager: true,
    },
  },
});
