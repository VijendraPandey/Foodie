import React from "react";
import { Outlet } from "react-router-dom";
import UserContext from "../utils/UserContext";
class About extends React.Component {
  render() {
    return (
      <div>
        <h1>About Us Page...</h1>
        <UserContext.Consumer>
          {({ user }) => (
            <h3>
              {user.name} - {user.email}
            </h3>
          )}
        </UserContext.Consumer>
        <Outlet />
      </div>
    );
  }
}

export default About;
