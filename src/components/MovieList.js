import React from "react";
import d_image from "../images/default.jpg";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Provide } from "../context";
import { useContext } from "react";

// dumb asf stuff

export default function MovieList({ type }) {
  const value = useContext(Provide);
  const { data } = value;
  //data manager
  const tempData = data.filter((item) => {
    return item.type === type;
  });

  const [min, setMin] = useState(0);
  const [max, setMax] = useState(7);

  const newData = tempData.slice(min, max);

  //class change handler
  const [look, setLook] = useState("disabled");
  const [isDisabled, setIsDisabled] = useState(false);
  const [isDisabled2, setIsDisabled2] = useState(false);
  const handler = () => {
    if (!(max > tempData.length - 1)) {
      setLook("go-left");
      setIsDisabled2(false);
      setTimeout(() => {
        setMin(max);
        setMax(max + 7);
        if (max > newData.length - 1) {
          setMax(tempData.length - 1);
          setIsDisabled(true);
        }

        setLook("go-right");
      }, 150);
      setTimeout(() => {
        setLook("diabled");
      }, 800);
    }
  };

  //the other handler
  const handler2 = () => {
    if (!(min < 7)) {
      setIsDisabled(false);
      setLook("to-left");
      setTimeout(() => {
        setLook("to-right");
        setMax(min);
        setMin(min - 7);
        if (min < 7) {
          setIsDisabled2(true);
        }
      }, 150);
    }
  };

  return (
    <>
      <div className="hr-main"></div>
      <div className="container">
        <button className={`movie-list-title`}>
          {type} <i className=" title-icon fa fa-angle-right"></i>
        </button>
        <div className="space">
          <button
            className={`left-scroll`}
            disabled={isDisabled2}
            onClick={handler2}
          >
            <i className="fa fa-angle-left"></i>
          </button>
          <button
            className={`right-scroll`}
            disabled={isDisabled}
            onClick={handler}
          >
            <i className="fa fa-angle-right"></i>
          </button>
        </div>

        <div className={`movie-list-home ${look}`}>
          {newData.map((item, index) => {
            const { name, type, date, image } = item;

            return (
              <span key={name} className="movie-list">
                <div className="movie-list-img">
                  <Link to={`/Movie/${name}`}>
                    <img src={image || d_image} alt={name} />
                  </Link>
                </div>

                <h6 className="small-text-1">{name}</h6>
                <h6 className="small-text-2 text-muted">{type}</h6>
              </span>
            );
          })}
        </div>
      </div>
    </>
  );
}
