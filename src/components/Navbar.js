import React from "react";
import { Link } from "react-router-dom";
import { Provide } from "../context";
import { useContext } from "react";
export default function Navbar() {
  const value = useContext(Provide);
  return (
    <div className="navbar-main">
      <div className="container mt-3">
        <div className="row align-items-center">
          <div className="col-1">
            <Link to="/">
              <h2 className="hover-main-color">tubi</h2>
            </Link>
          </div>
          <div className="col-1">
            <h6>Browse</h6>
          </div>
          <div className="col-1">
            <h6>Tubi kids</h6>
          </div>
          <div className="col-1">
            <h6>Live TV</h6>
          </div>
          <div className="col-2"></div>
          <div className="col-4">
            <form action="GET" className="nav-input">
              <label htmlFor="search">
                <i className="fa fa-search mx-3"></i>
              </label>

              <input
                type="text"
                id="search"
                placeholder="Find movies, TV shows and more"
              />
            </form>
          </div>
          <div className="col-1">
            {value.username ? (
              <Link to="/home">
                <h5 className="hover-main-color">home</h5>
              </Link>
            ) : (
              <Link to="/register">
                <h5 className="hover-main-color">Register</h5>
              </Link>
            )}
          </div>
          <div className="col-1">
            {value.username ? (
              <a href="http://localhost:5000/logout">
                <h5 className="hover-main-color">logout</h5>
              </a>
            ) : (
              <Link to="/login">
                <h5 className="hover-main-color">login</h5>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
