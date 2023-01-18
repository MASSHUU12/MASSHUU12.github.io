import { JSXInternal } from "preact/src/jsx";

type Props = {
  e:
    | JSXInternal.TargetedMouseEvent<HTMLAnchorElement>
    | MouseEvent
    | MouseEvent;
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
