import React from 'react'
import logo from '../images/logo.png'
function Nav() {
  return (
    <nav>
        <img src={logo} className = 'logo'/>
        <h1 className='logo-text'>my travel journal.</h1>
    </nav>
  )
}

export default Nav