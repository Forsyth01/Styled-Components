
import './App.css';
import * as React from 'react';
import Navbar from './Navbar';
import Header from './Header';
import Footer from './Footer';
import {motion} from 'framer-motion'





function App() {
  return (
    <motion.header
    className="App text-white">
      <motion.div 
       initial = {{rotateZ:180}}
       animate = {{rotateZ:0}}
       transition={{ duration: 1}}
      className="m-auto md:w-[90%] w-[85%] py-12">
      <Navbar/>
      <Header/>
      <Footer/>
      </motion.div>
    </motion.header>
  
  );
}

export default App;