import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import asyncComponent from './components/asyncComponent';
import './App.css';

const Foo = asyncComponent(() => import('./components/Foo').then(module => module.default), { name: 'Foo' });
const Bar = asyncComponent(() => import('./components/Bar').then(module => module.default), { name: 'Bar' });
const Home = asyncComponent(() => import('./components/Home').then(module => module.default), { name: 'Home' });

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
