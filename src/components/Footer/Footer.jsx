import {
  FooterWrap,
  ContactsList,
  CItem,
  CLink,
  JustList,
  JItem,
  JStyled,
} from "./Footer.styled";
import { MdOutlineMarkEmailRead, MdOutlineWhatsapp } from "react-icons/md";
import { BiMap } from "react-icons/bi";

export const Footer = () => {
  return (
    <FooterWrap id="contacts">
      <JustList>
        <JItem>
          <JStyled>Just Try</JStyled>
        </JItem>
        <JItem>To be HEALTHY</JItem>
        <JItem>To be FIT</JItem>
        <JItem>
          <JStyled>Just Try</JStyled>
        </JItem>
        <JItem>TO BE</JItem>
      </JustList>

      <ContactsList>
        <CItem>
          <CLink href="https://wa.me/353892337815">
            <MdOutlineWhatsapp size="24" /> +353 89 233 7815
          </CLink>
        </CItem>
        <CItem>
          <CLink href="mailto:ju.taranova@gmail.com">
            <MdOutlineMarkEmailRead size="24" /> ju.taranova@gmail.com
          </CLink>
        </CItem>
        <CItem>
          <CLink href="https://goo.gl/maps/M89tJoxzzhwB8zZE9" target="_blank">
            <BiMap size="24" /> Ballincollig Gym
          </CLink>
        </CItem>
      </ContactsList>
    </FooterWrap>
  );
};
