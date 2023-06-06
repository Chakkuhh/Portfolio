import './NavBar.css'
import {FaBars, FaTimes} from 'react-icons/fa'

import { Link } from 'react-router-dom'
import React, { useState } from 'react'


function NavBar() {

    const [hamb,setHam]=useState(false)

    const [color,setColor]=useState(false)
    const changeColor=()=>{
        if(window.scrollY >=100){
            setColor(true)
        }else{setColor(false)}
    }

    window.addEventListener('scroll',changeColor)

    const handleClick=()=>{
        setHam(!hamb)
    }
  return (
    <div className={color ? "Header Header-bg":"Header"}>
        <Link to='/'>
            <h1>PortFolio</h1>
            </Link>
            <ul className={hamb? "nav-menu active":"nav-menu"}>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/project'>Project</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
                <li>
                    <Link to='/contact'>Contact</Link>
                </li>
            </ul>
            <div className='hamburger' onClick={handleClick}> 
            {hamb ? (<FaTimes size={20} style={{color:"#fff"}}/>):(<FaBars size={20} style={{color:"#fff"}}/>)}
           
            </div>
        

    </div>
  )
}

export default NavBar