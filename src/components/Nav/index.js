import { Routes, Route, Link, Navigate } from 'react-router-dom'
import {useState} from 'react'
import { useNavigate } from "react-router-dom"
import { useEffect} from 'react';
import './nav.css'
import 'animate.css';



function Nav() {
        
   
    
  return(
      <nav>
        <div className="navContainer">
          <Link to="/">
            <h1 className="logoText">Stop Jockin</h1>
          </Link>

            <div className="navLinks">
              <Link to='/Barbershop' >BARBERSHOP <img className="navIcons clipper" src="https://i.imgur.com/J6z16Xw.png"/></Link>
              <Link to='/SnoBalls' >SNOBALLS<img className="navIcons iceCream" src="https://i.imgur.com/6SIndyo.png"/></Link>
              <Link to='/Lot-7' >LOT7</Link>
              <Link to='/Products' >PRODUCTS</Link>
            </div>
            
        </div>
      </nav>
  )
}
      
      export default Nav