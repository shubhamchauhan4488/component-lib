import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'
import { libInjectCss } from 'vite-plugin-lib-inject-css'; // Import the plugin

const __dirname = dirname(fileURLToPath(import.meta.url))
const isLibraryBuild = process.env.BUILD_LIBRARY === 'true'

export default defineConfig(() => {
  if (isLibraryBuild) {
    return {
      plugins: [react(), libInjectCss()],
      build: {
        // sourcemap: true,
        lib: {
          entry: {
            components: resolve(__dirname, 'src/lib/src/components/index.ts'),
            Accordion: resolve(__dirname, 'src/lib/src/components/organisms/Accordion/index.tsx'),
            ExpandablePanel: resolve(__dirname, 'src/lib/src/components/molecules/ExpandablePanel/index.tsx'),
            Icon: resolve(__dirname, 'src/lib/src/components/atoms/Icon/index.tsx'),
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
  } else {
    // Client-app dev configuration
    return {
      plugins: [react()],
      root: resolve(__dirname, 'src'),
      build: {
        // Any client-app specific build settings
      }
    }
  }
})