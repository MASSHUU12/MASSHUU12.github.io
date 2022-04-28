import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";

const email = "gawrysiak.maciej@pm.com";
const telegram = "t.me/MASSHUU";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div id="contact" className="contact-container">
      <div className="contact-content">
        <h1>{t("contact")}:</h1>
        <p>
          <Icon icon="akar-icons:envelope" width="32" />
          <a href={`mailto:${email}`} rel="noreferrer">
            {email}
          </a>
        </p>
        <p>
          <Icon icon="bx:bxl-telegram" width="32" />
          <a href={`https:${telegram}`} target="_blank" rel="noreferrer">
            {telegram}
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
