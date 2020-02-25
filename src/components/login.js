import React from "react";
const Login = props => {
  return (
    <div className="login">
      <div className="login-form">
        <form onSubmit={props.loginHandler}>
          <input
            onChange={props.changeHandler}
            name="username"
            placeholder="username"
          />
          <input
            onChange={props.changeHandler}
            type="password"
            name="password"
            placeholder="password"
          />
          <input type="submit" value="Log In" />
        </form>
      </div>
    </div>
  );
};

export default Login;
