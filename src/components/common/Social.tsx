import { Icon } from "@iconify/react";
import { FunctionComponent } from "preact";

type Props = {
  href: string;
  text: string;
  icon?: string;
  color?: string;
};

/**
 * Custom link with chosen icon.
 *
 * @param href - Link address.
 * @param text - Link text.
 * @param icon - Link icon.
 *
 * @returns JSX.Element
 */
const Social: FunctionComponent<Props> = ({
  href,
  text,
  icon = "",
  color = "white",
}): JSX.Element => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      class={`common-custom-link${
        icon === "" ? " common-custom-link-wo-icon" : ""
      }`}>
      {icon !== "" ? (
        <Icon icon={icon} color={color} width="32" height="32" />
      ) : (
        ""
      )}
      <span>{text}</span>
    </a>
  );
};

export default Social;
