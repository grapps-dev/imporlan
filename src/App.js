import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './css/app.css';

import Header from './components/layouts/Header';
import Navbar from './components/layouts/Navbar';

function App() {
  return (
    
    <div className='container'>
      <Router>
        <Header />
        <Navbar />
      </Router>
    </div>

  );
}

export default App;
