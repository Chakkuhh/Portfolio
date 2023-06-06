import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from 'react-icons/fa'
import './Footer.css'
import React from 'react'

function Footer() {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='location'>
                    <FaHome size={20} style={{color:"#fff", marginRight:"2rem"}}/>
                    <div>
                        <p>"Baiju Nivas"</p>
                           <p> Chalivayal,</p>
                           <p> Nadakkavu PO,</p>
                           <p> Kozhikode,</p>
                           <p> 673011</p>
                        
                    </div>
                </div>
                <div className='phone'>
                    <h4><FaPhone  size={20} style={{color:"#fff", marginRight:"2rem"}}/>
                    +91-9633605008
                    </h4>
                    
                </div>
                <div className='gmail'>
                    <h4><FaMailBulk  size={20} style={{color:"#fff", marginRight:"2rem"}}/>
                   amalnathk99@gmail.com
                    </h4>
                    
                </div>
            </div>
            <div className='right'>
                <h4>About Us</h4>
                <p>This is me Amalnath.K and this is an evergreen platform for your project,case studies,and information about you</p>
                <div className='social'>
                <FaFacebook  size={30} style={{color:"#fff", marginRight:"1rem"}}/>
                <FaTwitter  size={30} style={{color:"#fff", marginRight:"1rem"}}/>
                <FaLinkedin  size={30} style={{color:"#fff", marginRight:"1rem"}}/>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Footer