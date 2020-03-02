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
    const endpoints = ['flying', 'no', 'because', 'asshole', 'bag', 'bye', 'bucket', 'cup', 'diabetes', 'everything', 'family', 'fascinating', 'ftfy', 'fyyff', 'give', 'jinglebells', 'programmer']
      fetch(`http://foaas.com/${endpoints[[Math.floor(Math.random() * endpoints.length)]]}/Someone`, {
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
          <h1> {this.state.quote} </h1>
         </ul>
       );
     }
   }
 }

  export default QuoteList;
