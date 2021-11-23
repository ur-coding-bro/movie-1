import React from "react";
//components
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import MovieList from "../components/MovieList";
import { useState } from "react";
import axios from "axios";
import { Provide } from "../context";
import { useContext } from "react";

export default function Home(props) {
  // const [valid, setValid] = useState();
  // axios.get("/res").then((res) => {
  //   setValid(res.data.username);
  //   setEmail(res.data.email);
  // });

  return (
    <>
      <Hero />
      {/* movie lists */}
      <MovieList type="Action" />
      <MovieList type="Horror" />
      <MovieList type="Comedy" />
      {/* movie lists */}
      <Footer />
    </>
  );
}
