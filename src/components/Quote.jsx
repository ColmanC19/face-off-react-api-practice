import React, { Component } from 'react';


class Quote extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      quote: []
    };
  }

  componentDidMount() {
      fetch('http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json')
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            quote: result.quoteText
          });
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
    render(){

      const { error, isLoaded, items } = this.state;
     if (error) {
       return <div>Error: {error.message}</div>;
     } else if (!isLoaded) {
       return <div>Loading...</div>;
     } else {
       return (
         <ul>
          <h1> {this.state.quote} </h1>
         </ul>
       );
     }
   }
 }

  export default Quote;
