import React from 'react';
import Profile from '../components/Profile'


function Image() {
  const imgSize ={
    height: '400px',
    Width: '350px',
    border: '4px solid black',
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'block',
    boxShadow: '20px 20px black',
  }
  return (
    <div>
    <img style={imgSize} src='https://thispersondoesnotexist.com/image'/>
    <Profile />
    </div>
  );
}

export default Image;
