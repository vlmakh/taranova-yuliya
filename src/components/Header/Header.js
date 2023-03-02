import { HeaderWrap, HeaderLogo, Nav, NavLink } from "./Header.styled";

export const Header = () => {
  return (
    <HeaderWrap>
      <HeaderLogo href="#">YT</HeaderLogo>

      <Nav>
        <li>
          <NavLink href="#services">Services</NavLink>
        </li>
        <li>
          <NavLink href="#prices">Prices</NavLink>
        </li>
        <li>
          <NavLink href="#certificates">Certificates</NavLink>
        </li>
        <li>
          <NavLink href="#contacts">Contacts</NavLink>
        </li>
      </Nav>
    </HeaderWrap>
  );
};
