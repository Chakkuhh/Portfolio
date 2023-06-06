import React from 'react'
import NavBar from '../components/NavBar'

import Footer from '../components/Footer'
import HeroImage2 from '../components/HeroImage2'

import Form from '../components/Form'

function Contact() {
  return (
    <div>
      <NavBar/>
      <HeroImage2 heading="CONTACT." text="dude!!Let's have Chat"/>
      <Form/>
      <Footer/>
    </div>
  )
}

export default Contact