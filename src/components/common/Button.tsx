interface Props {
  text: string;
  white?: boolean;
  action: () => void;
}

const Button: React.FunctionComponent<Props> = ({
  text,
  white = false,
  action,
}): JSX.Element => {
  return (
    <div
      className={`common-button${white ? " common-button-white" : ""}`}
      onClick={action}>
      {text}
    </div>
  );
};

export default Button;
