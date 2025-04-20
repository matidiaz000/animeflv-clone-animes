import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';
import moduleFederationConfig from './module-federation.config';

export default defineConfig({
  plugins: [
    pluginReact(),
    pluginModuleFederation(moduleFederationConfig)
  ],
  output: {
    assetPrefix: 'https://animeflv-clone-animes.vercel.app/',
  },
  server: {
    port: 3002,
    headers: {
      'Access-Control-Allow-Headers': 'X-Requested-With, Content-Type, Authorization',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Origin': '*',
    },
  }
});
