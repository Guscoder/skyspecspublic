import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/gists'>User Gists</Link>
        </li>
        <li>
          <Link to='/gists/favorites'>Favorite Gists</Link>
        </li>
      </ul>
      {/* <div className='Nav__container'>
        <ul className='Nav__item-wrapper'>
          <li className='Nav__item'>
            <Link className='Nav__link' to='/'>
              Home
            </Link>
          </li>
          <li className='Nav__item'>
            <Link className='Nav__link' to='/gists'>
              UserGists
            </Link>
          </li>
          <li className='Nav__item'>
            <Link className='Nav__link' to='/gists/favorites'>
              Favorite Gists
            </Link>
          </li>
        </ul>
      </div> */}
    </nav>
  );
};

export default Navbar;
