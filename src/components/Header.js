import React from 'react';
import header from '../style/Header.module.css';

const Header = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
    <div className="navbar-brand d-flex flex-row justify-content-between">
      <div className={header.image} />
      <p className={header.navText}>Star Trek</p>
    </div>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <p className="nav-link">
            Home
          </p>
        </li>
        <li className="nav-item">
          <p className="nav-link">Tv Shows</p>
        </li>
        <li className="nav-item">
          <p className="nav-link">Characters</p>
        </li>
      </ul>
      <span className="navbar-text">
        All you ever wanted to know about Star Trek
      </span>
    </div>
  </nav>
);

export default Header;
