import React, { useState, useEffect } from "react";
import Image from "../img/portfolio-home-sitting.png";
import { Icon } from "@iconify/react";
import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();
  const [message, setMessage] = useState(t("hello"));
  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      const hours = date.getHours();
      const words = [
        t("goodMorning"),
        t("hello"),
        t("goodEvening"),
        t("goodNight"),
      ];

      if (hours < 11) setMessage(words[0]);
      else if (hours >= 11 && hours < 17) setMessage(words[1]);
      else if (hours >= 17 && hours < 21) setMessage(words[2]);
      else setMessage(words[3]);
    }, 60000);

    return () => clearInterval(interval); // This represents the unmount to clear interval to prevent memory leaks.
  });

  return (
    <>
      <div id="home" className="home-container">
        <div className="home-container-left">
          <h3>
            {message}, {t("iAm")}
          </h3>
          <h1>Maciej</h1>
          <h1>Gawrysiak</h1>
          <p>Junior full-stack {t("developer")}</p>
        </div>
        <div className="home-container-right">
          <img src={Image} alt="Home Banner" />
        </div>
      </div>
      <div className="home-container-arrow">
        <Link to="about" spy={true} smooth={true}>
          <Icon icon="eva:arrowhead-down-fill" width="64" />
        </Link>
      </div>
    </>
  );
};

export default Home;
