import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './css/app.css';

import Header from './components/layouts/Header';
import Navbar from './components/layouts/Navbar';

import Index from './components/pages/Index';

function App() {
  return (
    
    <div className='container'>
      <Router>
        <Header />
        <Navbar />
        <div className='container bg-main-white mt-5 border-gray border-radius py-3 px-5'>
          <Switch>
            <Route path='/imporlan/' component={ Index } />
          </Switch>
        </div>
      </Router>
    </div>

  );
}

export default App;
