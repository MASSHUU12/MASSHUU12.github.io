interface Props {
  text: string;
  to: string;
  behavior?: "smooth" | "auto";
}

const Scroll = ({ text, to, behavior = "smooth" }: Props) => {
  const scroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>): void => {
    e.preventDefault();

    document.getElementById(to)?.scrollIntoView({
      behavior: behavior,
      block: "start",
    });
  };

  return (
    <a href="/" rel="noreferrer" onClick={(e) => scroll(e)}>
      {text}
    </a>
  );
};

export default Scroll;
