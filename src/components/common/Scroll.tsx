import { scrollIntoView } from "../../utils/scrollIntoView";

interface Props {
  text: string;
  to: string;
  behavior?: "smooth" | "auto";
}

const Scroll = ({ text, to, behavior = "smooth" }: Props) => {
  return (
    <a
      href="/"
      rel="noreferrer"
      onClick={e => scrollIntoView({ e: e, to: to, behavior: behavior })}>
      {text}
    </a>
  );
};

export default Scroll;
