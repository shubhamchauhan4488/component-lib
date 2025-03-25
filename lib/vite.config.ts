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
      globals: true,
      environment: 'jsdom',
      setupFiles: ['./src/test/setup.ts'],
      include: ['src/**/*.{test,spec}.{js,ts,jsx,tsx}'],
      exclude: [
        '**/node_modules/**',
        '**/dist/**',
        '**/storybook-static/**',
        'src/stories/**',
        'src/test/**',
      ],
      coverage: {
        provider: 'v8',
        enabled: true,
        include: ['src/**/*'],
        exclude: [
          '**/node_modules/**',
          '**/dist/**',
          '**/storybook-static/**',
          'src/stories/**',
          'src/test/**',
          'src/index.ts',
          'src/**/*types.ts',
          'src/**/*.d.ts',
        ],
        reporter: ['text', 'json', 'html'],
      },
    },
    build: {
      // sourcemap: true,
      lib: {
        entry: {
          main: resolve(__dirname, 'src/index.ts'),
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