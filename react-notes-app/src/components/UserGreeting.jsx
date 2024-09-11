import React from "react";

const UserGreeting = (props) => {
  return props.isLoggedIn ? (
    <h2> Welcom {props.username} </h2>
  ) : (
    <h2>Please login to continue</h2>
  );
};

export default UserGreeting;
