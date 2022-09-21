import * as React from 'react'
import { AboutMe } from './AboutMe'
import { ContactUs } from './ContactUs'
import { Explore } from './Explore'
import { Footer } from './Footer'
import { Gallery } from './Gallery'
import { Header } from './Header'
import { Navbar } from './Navbar'

export const HomePage = () => {
  return (
    <div>
      <div className="bgimages">
        <Navbar />
        <Header />
        <AboutMe />
        <Explore />
        <Gallery />
        <ContactUs />
      </div>
      <Footer />
    </div>
  )
}
