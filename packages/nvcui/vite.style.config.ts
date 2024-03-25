import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'

import fs from 'fs-extra'

export default defineConfig({
  build: {
    emptyOutDir: false, // ! 为true 会清空 dist目录
    rollupOptions: {
      output: {
        assetFileNames: () => 'nvcui.css',
      },
    },
    lib: {
      entry: 'src/style.ts',
      formats: ['es'],
      fileName: () => 'nvcui-style.js',
    },
  },

  plugins: [
    {
      name: 'remove:nvcui-style.js',
      closeBundle() {
        const targetPath = fileURLToPath(new URL('./dist', import.meta.url))
        const styleFilePath = path.join(targetPath, 'nvcui-style.js')
        fs.removeSync(styleFilePath)
      },

    },

  ],

})
