import babel from 'rollup-plugin-babel';
import sass from 'rollup-plugin-sass';

module.exports = {
  input: 'assets/js/app.js',
  output: {
    file: 'dist/bundle.js',
    format: 'cjs'
  },
  plugins: [
    babel({
      exclude: 'node_modules/**',
      babelrc: false,
      presets: [
        ['@babel/preset-env', { modules: false }]
      ],
    }),
    sass({
      output: 'dist/bundle.css',
    })
  ]
};
