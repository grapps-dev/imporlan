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

function App() {

  const getURL = async() => {

    const url = encodeURIComponent('https://www.amazon.com/dp/B00JITDVD2');
    const token = "iq81foGMoa6wHKdzCxAOtA";


    await axios.get("https://api.proxycrawl.com/scraper?token=" + token + "&url=" + url)
    .then(res => {

      console.log(res);

    })
    .catch(e => {

      console.log(e)

    })

  }

  useEffect(() => {

    getURL();

  })

  return (
    
    <div id='main' className='container pb-4'>
      <Router>
        <Header />
        <Navbar />
        <div className='container bg-main-white mt-5 border-gray border-radius py-3 px-5'>
          <Switch>
            <Route path='/imporlan/' component={ Index } />
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>

  );
}

export default App;
