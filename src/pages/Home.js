import React, { useState, useEffect } from "react";
import Image from "../img/portfolio-home-sitting.png";

const Home = () => {
  const [message, setMessage] = useState("Hello");
  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      const hours = date.getHours();
      const words = ["Good morning", "Hello", "Good evening", "Good night"];

      if (hours < 11) setMessage(words[0]);
      else if (hours >= 11 && hours < 17) setMessage(words[1]);
      else if (hours >= 17 && hours < 21) setMessage(words[2]);
      else setMessage(words[3]);
    }, 60000);

    return () => clearInterval(interval); // This represents the unmount to clear interval to prevent memory leaks.
  }, []);

  return (
    <div className="basic-layout home-container">
      <div className="home-container-left">
        <h3>{message} I, am</h3>
        <h1>Maciej</h1>
        <h1>Gawrysiak</h1>
        <p>Junior full-stack developer</p>
      </div>
      <div className="home-container-right">
        <img src={Image} alt="Home Banner" />
      </div>
    </div>
  );
};

export default Home;
