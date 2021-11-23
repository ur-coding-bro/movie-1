import React from "react";
import axios from "axios";
import { useState } from "react";
import { Provide } from "../context";
import { useContext } from "react";
import { useEffect } from "react";

export default function Dashboard() {
  useEffect(() => {});
  const value = useContext(Provide);
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  return (
    <>
      <h1 className="center">
        Username:{value.username}, Email:{value.email}
      </h1>
    </>
  );
}
