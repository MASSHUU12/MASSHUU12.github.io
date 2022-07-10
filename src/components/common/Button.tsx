interface Props {
  text: string;
  action: () => void;
}

const Button = ({ text, action }: Props): JSX.Element => {
  return (
    <div className="common-button" onClick={action}>
      {text}
    </div>
  );
};

export default Button;
