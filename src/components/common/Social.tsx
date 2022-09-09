import { Icon } from "@iconify/react";

interface Props {
  href: string;
  text: string;
  icon?: string;
  color?: string;
}

/**
 * Custom link with chosen icon.
 *
 * @param href - Link address.
 * @param text - Link text.
 * @param icon - Link icon.
 *
 * @returns JSX.Element
 */
const Social = ({
  href,
  text,
  icon = "",
  color = "white",
}: Props): JSX.Element => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`common-custom-link${
        icon === "" ? " common-custom-link-wo-icon" : ""
      }`}
    >
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
