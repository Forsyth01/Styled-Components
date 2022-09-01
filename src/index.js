import React from 'react';
import ReactDOM from 'react-dom/client';
import {ParallaxProvider} from 'react-scroll-parallax'
import './index.css';
import App from './App';
import {BrowserRouter,
        Routes,
        Route } from 'react-router-dom'
import Addnote from './Addnote';
import { NoteDetails } from './NoteDetails';
import Notes from './Notes';



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
  <ParallaxProvider>
  <React.StrictMode>
   
   <Routes>
       <Route path = "/" element = {<App/>}></Route>  
       <Route path = "/addnote" element = {<Addnote/>}></Route>  
       <Route path = "/notes" element = {<Notes/>}></Route>  
       <Route path = "/notes/:id" element = {<NoteDetails/>}></Route>  
    </Routes>
  </React.StrictMode>
  </ParallaxProvider>
  </BrowserRouter>
);

