import React from "react";
import { Icon } from "@iconify/react";

const Contact = () => {
  return (
    <div id="contact" className="contact-container">
      <div className="contact-content">
        <h1>Contact:</h1>
        <p>
          <Icon icon="akar-icons:envelope" width="32" />
          gawrysiak.maciej@pm.com
        </p>
        <p>
          <Icon icon="bx:bxl-telegram" width="32" />
          <a href="https://t.me/MASSHUU" target="_blank" rel="noreferrer">
            t.me/MASSHUU
          </a>
        </p>
        <p>
          <Icon icon="akar-icons:github-fill" width="32" />
          <a
            href="https://github.com/MASSHUU12"
            target="_blank"
            rel="noreferrer"
          >
            MASSHUU12
          </a>
        </p>
        <p>
          <Icon icon="brandico:linkedin-rect" width="32" />
          <a
            href="https://linkedin.com/in/maciej-gawrysiak"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </p>
      </div>
    </div>
  );
};

export default Contact;
