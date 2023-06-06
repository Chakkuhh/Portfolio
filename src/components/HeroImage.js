import './HeroImage.css'
import React from 'react'
import lap from '../assets/lap2.jpg'
import { Link } from 'react-router-dom'

function HeroImage() {
  return (
    <div className='hero'>
        <div className='mask'>
            <img className='into-img' src={lap} alt='lap' />
        </div>
        <div className='content'>
            <p>Hi,I am a</p>
            <h1>Amalnath K.</h1>
            <div>
                <Link to='/project' className='btn'>
                    PROJECTS
                </Link>
                <Link to='/contact' className='btn-light'>
                    CONTACT
                </Link>
            </div>

        </div>
    </div>
  )
}

export default HeroImage