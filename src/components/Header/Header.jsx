import {
  HeaderWrap,
  HeaderLogo,
  Nav,
  NavMobile,
  NavLink,
  NavItem, LangBtn
} from "./Header.styled";
import {
  MdMiscellaneousServices,
  MdPriceCheck,
  MdOutlineVerified,
  MdOutlineContactSupport, MdLanguage
} from "react-icons/md";
import { useTranslation } from "next-i18next";


export const Header = ({onToggleLanguageClick, changeTo}) => {
  const { t } = useTranslation("common");

  return (
    <HeaderWrap>
      <HeaderLogo href="#">YTaranova</HeaderLogo>

      <Nav>
        <NavItem>
          <NavLink href="#services">{t('header.services')}</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#prices">{t('header.prices')}</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#certificates">{t('header.cert')}</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#contacts">{t('header.contacts')}</NavLink>
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

      <LangBtn onClick={() => onToggleLanguageClick(changeTo)}><MdLanguage size="24" /></LangBtn>
    </HeaderWrap>
  );
};
