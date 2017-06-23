# React Router Starter

Create React apps with zero initial configuration. `react-router-starter` is built using [Neutrino](https://github.com/mozilla-neutrino/neutrino-dev) to harness the power of Webpack with the simplicity of [presets](https://neutrino.js.org/presets/). 
 
## Features

- Zero upfront configuration necessary to start developing and building a React web app
- Code splitting with Webpack
- Extends from [neutrino-preset-react](https://neutrino.js.org/presets/neutrino-preset-react/)
  - Modern Babel compilation adding JSX and object rest spread syntax
  - Support for React Hot Loader
  - Write JSX in .js or .jsx files 
- Extends from [neutrino-preset-web](https://neutrino.js.org/presets/neutrino-preset-web/)
  - Modern Babel compilation supporting ES modules, last 2 major browser versions, and async functions
  - Webpack loaders for importing HTML, CSS, images, icons, and fonts
  - Webpack Dev Server during development
  - Automatic creation of HTML pages, no templating necessary
  - Hot Module Replacement support
  - Production-optimized bundles with Babili minification and easy chunking
  - Easily extensible to customize your project as needed

## Requirements

- Node.js v6.9+
- Yarn or npm client

## Installation

To get you started fork and clone the `react-router-starter` repository and install the dependencies using Yarn or the npm client.

```bash
❯ cd react-router-starter/
❯ yarn
```

## Quick start

### Yarn

```bash 
❯ yarn start
✔ Development server running on: http://localhost:5000
✔ Build completed
```

### npm
````bash
❯ npm start
✔ Development server running on: http://localhost:5000
✔ Build completed
````

## Building

`react-router-starter` builds static assets to the `build` directory by default when running `yarn build`.

```bash

❯ yarn build
✔ Building project completed
Hash: 91fbce316c8468d6edcf
Version: webpack 2.6.1
Time: 14091ms
                                                   Asset       Size                            Chunks             Chunk Names
44f1fa40aa5bea6d363788d4fd4b6812.f2498bac3e340f3288c3.js  264 bytes  44f1fa40aa5bea6d363788d4fd4b6812  [emitted]
49048339b1d28c35f33650d680751b8b.a7f8d8c45dd4db2ac1c5.js  264 bytes  49048339b1d28c35f33650d680751b8b  [emitted]
670cfd2c899e5cd5914d010b62d225e2.6f10af3b704da1b79bfb.js  267 bytes  670cfd2c899e5cd5914d010b62d225e2  [emitted]
                           index.e7d9262cf8094e668634.js    8.11 kB                             index  [emitted]  index
                        polyfill.823769db5014b1525ea9.js    49.2 kB                          polyfill  [emitted]  polyfill
                         runtime.32af9b80d700ff09037d.js    1.73 kB                           runtime  [emitted]  runtime
                          vendor.16746a7f5d7a4a65df04.js     237 kB                            vendor  [emitted]  vendor
                                              index.html  926 bytes                                    [emitted]
✨  Done in 16.49s.
```

## Running Tests

In order to keep this starter kit minimalist, `react-router-starter` has no test runner configured, however adding one is incredible easy with Neutrino. Refer to the [relevant section on building and running tests](https://neutrino.js.org/usage.html#building-and-running-tests). 

## Preset options

You can provide custom options and have them merged with this preset's default options to easily affect how this preset builds. You can modify React preset settings from `.neutrinorc.js` by overriding with an options object. Use an array pair instead of a string to supply these options in `.neutrinorc.js`. See the [Web documentation](https://neutrino.js.org/presets/neutrino-preset-web/#preset-options) for specific options you can override with this object.

_Example: Change the application mount ID from "root" to "app" and change the page title:_

```javascript
module.exports = {
  use: [
    ['neutrino-preset-react', {
      html: {
        title: 'Epic React App',
        appMountId: 'app'
      }
    }]
  ]
};
```

## Customizing

By following the [customization guide](https://neutrino.js.org/customization/) and knowing the rule, loader, and plugin IDs above, you can override and augment the build by by providing a function to your `.neutrinorc.js` use array. You can also make these changes from the Neutrino API in custom middleware.

### Vendoring

By defining an entry point named `vendor` you can split out external dependencies into a chunk separate from your application code.

_Example: Put React and React DOM into a separate "vendor" chunk:_

```js
module.exports = {
  use: [
    'neutrino-preset-react',
    (neutrino) => neutrino.config
      .entry('vendor')
        .add('react')
        .add('react-dom')
  ]
};
```

## Contributing

Thank you for wanting to help out with Neutrino! We are very happy that you want to contribute, and have put together the [contributing guide](https://neutrino.js.org/contributing/#contributing) to help you get started. We want to do our best to help you make successful contributions and be part of our community.
