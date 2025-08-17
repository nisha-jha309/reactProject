import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from "./Nav.js"
import Lpsection1 from './lp-section1.js';
import Lpsection2 from './lp-section2.js';
import About from './aboutUs.js';
import Ourservices from './ourServices.js';
import Ourgallery from './ourgallery.js';
import Testimonial from './testimonial.js';
import Ourblog from './ourBlog.js';
import Footer from './footer.js';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <Lpsection1 />
    <Lpsection2/>
    <About/>
    <Ourservices/>
    <Ourgallery/>
    <Testimonial/>
    <Ourblog/>
    <Footer/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
