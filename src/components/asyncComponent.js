import React from 'react';

const asyncComponent = getComponent => class AsyncComponent extends React.Component {
  constructor(props) {
    super(props);

    this.Component = null;
    this.state = { Component: AsyncComponent.Component };
  }

  componentWillMount() {
    if (!this.state.Component) {
      getComponent().then((Component) => {
        AsyncComponent.Component = Component;

        this.setState({ Component });
      });
    }
  }

  render() {
    const { Component } = this.state;

    if (Component) {
      return <Component {...this.props} />;
    }

    return null;
  }
};

export default asyncComponent;
