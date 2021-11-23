import React from "react";
import { Provide } from "../context";
import { useContext } from "react";
export default function Login(props) {
  const value = useContext(Provide);
  if (value.username) {
    props.history.push("/");
  }
  return (
    <div className="center">
      <form action="/login-server" method="POST" className="form-login">
        <div>
          {" "}
          <div>
            {" "}
            <label htmlFor="username">username</label>
          </div>
          <input type="text" name="username" id="username" required />
        </div>

        <div>
          <div>
            {" "}
            <label htmlFor="username" className="mt-2">
              password
            </label>
          </div>
          <input type="password" name="password" id="password" required />
        </div>
        <button type="submit" className="sign-btn">
          Login
        </button>
      </form>
    </div>
  );
}
