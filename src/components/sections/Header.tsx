import { Icon } from "@iconify/react";
import { FunctionComponent, JSX } from "preact";

import Scroll from "helpers/Scroll";
import { usePopupsStore } from "src/app/store";

/**
 * Header component, displays content only on mobile
 *
 * @return {*}  {JSX.Element}
 */
const Header: FunctionComponent<any> = (): JSX.Element => {
  const toggle = usePopupsStore(state => state.toggle);

  return (
    <header id="header" class="flex justify-end py-4 md:invisible">
      <Icon
        icon="charm:menu-hamburger"
        color="white"
        width="48"
        onClick={() => {
          toggle("mobileMenu");
          Scroll.disable();
        }}
      />
    </header>
  );
};

export default Header;
