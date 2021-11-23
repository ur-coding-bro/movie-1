import React from "react";
import { useParams } from "react-router";
import { Provide } from "../context";
import { useContext } from "react";

export default function MovieBox() {
  const value = useContext(Provide);
  const { data } = value;
  const pr = useParams("id");
  if (data.length > 1) {
    const movie = value.data.filter((item) => {
      return item.name === pr.id;
    });
    const { image } = movie[0];
    return <img className="single" src={image} alt="" />;
  }
  return (
    <div className="big fa-4x">
      <i className="down fa fa-spinner fa-spin"></i>
    </div>
  );
}
