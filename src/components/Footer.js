import React from "react";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer-left">
        <h1>Useful links</h1>
        <p>
          <a href="/">Home</a>
        </p>
        <p>
          <a href="/about">About</a>
        </p>
        <p>
          <a href="/work">Work</a>
        </p>
        <p>
          <a href="/contact">Contact me</a>
        </p>
        <div className="footer-lang">
          <a href="#">
            <span
              className="iconify"
              data-icon="twemoji:flag-for-flag-poland"
              data-width="38"
            ></span>
          </a>
          <a href="#">
            <span
              className="iconify"
              data-icon="twemoji:flag-for-flag-united-states"
              data-width="38"
            ></span>
          </a>
        </div>
      </div>
      <div className="footer-right">
        <h1>Contact</h1>
        <a href="mailto:gawrysiak.maciej@pm.me" className="footer-link">
          <span
            className="iconify"
            data-icon="akar-icons:envelope"
            data-width="32"
          ></span>
          gawrysiak.maciej@pm.me
        </a>

        <a
          href="https://t.me/MASSHUU"
          target="_blank"
          rel="noreferrer"
          className="footer-link"
        >
          <span
            className="iconify"
            data-icon="bx:bxl-telegram"
            data-width="32"
          ></span>
          MASSHUU
        </a>

        <a
          href="https://github.com/MASSHUU12"
          target="_blank"
          className="footer-link"
          rel="noreferrer"
        >
          <span
            className="iconify"
            data-icon="akar-icons:github-fill"
            data-width="32"
          ></span>
          MASSHUU12
        </a>

        <a
          href="https://linkedin.com/in/maciej-gawrysiak"
          target="_blank"
          className="footer-link"
          rel="noreferrer"
        >
          <span
            className="iconify"
            data-icon="brandico:linkedin-rect"
            data-width="32"
          ></span>
          LinkedIn
        </a>

        <div className="footer-link-mobile">
          <a
            href="https://linkedin.com/in/maciej-gawrysiak"
            target="_blank"
            rel="noreferrer"
          >
            <span
              className="iconify"
              data-icon="brandico:linkedin-rect"
              data-width="32"
            ></span>
          </a>

          <a href="mailto:gawrysiak.maciej@pm.me">
            <span
              className="iconify"
              data-icon="akar-icons:envelope"
              data-width="32"
            ></span>
          </a>

          <a href="https://t.me/MASSHUU" rel="noreferrer" target="_blank">
            <span
              className="iconify"
              data-icon="bx:bxl-telegram"
              data-width="32"
            ></span>
          </a>

          <a
            href="https://github.com/MASSHUU12"
            rel="noreferrer"
            target="_blank"
          >
            <span
              className="iconify"
              data-icon="akar-icons:github-fill"
              data-width="32"
            ></span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
