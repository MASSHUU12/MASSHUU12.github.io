import Cookie from "@/helpers/Cookie";
import { Icon } from "@iconify/react";
import { JSX } from "preact";
import { useTranslation } from "react-i18next";

type Props = {
  flag: string;
  locale: string;
};

function Flag({ flag, locale }: Props): JSX.Element {
  const { i18n } = useTranslation();

  const changeLocale = (locale: string): void => {
    i18n.changeLanguage(locale);
    Cookie.setCookie("lang", locale);
  };

  return <Icon icon={flag} width="32" onClick={() => changeLocale(locale)} />;
}

export default Flag;
