import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';

const NavBar = () => {
  return (
    <header>
      <h1> Casa de la música</h1>
      <nav>
        <ul>
          <li>Guitarras</li>
          <li>Bajos</li>
          <li>Baterias</li>
        </ul>
      </nav>
      <CartWidget />
    </header>
  )
}

export default NavBar