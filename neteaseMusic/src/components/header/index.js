import React from 'react'
import './header.scss'
const Header = props=>{
  return (
    <header className="header">
      <div className="menu-drawer"></div>
      <div className="brand"></div>
      <div className="search"></div>
    </header>
  )
}

export default Header