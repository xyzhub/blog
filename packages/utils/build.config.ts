import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  // If entries is not provided, will be automatically inferred from package.json
  entries: [
    'src/index',
  ],

  clean: true, // Clean outDir before building

  // Change outDir, default is 'dist'
  outDir: 'dist',

  // Generates .d.ts declaration file
  declaration: true,

  // 默认只生成esm
  rollup: {
    emitCJS: true,
  },
})
