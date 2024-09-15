import { Link, Typography } from "@mui/material";
import { JSX } from "preact";

type Props = {
  href: string;
  text: string;
  children?: JSX.Element;
};

function Social({ href, text, children }: Props): JSX.Element {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noreferrer"
      display="flex"
      flexDirection="row"
      gap={1}
      color="primary.contrastText">
      {children}
      <Typography variant="subtitle1">{text}</Typography>
    </Link>
  );
}

export default Social;
