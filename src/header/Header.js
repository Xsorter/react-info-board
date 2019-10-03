import React from 'react';
import headerLogo from './header-logo.jpg';
import './Header.sass';

export default class Header extends React.Component {
  render() {
    return(
      <div className="header">
        <div className="c-box">
          <img src={headerLogo} className="header__logo" alt="Header-logo" />
          <div className="header__logo-label">React Info Board</div>
        </div>
      </div>
    )
  }
}