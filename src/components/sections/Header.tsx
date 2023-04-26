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
  const toggleMobileMenu = usePopupsStore(state => state.toggleMobileMenu);

  return (
    <header id="header" class="flex justify-end py-4 md:invisible">
      <Icon
        icon="charm:menu-hamburger"
        color="white"
        width="48"
        onClick={() => {
          toggleMobileMenu(true);
          Scroll.disable();
        }}
      />
    </header>
  );
};

export default Header;
