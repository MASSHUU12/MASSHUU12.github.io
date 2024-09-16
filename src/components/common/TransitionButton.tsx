import { keyframes } from "@emotion/react";
import { Button, Typography } from "@mui/material";
import { JSX } from "preact";

type Props = {
  text: string;
  // eslint-disable-next-line no-unused-vars
  action: (args: unknown) => unknown;
  delay?: number;
};

function TransitionButton({ text, action, delay = 0 }: Props): JSX.Element {
  const animateButton = keyframes({
    "0%": {
      transform: "translateY(100px)",
      opacity: 0,
    },
    "100%": {
      transform: "translateY(0px)",
      opacity: 1,
    },
  });

  return (
    <Button
      variant="text"
      sx={{
        transform: "translateY(100px)",
        opacity: 0,
        animation: `${animateButton} 750ms`,
        animationDelay: `${delay}ms`,
        animationFillMode: "forwards",
        transition: "scale 0.2s ease-in-out",
        "&:hover": {
          scale: 1.1,
        },
      }}
      onClick={action}>
      <Typography variant="button" color="primary.contrastText">
        {text}
      </Typography>
    </Button>
  );
}

export default TransitionButton;
