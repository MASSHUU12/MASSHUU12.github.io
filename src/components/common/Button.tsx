interface Props {
  text: string;
}

const Button = ({ text }: Props): JSX.Element => {
  return (
    <a href="#" className="common-button">
      {text}
    </a>
  );
};

export default Button;
