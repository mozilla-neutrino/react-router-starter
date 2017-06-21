import React from 'react';
import Loadable from 'react-loadable';
import Loading from '../Loading';

const LoadableComponent = Loadable({
  loader: () => import('./Foo'),
  loading: Loading
});

export default class Foo extends React.Component {
  render() {
    return <LoadableComponent />;
  }
}
