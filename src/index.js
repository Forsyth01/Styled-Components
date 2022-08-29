import React from 'react';
import ReactDOM from 'react-dom/client';
import {ParallaxProvider} from 'react-scroll-parallax'
import './index.css';
import App from './App';
import {BrowserRouter,
        Routes,
        Route } from 'react-router-dom'
import Addnote from './Addnote';



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
  <ParallaxProvider>
  <React.StrictMode>
   
   <Routes>
       <Route path = "/" element = {<App/>}></Route>  
       <Route path = "/addnote" element = {<Addnote/>}></Route>  
    </Routes>
  </React.StrictMode>
  </ParallaxProvider>
  </BrowserRouter>
);

