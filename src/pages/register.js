import React from "react";

export default function Register() {
  return (
    <div className="center">
      <form action="/register-server" method="POST" className="form">
        <div>
          {" "}
          <div>
            {" "}
            <label htmlFor="username" className="mt-2">
              username
            </label>
          </div>
          <input type="text" name="username" id="username" required />
        </div>
        <div>
          {" "}
          <div>
            {" "}
            <label htmlFor="username" className="mt-2">
              email
            </label>
          </div>
          <input type="email" name="email" id="email" required />
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
        <div>
          <div>
            {" "}
            <label htmlFor="username" className="mt-2">
              confirm password
            </label>
          </div>
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            required
          />
        </div>
        <button type="submit" className="sign-btn">
          Register
        </button>
      </form>
    </div>
  );
}
