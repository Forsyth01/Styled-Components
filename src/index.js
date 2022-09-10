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
import { Login } from './Login';
import { Signup } from './Signup';
import {getAuth, onAuthStateChanged} from 'firebase/auth'
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
const auth = getAuth()



root.render(
  <BrowserRouter>
  <ParallaxProvider>
  <React.StrictMode>
   
   <Routes>
      
       <Route path = "/" element = {<App/>}></Route>  
       <Route path = "/login" element = {<Login/>}></Route>                       
       <Route path = "/signup" element = {<Signup/>}></Route>                       
       <Route path = "/addnote" element = {<Addnote/>}></Route>  
       <Route path = "/notes/:id" element = {<NoteDetails/>}></Route>  
    </Routes>
  </React.StrictMode>
  </ParallaxProvider>
  </BrowserRouter>
);

