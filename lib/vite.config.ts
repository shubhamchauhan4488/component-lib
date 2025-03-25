import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'
import { libInjectCss } from 'vite-plugin-lib-inject-css'; // Import the plugin

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig(() => {
  return {
    plugins: [react(), libInjectCss()],
    test: {
      environment: 'jsdom',
      globals: true,
      setupFiles: './src/test/setup.ts',
    },
    build: {
      // sourcemap: true,
      lib: {
        entry: {
          components: resolve(__dirname, 'src/components/index.ts'),
          Accordion: resolve(__dirname, 'src/components/organisms/Accordion/src/index.tsx'),
          ExpandablePanel: resolve(__dirname, 'src/components/molecules/ExpandablePanel/src/index.tsx'),
          Icon: resolve(__dirname, 'src/components/atoms/Icon/src/index.tsx'),
        },
        name: 'component-lib',
        formats: ['es'],
      },
      rollupOptions: {
        external: ['react', 'react-dom', 'styled-components'],
        output: {
          entryFileNames: (chunk) => {
            if (chunk.name === 'main') return 'component-lib.es.js'
            return '[name]/index.js'
          },
          assetFileNames: '[name].[hash][extname]'
        }
      }
    }
  }
})