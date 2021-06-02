import React from "react";

export const LoginScreen = ({ history }) => {
  const handleLogin = () => {
    // console.log("click");
    history.push("/");
  };
  return (
    <div className="container mt-5 animate__animated animate__fadeIn">
      <h1>Login</h1>
      <hr />
      <button className="btn btn-primary" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};
