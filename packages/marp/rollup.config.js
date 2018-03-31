import autoprefixer from 'autoprefixer'
import babel from 'rollup-plugin-babel'
import path from 'path'
import postcss from 'rollup-plugin-postcss'
import pkg from './package.json'

export default [
  {
    external: ['@marp-team/marpit'],
    input: `src/${path.basename(pkg.main)}`,
    output: {
      name: 'marp',
      file: pkg.main,
      format: 'cjs',
    },
    plugins: [
      postcss({
        inject: false,
        plugins: [autoprefixer()],
      }),
      babel({ exclude: 'node_modules/**' }),
    ],
  },
]
