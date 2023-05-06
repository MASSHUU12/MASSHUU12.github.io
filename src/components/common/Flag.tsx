import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";
import { FunctionComponent, JSX } from "preact";

import Cookie from "helpers/Cookie";

type Props = {
  flag: string;
  locale: string;
};

/**
 *
 *
 * @param {Props} { flag, locale }
 * @return {*}  {JSX.Element}
 */
const Flag: FunctionComponent<Props> = ({
  flag,
  locale,
}: Props): JSX.Element => {
  const { i18n } = useTranslation();

  const changeLocale = (locale: string): void => {
    i18n.changeLanguage(locale);
    Cookie.setCookie("lang", locale);
  };

  return <Icon icon={flag} width="32" onClick={() => changeLocale(locale)} />;
};

export default Flag;
