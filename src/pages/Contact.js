import React from "react";

const Contact = () => {
  return (
    <div className="basic-layout contact-container">
      <div className="contact-content">
        <h1>Contact</h1>
        <h2>Maciej Gawrysiak</h2>
        <p>
          <span
            className="iconify"
            data-icon="akar-icons:envelope"
            data-width="32"
          ></span>
          gawrysiakmaciej@pm.com
        </p>
        <p>
          <span
            className="iconify"
            data-icon="bx:bxl-telegram"
            data-width="32"
          ></span>
          <a href="https://t.me/MASSHUU" target="_blank" rel="noreferrer">
            t.me/MASSHUU
          </a>
        </p>
        <p>
          <span
            className="iconify"
            data-icon="akar-icons:github-fill"
            data-width="32"
          ></span>
          <a
            href="https://github.com/MASSHUU12"
            target="_blank"
            rel="noreferrer"
          >
            MASSHUU12
          </a>
        </p>
        <p>
          <span
            className="iconify"
            data-icon="brandico:linkedin-rect"
            data-width="32"
          ></span>
          <a href="https://linkedin.com/in/maciej-gawrysiak">LinkedIn</a>
        </p>
      </div>
    </div>
  );
};

export default Contact;
