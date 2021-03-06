import preprocess from 'svelte-preprocess';
import adapterStatic from '@sveltejs/adapter-static';
import { resolve } from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte'],

  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: [preprocess()],

  kit: {
    // hydrate the <div id="svelte"> element in src/app.html
    target: '#svelte',

    adapter: adapterStatic(),

    vite: {
      resolve: {
        alias: {
          $components: resolve('src/components/')
        }
      },
      server: {
        hmr: {
          port: 3001
        }
      }
    }
  }
};

export default config;
