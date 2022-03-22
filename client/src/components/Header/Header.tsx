import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom' 

const Header = () => {
  return (
    <header className='head'>
      <h1>Find Your Remote Paradise</h1>
      <nav> 
        <li>
          <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>Home</Link>
        </li>
        <li>
          <Link to="/test" style={{ textDecoration: 'none', color: 'black' }}>Test</Link>
        </li> 
      </nav>
      
    </header>

  )
}

export default Header;