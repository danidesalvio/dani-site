import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Nav from './components/shared/Nav';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Work from './components/pages/Work';
import Footer from './components/shared/Footer';
import Blog from './components/pages/blog/Blog';

const App = () => (
  <>
    <Nav/>
   
      <Switch>
        <Route exact path="/" component={Home} />
        <Route eaxct path="/about" component={About} />
        <Route exact path="/work" component={Work}/>
        <Route exact path="/blog" component={Blog}/>
    </Switch>
    
    <Footer/>
  </>
)

export default App;
