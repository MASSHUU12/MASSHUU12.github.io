import { useAppDispatch } from "../../../app/hooks";
import { Icon } from "@iconify/react";
import { toggleMobileMenu } from "../../../features/mobileMenuSlice";
import { scroll } from "../../../utils/preventScroll";

const Header = (): JSX.Element => {
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
