import * as Sc from "@/helpers/Scroll";
import { Link } from "@mui/material";
import { JSX } from "preact";

type Props = {
  text: string;
  to: string;
  behavior?: "smooth" | "auto";
};

function ScrollLink({ text, to, behavior = "smooth" }: Props): JSX.Element {
  return (
    <Link
      href="/"
      rel="noreferrer"
      onClick={() => Sc.default.intoView({ target: to, behavior })}>
      {text}
    </Link>
  );
}

export default ScrollLink;
