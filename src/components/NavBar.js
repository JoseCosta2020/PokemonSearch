import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch, Link, NavLink } from 'react-router-dom';

import "./NavBar.css"

const NavBar = ({handleHome, handleSearchPokemon, handleLogin}) => {
  return (
    <Router>
    <div>
      <nav className="nav container">
        <div className="nav__container">
          <ul className="nav__list">
            <li className="nav__item">
              <button onClick={handleHome} to="/" className="nav__botton">
                <span className="button_text">Home</span>
              </button>
              <button onClick={handleSearchPokemon} to="/pokemon" className="nav__botton">
                <span className="button_text">Search Pokemon</span>
              </button>
            </li>
          </ul>
          <ul className="nav__list">
            <button onClick={handleLogin} className="nav__botton">
              <span className="button_text">Login</span>
            </button>
          </ul>
        </div>
      </nav>
    </div>
    </Router>
  );
}

export default NavBar;