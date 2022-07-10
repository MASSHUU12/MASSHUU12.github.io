import { Icon } from "@iconify/react";

interface Props {
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

const About = ({ setToggle }: Props): JSX.Element => {
  return (
    <section className="about-container">
      <div className="about-left">
        <h1>About Me.</h1>
        <span>Junior Developer</span>
        <p>
          I'm Maciej, a 20-year-old Polish <strong>junior developer</strong>.
          I'm a weird guy who likes to create weird things and bring them to
          life. Not only that, but I like <strong>solving</strong> problems and{" "}
          <strong>finding</strong> the best solutions. When I'm not playing with{" "}
          <strong>code</strong>, I'm playing with my <strong>cat</strong>.
        </p>
      </div>
      <div className="about-right">
        <div className="about-right-header">
          <h1>Contact.</h1>
          <Icon
            onClick={() => setToggle(false)}
            icon="carbon:close"
            color="white"
            width="48"
            height="48"
          />
        </div>
        <a
          href="mailto:gawrysiak.maciej@pm.com"
          target="_blank"
          rel="noreferrer"
        >
          <Icon
            icon="ic:outline-alternate-email"
            color="white"
            width="32"
            height="32"
          />
          <span>gawrysiak.maciej@pm.me</span>
        </a>
        <a href="https://github.com/MASSHUU12" target="_blank" rel="noreferrer">
          <Icon icon="brandico:github" color="white" width="32" height="32" />
          <span>MASSHUU12</span>
        </a>
        <a href="https://t.me/MASSHUU" target="_blank" rel="noreferrer">
          <Icon
            icon="akar-icons:telegram-fill"
            color="white"
            width="32"
            height="32"
          />
          <span>MASSHUU</span>
        </a>
        <a
          href="https://linkedin.com/in/maciej-gawrysiak"
          target="_blank"
          rel="noreferrer"
        >
          <Icon
            icon="brandico:linkedin-rect"
            color="white"
            width="32"
            height="32"
          />
          <span>Linkedin</span>
        </a>
      </div>
    </section>
  );
};

export default About;
