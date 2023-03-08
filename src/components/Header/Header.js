import {
  HeaderWrap,
  HeaderLogo,
  Nav,
  NavMobile,
  NavLink,
} from "./Header.styled";
import { BiCertification } from "react-icons/bi";
import {
  MdMiscellaneousServices,
  MdPriceCheck,
  MdOutlineContactSupport,
} from "react-icons/md";

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

      <NavMobile>
        <li>
          <NavLink href="#services">
            <MdMiscellaneousServices size="24" />
          </NavLink>
        </li>
        <li>
          <NavLink href="#prices">
            <MdPriceCheck size="24" />
          </NavLink>
        </li>
        <li>
          <NavLink href="#certificates">
            <BiCertification size="24" />
          </NavLink>
        </li>
        <li>
          <NavLink href="#contacts">
            <MdOutlineContactSupport size="24" />
          </NavLink>
        </li>
      </NavMobile>
    </HeaderWrap>
  );
};
