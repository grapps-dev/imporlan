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
import Buy from './components/pages/SaleShips';
import Sell from './components/pages/Sell';
import PlansHow from './components/pages/PlansHow';
import PlansUSA from './components/pages/PlansUSA';
import PlansChile from './components/pages/PlansChile';
import InpectionPlans from './components/pages/InspectionPlans';
import ImportPlans from './components/pages/ImportPlans';
import TermsAndConditions from './components/pages/TermsAndConditions';
import BankTransfer from './components/pages/BankTransfer';
import ContactUs from './components/pages/ContactUs';

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
        <div id='content' className='container bg-main-white mt-5 border-gray border-radius py-3 px-sm-5'>
          <Switch>
            <Route exact path='/imporlan/' component={ Index } />
            <Route exact path='/imporlan/information' component={ Information } />
            <Route exact path='/imporlan/buy' component={ Buy } />
            <Route exact path='/imporlan/sell-plans' component={ Sell } />
            <Route exact path='/imporlan/how-plans-function' component={ PlansHow } />
            <Route exact path='/imporlan/plans-usa' component={ PlansUSA } />
            <Route exact path='/imporlan/plans-chile' component={ PlansChile } />
            <Route exact path='/imporlan/inpection-plans' component={ InpectionPlans } />
            <Route exact path='/imporlan/import-plans' component={ ImportPlans } />
            <Route exact path='/imporlan/terms-and-conditions' component={ TermsAndConditions } />
            <Route exact path='/imporlan/bank-transfer' component={ BankTransfer } />
            <Route exact path='/imporlan/contact-us' component={ ContactUs } />
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>

  );
}

export default App;
