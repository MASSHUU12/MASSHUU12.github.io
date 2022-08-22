interface Props {
  text: string;
  white?: boolean;
  action: () => void;
}

const Button = ({ text, white = false, action }: Props): JSX.Element => {
  return (
    <div
      className={`common-button${white ? " common-button-white" : ""}`}
      onClick={action}
    >
      {text}
    </div>
  );
};

export default Button;
