import { Icon } from "@iconify/react";
import { useSpring, animated } from "@react-spring/web";
import { useState } from "react";

interface Props {
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

const About = ({ setToggle }: Props): JSX.Element => {
  const [reverse, setReverse] = useState(false);

  const closeAnim = () => {
    reverse && setToggle(false);
  };

  const left = useSpring({
    to: { y: 0 },
    from: { y: -window.innerHeight * 0.75 },
    reset: true,
    reverse: reverse,
  });
  const right = useSpring({
    to: { y: 0 },
    from: { y: window.innerHeight * 0.75 },
    reset: true,
    reverse: reverse,
    onRest: closeAnim,
  });
  const background = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    reset: true,
    reverse: reverse,
  });

  return (
    <animated.section
      style={background}
      className="common-container"
      onClick={() => setReverse(!reverse)}
    >
      <animated.div className="common-left" style={left}>
        <h1>About Me.</h1>
        <span>Junior Developer</span>
        <p>
          I'm Maciej, a 20-year-old Polish <strong>junior developer</strong>.
          I'm a weird guy who likes to create weird things and bring them to
          life. Not only that, but I like <strong>solving</strong> problems and{" "}
          <strong>finding</strong> the best solutions. When I'm not playing with{" "}
          <strong>code</strong>, I'm playing with my <strong>cat</strong>.
        </p>
      </animated.div>
      <animated.div className="common-right" style={right}>
        <div className="common-right-header">
          <h1>Contact.</h1>
          <Icon
            onClick={() => setReverse(!reverse)}
            icon="carbon:close"
            color="white"
            width="48"
            height="48"
          />
        </div>
        <div className="common-right-links">
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
          <a
            href="https://github.com/MASSHUU12"
            target="_blank"
            rel="noreferrer"
          >
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
      </animated.div>
    </animated.section>
  );
};

export default About;
