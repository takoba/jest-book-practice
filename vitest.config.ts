import path from 'path'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    include: ['src/**/*.test.{ts,mts,cts}'],
  },

  resolve: {
    alias: [
      { find: '~', replacement: path.resolve(__dirname, 'src') },
    ]
  },
  optimizeDeps: {
    esbuildOptions: {
      tsconfig: './tsconfig.test.json',
    }
  },
})
