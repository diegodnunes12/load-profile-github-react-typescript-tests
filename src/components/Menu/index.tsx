import React from 'react'
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <nav className="navbar bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <span className='text-light'>DIO Study</span>
        </Link>
      </div>
    </nav>
  )
}

export default Menu;