import React from "react";
//components
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import MovieList from "../components/MovieList";

export default function Home(props) {
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
