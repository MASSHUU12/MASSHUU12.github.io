import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";
import { FunctionComponent } from "preact";

type Props = {
  flag: string;
  locale: string;
};

const Flag: FunctionComponent<Props> = ({ flag, locale }): JSX.Element => {
  const { i18n } = useTranslation();

  const changeLocale = (locale: string): void => {
    i18n.changeLanguage(locale);
  };

  return <Icon icon={flag} width="32" onClick={() => changeLocale(locale)} />;
};

export default Flag;
