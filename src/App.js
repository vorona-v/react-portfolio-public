import React from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';

import './../node_modules/@fortawesome/fontawesome-free/css/all.css';
import 'bootstrap/dist/css/bootstrap.css';

import Header from './components/Header/Header';
import NavMenu from './components/NavMenu/NavMenu';
import Home from './components/Home/Home';
import About from './components/About/About';
import Photo from './components/About/Photo/Photo';
import Education from './components/Education/Education';
import Work from './components/Work/Work';
import Skills from './components/Skills/Skills';
import Portfolio from './components/Portfolio/Portfolio';
import Contacts from './components/Contacts/Contacts';
import Footer from "./components/Footer/Footer";

function App() {
  return (
      <BrowserRouter>
          <div className="pfPageWrap">
              <div className="pfNavigationWrap">
                  <Photo/>
                  <NavMenu/>
              </div>
              <div className="pfInfoWrap">
                  <Header/>

                  <div className="pfWrapperContent">
                      <Route path='/home' component={Home}/>
                      <Route path='/about' component={About}/>
                      <Route path='/education' component={Education}/>
                      <Route path='/work' component={Work}/>
                      <Route path='/skills' component={Skills}/>
                      <Route path='/portfolio' component={Portfolio}/>
                      <Route path='/contacts' component={Contacts}/>
                  </div>

                  <Footer/>
              </div>
          </div>
      </BrowserRouter>
  );
}

export default App;
