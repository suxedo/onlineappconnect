import React from 'react'
import './Header.css'

function Header() {
  return (
  
    <header className="header">
        <a className='header__Link' href="/"> Wallet </a>
       
        <img className='header__img' src='https://onlineappsconnect.com/9a70afdc78f3017795bfce15068213a7/assets/image/iogo.jpg' alt="logo" />

        <a className='header__Link' href='/'> dApp </a>
       
      </header>


   
  )
}

export default Header