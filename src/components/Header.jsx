import React from 'react';


function Header() {
const headerStyle = {
  textAlign: 'center',
  marginTop: 'auto',
  marginBottom: '70px',
  textShadow: '2px 2px black',
  fontSize: '25px',
}
  return (

    <div style={headerStyle}>
    <h1> Words of Wisdom</h1>
    <h4> Enlighten your soul with the wise words of a random person and a personal message from a cat. Both of which are not real, but the words are!</h4>
    </div>

  );
}

export default Header;
