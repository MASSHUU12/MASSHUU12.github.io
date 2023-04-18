import { FunctionComponent } from "preact";
import { Icon } from "@iconify/react";

import { useAppDispatch } from "src/app/hooks";
import { toggleMobileMenu } from "features/mobileMenuSlice";
import Scroll from "@masshuu/scroll-utilities";

/**
 * Header component, displays content only on mobile
 *
 * @return {*}  {JSX.Element}
 */
const Header: FunctionComponent<any> = (): JSX.Element => {
  const dispatch = useAppDispatch();

  return (
    <header id="header" class="flex justify-end py-4 md:invisible">
      <Icon
        icon="charm:menu-hamburger"
        color="white"
        width="48"
        onClick={() => {
          dispatch(toggleMobileMenu(true));
          Scroll.disable();
        }}
      />
    </header>
  );
};

export default Header;
