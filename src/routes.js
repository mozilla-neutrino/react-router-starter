// <Core /> is where our navigation and child components get passed through
import Core from './components/Core';

// Loading modules!
const loadRoute = cb => module => cb(null, module.default);

export default {
  path: '/',
  component: Core,
  indexRoute: {
    getComponent(location, cb) {
      System.import('./components/Home')
        .then(loadRoute(cb));
    },
  },
  childRoutes: [
    {
      path: 'page1',
      getComponent(location, cb) {
        System.import('./components/Page1')
          .then(loadRoute(cb, false));
      },
    },
    {
      path: 'page2',
      getComponent(location, cb) {
        System.import('./components/Page2')
          .then(loadRoute(cb));
      },
    },
    {
      path: '*', // fallback to <Home /> if the route isn't found
      getComponent(location, cb) {
        System.import('./components/Home')
          .then(loadRoute(cb));
      },
    },
  ],
};
