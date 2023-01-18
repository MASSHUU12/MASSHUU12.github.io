import { scrollIntoView } from "src/utils/scrollIntoView";
import { FunctionComponent } from "preact";

type Props = {
  text: string;
  to: string;
  behavior?: "smooth" | "auto";
};

const Scroll: FunctionComponent<Props> = ({
  text,
  to,
  behavior = "smooth",
}) => {
  return (
    <a
      href="/"
      rel="noreferrer"
      onClick={(e: MouseEvent) => scrollIntoView({ e, to, behavior })}>
      {text}
    </a>
  );
};

export default Scroll;
