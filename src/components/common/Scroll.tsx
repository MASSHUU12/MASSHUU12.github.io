import { FunctionComponent } from "preact";
import * as Sc from "@masshuu/scroll-utilities";

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
      onClick={(e: MouseEvent) =>
        Sc.default.intoView({ target: to, behavior })
      }>
      {text}
    </a>
  );
};

export default Scroll;
