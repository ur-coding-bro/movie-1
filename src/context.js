import React, { Component } from "react";
import { createContext, useContext } from "react";
import { data } from "./data";
import axios from "axios";

export const Provide = createContext();
export const Content = () => useContext(Provide);
export default class context extends Component {
  state = {
    data: data,
    username: "",
    email: "",
    valid: false,
  };

  componentDidMount = () => {
    axios.get("/moviesend").then((res) => {
      return this.setState({ data: res.data });
    });
    axios.get("/res").then((res) => {
      this.setState({ username: res.data.username, email: res.data.email });
    });
  };
  componentDidUpdate = () => {
    console.log(this.state);
  };
  render() {
    return (
      <Provide.Provider value={this.state}>
        {this.props.children}
      </Provide.Provider>
    );
  }
}
