module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current'
        }
      }
    ],
    '@babel/preset-typescript'
  ],
  plugins: [
    ['module-resolver', {
      alias: {
        '@config': './src/config',
        '@models': './src/models',
        '@services': './src/services',
        '@routes': './src/routes',
      }
    }]
  ],
  ignore: [
    '**/*.spec.ts'
  ]
}
