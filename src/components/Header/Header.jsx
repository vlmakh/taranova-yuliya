import {
  HeaderWrap,
  HeaderLogo,
  Nav,
  NavMobile,
  NavLink,
  NavItem,
} from "./Header.styled";
import {
  MdMiscellaneousServices,
  MdPriceCheck,
  MdOutlineVerified,
  MdOutlineContactSupport,
} from "react-icons/md";

export const Header = () => {
  return (
    <HeaderWrap>
      <HeaderLogo href="#">YTaranova</HeaderLogo>

      <Nav>
        <NavItem>
          <NavLink href="#services">Services</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#prices">Prices</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#certificates">Certificates</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#contacts">Contacts</NavLink>
        </NavItem>
      </Nav>

      <NavMobile>
        <NavItem>
          <NavLink href="#services">
            <MdMiscellaneousServices size="24" />
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#prices">
            <MdPriceCheck size="24" />
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#certificates">
            <MdOutlineVerified size="24" />
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#contacts">
            <MdOutlineContactSupport size="24" />
          </NavLink>
        </NavItem>
      </NavMobile>
    </HeaderWrap>
  );
};
