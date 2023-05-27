import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";
import { FunctionComponent, JSX } from "preact";

import Cookie from "@/helpers/Cookie";

type Props = {
  flag: string;
  locale: string;
};

/**
 * Renders a flag icon and allows changing the locale when clicked.
 *
 * @param {Props} props - The component props.
 * @param {string} props.flag - The flag icon to display.
 * @param {string} props.locale - The current locale.
 * @returns {JSX.Element} The rendered flag component.
 */
const Flag: FunctionComponent<Props> = ({
  flag,
  locale,
}: Props): JSX.Element => {
  const { i18n } = useTranslation();

  /**
   * Changes the locale and sets the language cookie.
   *
   * @param {string} locale - The new locale to change to.
   * @returns {void}
   */
  const changeLocale = (locale: string): void => {
    i18n.changeLanguage(locale);
    Cookie.setCookie("lang", locale);
  };

  return <Icon icon={flag} width="32" onClick={() => changeLocale(locale)} />;
};

export default Flag;
