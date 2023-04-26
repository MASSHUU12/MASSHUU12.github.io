import { FunctionComponent, JSX } from "preact";

import * as Sc from "helpers/Scroll";

type Props = {
  text: string;
  to: string;
  behavior?: "smooth" | "auto";
};

/**
 *
 *
 * @param {Props} {
 *   text,
 *   to,
 *   behavior = "smooth",
 * }
 * @return {*}  {JSX.Element}
 */
const Scroll: FunctionComponent<Props> = ({
  text,
  to,
  behavior = "smooth",
}: Props): JSX.Element => {
  return (
    <a
      href="/"
      rel="noreferrer"
      onClick={() => Sc.default.intoView({ target: to, behavior })}>
      {text}
    </a>
  );
};

export default Scroll;
