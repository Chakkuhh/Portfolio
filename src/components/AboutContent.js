import { Link } from 'react-router-dom'
import './AboutContent.css'
import react from "../assets/code.jpg"
import react2 from "../assets/react2.jpg"


import React from 'react'

const AboutContent = () => {
  return (
    <div className='about'>
        <div className='left'>
            <h1>Who Am I?</h1>
            <p>I am a ReactJS Front-End developer.I create responsive secure websites</p>
        <Link to="/contact">
            <button className='btn'>Contact</button>
        </Link></div>
        
        <div className='right'>
            <div className='img-container'>
                <div className='img-stact-top'>
                    <img src={react} className='img' alt='true'/>
                    
                </div>
                <div className='img-stact-btm'>
                    <img src={react2} className='img' alt='true'/>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent