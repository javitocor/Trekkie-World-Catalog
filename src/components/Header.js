import React from 'react';
import header from '../style/Header.module.css';

const Header = () => (
  <nav className="navbar navbar-light bg-secondary">
    <div className="navbar-brand">
      <div className={header.image} />
      <p>Star Trek</p>
    </div>
  </nav>
);

export default Header;
