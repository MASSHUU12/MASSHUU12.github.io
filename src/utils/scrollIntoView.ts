import { JSXInternal } from "preact/src/jsx";

type Props = {
  e:
    | JSXInternal.TargetedMouseEvent<HTMLAnchorElement>
    | React.MouseEvent<HTMLButtonElement, MouseEvent>
    | React.MouseEvent<HTMLAnchorElement>;
  to: string;
  behavior?: "smooth" | "auto";
};

export const scrollIntoView = ({ e, to, behavior = "smooth" }: Props): void => {
  e.preventDefault();

  document.getElementById(to)?.scrollIntoView({
    behavior: behavior,
    block: "start",
  });
};
