import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import { BrowserRouter as Router,Switch, Route, Link } from "react-router-dom";
import Details from './components/Details';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/detail">
            <Details />
          </Route>
       
           <Router path="/">
             <Home />
           </Router>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
