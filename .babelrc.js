function generate(option) {
  return {
    presets: [
      [
        '@babel/preset-env',
        { targets: { node: '6.13' }, modules: !!option.modules },
      ],
    ],
    plugins: [
      ['@babel/plugin-proposal-object-rest-spread', { useBuiltIns: true }],
    ],
    env: {
      test: {
        presets: [['@babel/preset-env', { targets: { node: 'current' } }]],
        plugins: [
          ['@babel/plugin-proposal-object-rest-spread', { useBuiltIns: true }],
          'babel-plugin-empower-assert',
          'babel-plugin-espower',
        ],
      },
    },
  }
}

module.exports = Object.defineProperty(generate({}), 'generate', {
  value: generate,
})
