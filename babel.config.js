module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        'useBuiltIns': false
      }
    ],
    '@babel/preset-typescript'
  ],
  env: {
    production: {
      plugins: [
        'transform-remove-console'
      ],
    },
  },
  plugins: [
    [
      '@babel/plugin-proposal-decorators',
      {
        legacy: true
      }
    ],
    [
      '@babel/plugin-proposal-class-properties',
      {
        loose: true
      }
    ],
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ts', '.tsx', '.json'],
        alias: {
          '@libs': './src/assets/scripts/libs',
        },
      },
    ],
  ],
};
