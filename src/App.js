import React, { useState, useEffect, lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Loader from './Components/LoaderComponent'; 
import { Provider } from 'react-redux';
import store from './redux/store';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

 
const LandingPage = lazy(() => import('./pages/LandingPage'));
const AboutUsPage = lazy(() => import('./pages/AboutUsPage'));
const GetInvolvedPage = lazy(() => import('./pages/GetInvolvedPage'));
const OurWorkPage = lazy(() => import('./pages/OurWorkPage'));
const BlogPage = lazy(() => import('./pages/BlogPage'));
const ContactusPage = lazy(() => import('./pages/ContactusPage'));
const DonatePage = lazy(() => import('./pages/DonatePage'));

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
          {loading ? (
            <Loader />
          ) : (
            <Suspense fallback={<Loader />}>  
              <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/aboutus" element={<AboutUsPage />} />
                <Route path="/getinvolved" element={<GetInvolvedPage />} />
                <Route path="/ourwork" element={<OurWorkPage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/contactus" element={<ContactusPage />} />
                <Route path="/supportus" element={<DonatePage />} />
                <Route path="/supportus/donate" element={<DonatePage />} />
                <Route path="/contactus/volunteer" element={<ContactusPage/>}/>
              </Routes>
            </Suspense>
          )}
        </BrowserRouter>
        <ToastContainer />
      </Provider>
    </>
  );
}

export default App;
