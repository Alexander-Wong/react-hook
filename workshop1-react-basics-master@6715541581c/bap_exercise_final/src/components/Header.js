import React from 'react';

function Header (props) {

  return (
    <header className="App-header">
      <img src={props.logo} className="App-logo" alt="logo" />
    </header>
  );
    
}

export default Header;