import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import asyncComponent from './components/asyncComponent';
import './App.css';

const Foo = asyncComponent(() => System.import('./components/Foo').then(module => module.default));
const Bar = asyncComponent(() => System.import('./components/Bar').then(module => module.default));
const Home = asyncComponent(() => System.import('./components/Home').then(module => module.default));

const App = () => (
  <Router>
    <div className="App">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/foo">Foo</Link></li>
        <li><Link to="/bar">Bar</Link></li>
      </ul>

      <Route exact path="/" component={Home} />
      <Route path="/foo" component={Foo} />
      <Route path="/bar" component={Bar} />
    </div>
  </Router>
);

export default App;
