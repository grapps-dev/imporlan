import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import $ from 'jquery';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';
import './css/app.css';

import { URL_LOCAL_BACKEND as LOCAL } from './const';

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
import InspectionPlans from './components/pages/InspectionPlans';
import ImportPlans from './components/pages/ImportPlans';
import TermsAndConditions from './components/pages/TermsAndConditions';
import BankTransfer from './components/pages/BankTransfer';
import ContactUs from './components/pages/ContactUs';
import SignUp from './components/pages/SignUp';
import SignIn from './components/pages/SignIn';

import FormTestimony from './components/pages/Dashboard/FormTestimony';
import DashBoardIndex from './components/pages/Dashboard/Index';

import LoginFigureTop from './assets/img/login-figure-top.png';
import LoginFigureBottom from './assets/img/login-figure-bottom.png';

function App() {
  
  const [ res, setRes ] = useState('');
  const [ msgColor, setMsgColor ] = useState('');
  const [ tokenSession, setToken ] = useState('');

  $(document).ready(() => {

    $(window).scroll(e => {

      // BARRA DE PROGRESO
      var documentHeight = $(document).height();
      var topScroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      $('#pageSize').css('width', (topScroll / (documentHeight - windowHeight)) * 100 + '%')

    })

  })

  const handleLogin = (data) => {

    sessionStorage.removeItem('token');
    sessionStorage.removeItem('user');
    var formData = {

      email : data.email,
      password : data.password

    }

    axios.post(LOCAL + 'login', formData)
    .then(res => {

      setToken(JSON.stringify(res.data.token));
      sessionStorage.setItem('token', JSON.stringify(res.data.token))
      handleRes('Inicio de sesión satisfactorio', 'green');

    })
    .catch(err => {

      console.log(err.response.data);

    })
    getAuthenticatedUser()

    /*axios(config)
    .then(res => {

      sessionStorage.setItem('user', JSON.stringify(res.data))
      //var obj = JSON.parse(sessionStorage.getItem('user'));

    })
    .catch(err => {

      console.log(err.response);

    })*/

  }

  const getAuthenticatedUser = () => {

    var token = sessionStorage.getItem('token')
    console.log(token);
    /*await axios.get(LOCAL + 'login', { params: { tokenSession } })
    .then(res => {

      sessionStorage.setItem('user', JSON.stringify(res.data));

    })
    .catch(err => {

      console.log(err.response.data);

    })*/

  }

  const handleRes = (data, color) => {

    setMsgColor(color);
    setRes(data);
    setTimeout(() => {

      setRes('');

    }, 1500)

  }

  var imgTop = `<img src=${ LoginFigureTop } style='position: absolute; right: 0; top: 0; max-width: 300px' id='figureTop' />`
  var imgBottom = `<img src=${ LoginFigureBottom } style='position: absolute; left: 0; bottom: 0; max-width: 300px' id='figureBottom'  />`
  $(document).ready(() => {

    setInterval(() => {

      if(window.location.pathname === '/imporlan/sign-up' || window.location.pathname === '/imporlan/sign-in' || window.location.pathname === '/imporlan/contact-us'){

        $('#content').css('position', 'relative');
        if(!$('#figureTop').length && !$('#figureBottom').length){
  
          $('#content').prepend(imgTop);
          $('#content').append(imgBottom);
  
        }
  
      } else {
  
        $('#figureTop').remove();
        $('#figureBottom').remove();
  
      }

    }, 500)

  })

  return (
    
    <div id='main' className='container pb-4'>
      { res ? 

        <div style={{ 'background': msgColor, 'borderRadius': '10px', 'color': 'white', 'position': 'fixed', 'top': '20px', "zIndex": 99999, 'padding': '10px 20px' }}>{ res }</div>

        :

        ''

      }
      <div className='fixed-top bg-blue-primary' style={{ 'height': '6px' }} id='pageSize'>
      </div>
      <Router>
        <Header />
        <Navbar />
        <div id='content' className='container bg-main-white mt-5 border-gray border-radius py-3 px-sm-5'>
          <Switch>
            {
              tokenSession ?

                <>
                  <Route exact path='/imporlan/dashboard' component={ DashBoardIndex } />
                </>

              :

              <>
                <Route exact path='/imporlan/' component={ Index } />
                <Route exact path='/imporlan/information' component={ Information } />
                <Route exact path='/imporlan/buy' component={ Buy } />
                <Route exact path='/imporlan/sell-plans' component={ Sell } />
                <Route exact path='/imporlan/how-plans-function' component={ PlansHow } />
                <Route exact path='/imporlan/plans-usa' component={ PlansUSA } />
                <Route exact path='/imporlan/plans-chile' component={ PlansChile } />
                <Route exact path='/imporlan/inspection-plans' component={ InspectionPlans } />
                <Route exact path='/imporlan/import-plans' component={ ImportPlans } />
                <Route exact path='/imporlan/terms-and-conditions' component={ TermsAndConditions } />
                <Route exact path='/imporlan/bank-transfer' component={ BankTransfer } />
                <Route exact path='/imporlan/contact-us'>
                  <ContactUs res={ handleRes } />
                </Route>
                <Route exact path='/imporlan/new-testimony'>
                  <FormTestimony res={ handleRes } />
                </Route>
                <Route exact path='/imporlan/sign-up'>
                  <SignUp res={ handleRes } />
                </Route>
                <Route exact path='/imporlan/sign-in'>
                  <SignIn login={ handleLogin } res={ handleRes } />
                </Route>
              </>

            }
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>

  );
}

export default App;
