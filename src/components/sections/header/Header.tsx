import { FunctionComponent } from "preact";
import { Icon } from "@iconify/react";

import { scroll } from "utils/preventScroll";
import { useAppDispatch } from "src/app/hooks";
import { toggleMobileMenu } from "features/mobileMenuSlice";

import "./Style.scss";

/**
 * Header component, displays content only on mobile
 *
 * @return {*}  {JSX.Element}
 */
const Header: FunctionComponent<any> = (): JSX.Element => {
  const dispatch = useAppDispatch();

  return (
    <header id="header">
      <Icon
        icon="charm:menu-hamburger"
        color="white"
        width="48"
        onClick={() => {
          // Open menu.
          dispatch(toggleMobileMenu(true));

          // Prevent page from scrolling.
          scroll.disable();
        }}
      />
    </header>
  );
};

export default Header;
