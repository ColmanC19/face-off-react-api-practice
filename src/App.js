import React from 'react';
import Image from './components/Image'
import Quote from './components/Quote'
import Input from './components/Input'
import Header from './components/Header'
function App() {
  const appCss = {
    backgroundColor: "#F012BE",
    color: 'white',
    fontFamily: "monospace"
  }
  return (

    <div style={appCss}>
      <Header />
      <Image />
      <Quote />
      <Input />
    </div>
  );
}

export default App;
