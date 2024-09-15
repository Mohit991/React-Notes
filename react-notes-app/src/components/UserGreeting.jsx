import React from "react";

const UserGreeting = ({isLoggedIn, username="Default_name"}) => {
  const welcomeMessage = <h2 className="welcome-message"> Welcome {username} </h2>;
  const loginPromt = <h2 className="login-prompt">Please login to continue</h2>;
  return isLoggedIn ? welcomeMessage : loginPromt;
};

export default UserGreeting;
