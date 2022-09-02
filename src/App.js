import * as React from 'react'
import Notes from './Notes';
import Navbar from './Navbar';
import { NoteProvider } from './NoteContext';
import { getAuth } from "firebase/auth";
import {useEffect} from 'react'




const App = () => {
  const auth = getAuth();
  const user = auth.currentUser;

useEffect(()=>{
  console.log(user)

})

  return ( 
    <NoteProvider>
    <header className="app bg-black h-[100vh] text-white">
    <div className="m-auto w-[90%]"> 
     <Navbar/>
     <Notes />
    </div> 
    </header>
    </NoteProvider> 
          
   );
}
 
export default App;
