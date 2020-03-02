import React from 'react';


class Profile extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      profile: []
    };
  }

  componentDidMount() {
      fetch('https://randomuser.me/api'

  )
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            profile: result.results[0].name.first
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
  render() {

  return (
    <div>
    <h1> {this.state.profile} says: </h1>
    </div>
  );
}
}

export default Profile;
