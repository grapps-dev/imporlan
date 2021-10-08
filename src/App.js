import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import $ from 'jquery';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';
import './css/app.css';

import Header from './components/layouts/Header';
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';

import Index from './components/pages/Index';
import Information from './components/pages/Information';

function App() {

  $(document).ready(() => {

    $(window).scroll(e => {

      // BARRA DE PROGRESO
      var documentHeight = $(document).height();
      var topScroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      $('#pageSize').css('width', (topScroll / (documentHeight - windowHeight)) * 100 + '%')

    })

  })

  return (
    
    <div id='main' className='container pb-4'>
      <div className='fixed-top bg-blue-primary' style={{ 'height': '6px' }} id='pageSize'>
      </div>
      <Router>
        <Header />
        <Navbar />
        <div className='container bg-main-white mt-5 border-gray border-radius py-3 px-5'>
          <Switch>
            <Route exact path='/imporlan/' component={ Index } />
            <Route exact path='/imporlan/information' component={ Information } />
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>

  );
}

export default App;
