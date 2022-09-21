import * as React from 'react'
import { Explore } from './Components/Explore';
import { Navbar } from './Components/Navbar';
import { Header } from './Components/Header';
import { Gallery } from './Components/Gallery';
import { ContactUs } from './Components/ContactUs';
import { AboutMe } from './Components/AboutMe';
import { Footer } from './Components/Footer';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import { HomePage } from './Components/HomePage';


const App = () => {

  return (
    <BrowserRouter>
          <Routes>
            <Route path='/' element={<HomePage/>}> </Route>
            <Route path='/explore' element={<Explore />} />
            <Route path='/gallery' element={<Gallery />} />
            <Route path='/contact' element={<ContactUs />} />
          </Routes>
          </BrowserRouter>
  );
}

export default App;
