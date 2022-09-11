import * as React from 'react'
import {getAuth, onAuthStateChanged} from 'firebase/auth'
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { Home } from './Home';


const App = () => {
  
  const auth = getAuth()
  const navigate = useNavigate()

  useEffect(()=>{
      onAuthStateChanged(auth, (user)=>{
        if(!user){
      navigate('./login')
    }else{
      
    }
    }) 
  })

  return ( 
    
    <header className="app bg-black h-[100vh] text-white">
    <div className="m-auto w-[85%]"> 
     <Home/>
    </div> 
    </header>
    
   );
}
 
export default App;
