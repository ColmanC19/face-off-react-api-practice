import React, { useState } from 'react';


function Input() {
  const [message, changeMessage] = useState('')
  const [picture, changePicture] = useState('')
  const [visibility, changeVisibility] = useState('visible')
  let _name = null
  function onSubmit(e) {
    e.preventDefault()
    changeVisibility('notVisibile')

      fetch(`https://programming-quotes-api.herokuapp.com/quotes/random`)
      .then(res => res.json())
      .then(
        (result) => {
          changeMessage(result.en)
          changePicture('https://thiscatdoesnotexist.com/')
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          console.log(error);
          this.setState({
            isLoaded: true,
            error
          });
        }
      )

  }


  return (
    <div>
    <form className={visibility}onSubmit={onSubmit}>
        <input placeholder="Name" ref={(input) => {
          _name = input;
        }}></input>
        <button type='submit'>Enter</button>
      </form>
      <style jsx> {`
        .notVisibile {
          display: none;
        }
        .visible {

        }
        `}</style>
      <img src={picture}/>
      <h1> {message} </h1>
    </div>
  );
}

export default Input;
