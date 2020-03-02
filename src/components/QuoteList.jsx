import React, { Component } from 'react';


class QuoteList extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      quote: []
    };
  }

  componentDidMount() {
      fetch('http://foaas.com/flying/Someone', {
        headers: {
          Accept: 'application/json'
        }
      })
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            quote: result.message
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
          <p> {this.state.quote} </p>
         </ul>
       );
     }
   }
 }

  export default QuoteList;
