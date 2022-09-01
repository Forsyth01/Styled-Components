import * as React from 'react'
import Notes from './Notes';
import Navbar from './Navbar';



const App = () => {
  return ( 
    <header className="app bg-black h-[100vh] text-white">
      <div className="m-auto w-[90%]">
      <Navbar/>
     <Notes />
    </div>
    </header>
          
   );
}
 
export default App;
