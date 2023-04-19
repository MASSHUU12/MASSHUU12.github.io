import { FunctionComponent } from "preact";

type Props = {
  href: string;
  text: string;
  children?: JSX.Element;
  classes?: string;
};

/**
 * Custom link with chosen icon.
 *
 * @param {*} {
 *   href,
 *   text,
 *   children,
 *   classes,
 * }
 * @return {*}  {JSX.Element}
 */
const Social: FunctionComponent<Props> = ({
  href,
  text,
  children,
  classes,
}: Props): JSX.Element => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      class={
        classes ??
        "flex items-center no-underline text-white_custom w-fit gap-3"
      }>
      {children}
      <span>{text}</span>
    </a>
  );
};

export default Social;
