const ReactCompilerConfig = {
    target: '18' // '17' | '18' | '19'
 };
import react from '@vitejs/plugin-react';
import laravel from 'laravel-vite-plugin';
import {
    defineConfig
} from 'vite';
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.tsx'],
            ssr: 'resources/js/ssr.jsx',
            refresh: true,
        }),
        react({
            babel: {
              plugins: [
                ["babel-plugin-react-compiler", ReactCompilerConfig],
              ],
            },
          }),
        tailwindcss(),
    ],
    esbuild: {
        jsx: 'automatic',
    },
});
