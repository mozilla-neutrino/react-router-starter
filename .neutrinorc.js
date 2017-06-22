module.exports = {
  use: [
    'neutrino-preset-react',
    neutrino => neutrino.config
      .entry('vendor')
        .add('react')
        .add('react-dom')
        .add('react-hot-loader')
        .add('react-router-dom')
        .add('react-async-component')
  ]
};
