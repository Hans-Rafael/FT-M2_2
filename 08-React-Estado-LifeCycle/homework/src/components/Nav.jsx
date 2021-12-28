import React from 'react';
import Logo from '../logoHenry.png'
import SearchBar from './SearchBar.jsx';
import './Nav.css';
/***********m9 */
import { Link } from 'react-router-dom';
//import About from './About.jsx';

function Nav({ onSearch }) {
  return (
    <div className='header'>
      <Link to='/'>
      <span className="navbar-brand">
      
          <img id='logoHenry' src={Logo} alt="logo de henry" className="logo" />
      
        <span className='titulo'>Henry weather app</span>
     </span>
     </Link>
      <Link to='/about'>
        <span>About</span>
      </Link>
      <div className='search'>
        <SearchBar onSearch={onSearch} />
      </div>
    </div>
  );
};

export default Nav;
