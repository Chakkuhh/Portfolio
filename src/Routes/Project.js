import React from 'react'
import NavBar from '../components/NavBar'

import Footer from '../components/Footer'
import HeroImage2 from '../components/HeroImage2'

import Work from '../components/Work'




function Project() {
  return (
    <div>
      <NavBar/>
      <HeroImage2 heading="PROJECTS." text="Some of my most Recent works."/>
      <Work/>
      <Footer/>
    </div>
  )
}

export default Project