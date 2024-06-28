import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy Name",
        twitter: "Dummy Twitter",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("  https://api.github.com/users/vijendrapandey");
    const json = await data.json();
    console.log(json);
    this.setState({
      userInfo: json,
    });
  }

  render() {
    return (
      <div>
        <h1>Profile Class Component</h1>
        <img src={this.state.userInfo.avatar_url} />
        <h2>Name : {this.state.userInfo.name}</h2>
        <h2>Twitter : {this.state.userInfo.twitter_username}</h2>
      </div>
    );
  }
}

export default Profile;
