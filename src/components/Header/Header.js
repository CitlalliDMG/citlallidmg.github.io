import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header>
      <span id="home-anchor" className="fix-nav-height"> &nbsp; </span>
      <div className="intro" id="home">
        <div className="row header">
          <div className="col-md-9 col-lg-10 offset-md-3 offset-lg-1 text">
            <h1>{'Citlalli\nDel Moral'}</h1>
            <p>{'Front-End Developer\n& Integral Designer'}</p>
          </div>
        </div>
      </div>
    </header>
   );
}

export default Header;
