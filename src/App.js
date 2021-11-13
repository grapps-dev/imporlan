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
import Load from './components/layouts/LoadComplete';

import NavbarAdmin from './components/layouts/Admin/Navbar';
import LateralMenu from './components/layouts/Admin/LateralMenu';

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
import Testimonys from './components/pages/Testimonys';

import FormTestimony from './components/pages/Dashboard/FormTestimony';
import DashBoardIndex from './components/pages/Dashboard/Index';
import UpdateProfile from './components/pages/Dashboard/FormUpdateProfile';

import LoginFigureTop from './assets/img/login-figure-top.png';
import LoginFigureBottom from './assets/img/login-figure-bottom.png';

function App() {
  
  const [ res, setRes ] = useState('');
  const [ msgColor, setMsgColor ] = useState('');
  const [ tokenSession, setTokenSession ] = useState('');
  const [ token, setToken ] = useState('');
  const [ loading, setLoading ] = useState(false);

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

    setToken('');
    var formData = {

      email : data.email,
      password : data.password

    }

    axios.post(LOCAL + 'login', formData)
    .then(res => {

      setToken(res.data.token);
      getAuthenticatedUser(res.data.token);
      sessionStorage.setItem('token', res.data.token);
      setLoading(true)

    })
    .catch(err => {

      console.log(err.response.data);

    })

  }

  const handleLoginAdmin = (data) => {

    setToken('');
    sessionStorage.removeItem('token');
    var formData = {

      email : data.email,
      password : data.password

    }

    axios.post(LOCAL + 'login', formData)
    .then(res => {

      setToken(res.data.token);
      getAuthenticatedAdmin(res.data.token);
      sessionStorage.setItem('token', res.data.token);
      setLoading(true)

    })
    .catch(err => {

      handleRes('Usuario y/o contraseña incorrectos', 'red');

    })

  }

  const getAuthenticatedUser = async(tkn) => {

    var data = JSON.stringify({
      "token": tkn
    });
    
    var config = {
      method: 'get',
      url: 'http://api-imporlan.test/api/login',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };
    

    axios.get(config.url, {
      headers : {
         "Authorization" : `Bearer ${tkn} `
     }
    })
    .then(res => {

      sessionStorage.setItem('user', JSON.stringify(res.data.user));
      sessionStorage.setItem('profile', 'cliente');
      window.location.href = 'http://localhost:3000/imporlan/dashboard/';
      setTimeout(() => {

        if(window.location.href === 'http://localhost:3000/imporlan/dashboard'){
          setLoading(false);
          $('body').css('overflowY', 'auto');
          refreshMain();
        }

      }, 1000)

      var u = JSON.parse(sessionStorage.getItem('user'));
      document.tidioIdentify = {

        distinct_id: u.id,
        email: u.email,
        name: u.name,
        phone: u.phone

      }

    })
    .catch(err => {

      console.log(err.response.data);

    })

  }

  const getAuthenticatedAdmin = async(tkn) => {

    var data = JSON.stringify({
      "token": tkn
    });
    
    var config = {
      method: 'get',
      url: 'http://api-imporlan.test/api/login',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };
    

    axios.get(config.url, {
      headers : {
         "Authorization" : `Bearer ${tkn} `
     }
    })
    .then(res => {

      var profile_id = parseInt(res.data.user.profile_id);
      if(profile_id === 1){

        sessionStorage.setItem('user', JSON.stringify(res.data.user));
        sessionStorage.setItem('profile', 'admin');
        window.location.href = 'http://localhost:3000/imporlan/dashboard';
        setTimeout(() => {

          if(window.location.href === 'http://localhost:3000/imporlan/dashboard'){
            setLoading(false);
            refreshMain();
          }

        }, 1000)

      } else if(profile_id === 3){

        sessionStorage.setItem('user', JSON.stringify(res.data.user));
        sessionStorage.setItem('profile', 'inspector');
        window.location.href = 'http://localhost:3000/imporlan/dashboard';
        setTimeout(() => {

          if(window.location.href === 'http://localhost:3000/imporlan/dashboard'){
            setLoading(false);
          }

        }, 1000)

      } else if(profile_id === 4){

        sessionStorage.setItem('user', JSON.stringify(res.data.user));
        sessionStorage.setItem('profile', 'transportista');
        window.location.href = 'http://localhost:3000/imporlan/dashboard';
        setTimeout(() => {

          if(window.location.href === 'http://localhost:3000/imporlan/dashboard'){
            setLoading(false);
          }

        }, 1000)

      } else {

        setLoading(false);
        sessionStorage.clear();
        handleRes('Usuario y/o contraseña incorrectos', 'red');

      }

    })
    .catch(err => {

      handleRes('Usuario y/o contraseña incorrectos', 'red');

    })

  }

  const handleRes = (data, color) => {

    setMsgColor(color);
    setRes(data);
    setTimeout(() => {

      setRes('');

    }, 2500)

  }

  const refreshMain = () => {

    if(sessionStorage.getItem('user')){

      var user = JSON.parse(sessionStorage.getItem('user'));
      console.log(typeof(user))
      if(typeof(user) === 'object'){
  
        $('#main').removeClass('container');
        $('#main').addClass('container-fluid');
        $('#main').addClass('px-0');
        $('#content').removeClass('container');
        $('#content').removeClass('border-radius');
        $('#content').removeClass('border-gray');
        $('#content').removeClass('bg-main-white');
        $('#content').addClass('container-fluid');
        $('#content').addClass('text-white');
        $('#content').addClass('px-0');
        $('#content').css('marginLeft', '14vw');
        $('#content').css('width', '85vw');
        //$('body').css('background', '#f5f6fa');
  
      } else {

        $('#main').addClass('container');
        $('#main').removeClass('container-fluid');
        $('#main').removeClass('px-0');
        $('#content').addClass('container');
        $('#content').addClass('border-radius');
        $('#content').addClass('border-gray');
        $('#content').addClass('bg-main-white');
        $('#content').removeClass('container-fluid');
        $('#content').removeClass('px-0');
        $('#content').removeClass('text-white');
        $('#content').css('marginLeft', 'auto');
        $('#content').css('width', '100%');
        $('body').css('background', '#A7BAFE');

      }

    }

  }

  useEffect(() => {

    refreshMain();

  }, [])

  var imgTop = `<img src=${ LoginFigureTop } style='position: absolute; right: 0; top: 0; max-width: 300px' id='figureTop' />`
  var imgBottom = `<img src=${ LoginFigureBottom } style='position: absolute; left: 0; bottom: 0; max-width: 300px' id='figureBottom'  />`
  $(document).ready(() => {

    setInterval(() => {

      if(window.location.pathname === '/imporlan/sign-up' || window.location.pathname === '/imporlan/sign-in' || window.location.pathname === '/imporlan/contact-us' || window.location.pathname === '/imporlan/dashboard/new-testimony' || window.location.pathname === '/imporlan/jp/sign-in'){

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
    
    <>

      {
        loading ? 

          <Load />

        :

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
            <NavbarAdmin />

            <LateralMenu />

            <div id='content' className='container bg-main-white mt-5 border-gray border-radius py-3 px-sm-5'>
              <Switch>
                {
                  sessionStorage.getItem('token') ?

                    <>
                      <Route exact path='/imporlan/dashboard' component={ DashBoardIndex } />
                      <Route exact path='/imporlan/dashboard/new-testimony'>
                          <Testimonys res={ handleRes } />
                      </Route>
                      <Route exact path='/imporlan/dashboard/update-profile'>
                          <UpdateProfile res={ handleRes } />
                      </Route>
                    </>

                  :

                  <>
                    <Route exact path='/imporlan/' component={ Index } />
                    <Route exact path='/imporlan/dashboard/new-testimony' component={ FormTestimony } />
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
                    <Route exact path='/imporlan/jp/sign-in'>
                      <SignIn login={ handleLoginAdmin } res={ handleRes } />
                    </Route>
                    <Route exact path='/imporlan/testimonys' component={ Testimonys } />
                  </>

                }
              </Switch>
            </div>
            <Footer />
          </Router>
        </div>  

      }

    </>

  );
}

export default App;
