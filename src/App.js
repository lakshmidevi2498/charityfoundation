import React, { useState, useEffect } from 'react';
import LandingPage from './pages/LandingPage';
import Loader from './Components/LoaderComponent'; // Import the loader component
import AboutUsPage from './pages/AboutUsPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import GetInvolvedPage from './pages/GetInvolvedPage';
import OurWorkPage from './pages/OurWorkPage';
import BlogPage from './pages/BlogPage';
import ContactusPage from './pages/ContactusPage';
import DonatePage from './pages/DonatePage';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => { 
    setTimeout(() => {
      setLoading(false);
    }, 3000);  
  }, []);

  return (
    <>
    <Provider store={store}>
    <BrowserRouter>
    <Routes>
      <Route  path = "/" element={ loading ? <Loader /> : <LandingPage />  }  />
      <Route  path = "/aboutus"   element={ loading ? <Loader/> :  <AboutUsPage/>}/>
      <Route  path = "/getinvolved"   element={ loading ? <Loader/> :  <GetInvolvedPage/>}/>
      <Route  path = "/ourwork"   element={ loading ? <Loader/> :  <OurWorkPage/>}/>
      <Route  path = "/blog"   element={ loading ? <Loader/> :  <BlogPage/>}/>
      <Route  path = "/contactus"   element={ loading ? <Loader/> :  <ContactusPage/>}/>
      <Route  path = "/donate"   element={ loading ? <Loader/> :  <DonatePage/>}/>
      </Routes>
      </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
