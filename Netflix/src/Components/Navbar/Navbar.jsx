import './Navbar.css'


import React from 'react'

const Navbar = () => {
  return (
<>        <div className="header">
      <img
        className="header__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix Logo"
      />
      <ul className="header__nav">
        <li className="header__navItem">Home</li>
        <li className="header__navItem">TV Shows</li>
        <li className="header__navItem">Movies</li>
        <li className="header__navItem">New & Popular</li>
        {/* Add more navigation items as needed */}
      </ul>
      <img className='header__avatar' src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="Avatar" />
    </div>
    </> 
  )
}

export default Navbar