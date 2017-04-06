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
- Extends from [neutrino-preset-airbnb-base](https://neutrino.js.org/presets/neutrino-preset-airbnb-base/)
  - Zero upfront configuration necessary to start linting your project
  - Modern Babel knowledge supporting ES modules, JSX, Web and Node.js apps
  - Highly visible during development, fails compilation when building for production
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
Hash: 2981e1467a90ecb50700
Version: webpack 2.3.3
Time: 14136ms
                                  Asset       Size  Chunks             Chunk Names
              0.88f8a56f2fd05cbd680c.js  230 bytes       0  [emitted]
              1.cefbb90a9f7116635d43.js  229 bytes       1  [emitted]
              2.01633b098f353bcf0465.js  229 bytes       2  [emitted]
   index.e06c4dec39c21875ae73.bundle.js     203 kB       3  [emitted]  index
  vendor.d00c51b6021b3b92222b.bundle.js     206 kB       4  [emitted]  vendor
manifest.c25bb7f9729c7a35739a.bundle.js    1.51 kB       5  [emitted]  manifest
                             index.html  866 bytes          [emitted]
                                App.css   61 bytes          [emitted]
✨  Done in 16.47s.
```

## Running Tests

In order to keep this starter kit minimalist, `react-router-starter` has no test runner configured, however adding one is incredible easy with Neutrino. Refer to the [relevant section on building and running tests](https://neutrino.js.org/usage.html#building-and-running-tests). 

## Customizing

To override the build configuration, start with the documentation on [customization](https://neutrino.js.org/customization/). `neutrino-preset-react` does not use any additional named rules, loaders, or plugins that aren't already in use by the Web preset. See the [Web documentation customization](https://neutrino.js.org/presets/neutrino-preset-web/#customizing) for preset-specific configuration to override.

### Simple customization

By following the [customization guide](https://neutrino.js.org/customization/simple.html) and knowing the rule, loader, and plugin IDs above, you can override and augment the build directly from `package.json`.

#### Vendoring

To achieve long term caching benefits, you can make use of code splitting. Neutrino exposes a `vendor` entry point in `package.json` where third party libraries can be split into a chunk separate from your application code. 

This starter kit splits React, React DOM, React Hot Loader and React Router into the `vendor` chunk for you. Before going to production, it is recommended to push the rest of your dependencies to `vendor`.

````json
{
  "neutrino": {
    "config": {
      "entry": {
        "vendor": [
          "react",
          "react-dom",
          "react-hot-loader",
          "react-router-dom"
        ]
      }
    }
  },
  "dependencies": {
    "react": "^15.4.2",
    "react-dom": "^15.4.2",
    "react-hot-loader": "3.0.0-beta.6",
    "react-router-dom": "^4.0.0"
  }
}
````

#### HTML files

If you wish to override how HTML files are created for your React app, refer to the [relevant section on
neutrino-preset-web](https://neutrino.js.org/presets/neutrino-preset-web/#html-files).

_Example: Change the application mount ID from "root" to "app":_

```json
{
  "neutrino": {
    "options": {
      "html": {
        "appMountId": "app"
      }
    }
  }
}
```

### Advanced configuration

By following the [customization guide](https://neutrino.js.org/customization/advanced.html) and knowing the rule, loader, and plugin IDs from
neutrino-preset-web, you can override and augment the build by creating a JS module which overrides the config.

#### Vendoring

By defining an entry point named `vendor` you can split out external dependencies into a chunk separate
from your application code.

_Example: Put React and React DOM into a separate "vendor" chunk:_

```js
module.exports = neutrino => {
  neutrino.config
    .entry('vendor')
      .add('react')
      .add('react-dom');
};
```

## Contributing

Thank you for wanting to help out with Neutrino! We are very happy that you want to contribute, and have put together the [contributing guide](https://neutrino.js.org/contributing/#contributing) to help you get started. We want to do our best to help you make successful contributions and be part of our community.
