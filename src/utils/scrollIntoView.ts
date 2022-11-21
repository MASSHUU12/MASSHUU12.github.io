interface Props {
  e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement, MouseEvent>;
  to: string;
  behavior?: "smooth" | "auto";
}

export const scrollIntoView = ({ e, to, behavior = "smooth" }: Props): void => {
  e.preventDefault();

  document.getElementById(to)?.scrollIntoView({
    behavior: behavior,
    block: "start",
  });
};
