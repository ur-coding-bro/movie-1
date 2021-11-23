import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Provide } from "../context.js";
import { useContext } from "react";

export default function Hero() {
  const value = useContext(Provide);
  const { data } = value;
  const newData = data.filter((item) => {
    return item.hero_image;
  });

  const [count, setCount] = useState(0);

  setTimeout(() => {
    const start = () => {
      if (count < newData.length - 1) {
        setCount(count + 1);
      } else {
        setCount(0);
      }
    };
    start();
  }, 5000);
  return (
    <>
      <div className="hero-bg">
        <a download href="./download/down.mp4">
          {" "}
          <img src={newData[count].hero_image} alt="" />
        </a>
      </div>
      <div className="container">
        <div className="hero-content">
          <div className="row">
            <div className="col-1">
              <a href="#">
                <img className="no-edge" src={newData[count].image} alt="" />
              </a>
            </div>
            <div className="col-1"></div>
            <div className="col-5 hero-info">
              <h1 className="hover-main-color">{newData[count].name}</h1>
              <h5>{`${newData[count].date} . ${newData[count].rated}`}</h5>
              <h5>{newData[count].type}</h5>
              <Link to={`/Movie/${newData[count].name}`}>
                <button type="button" className="hero-btn">
                  Watch Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
