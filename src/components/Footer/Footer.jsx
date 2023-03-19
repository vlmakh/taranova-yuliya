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
import { useTranslation } from "next-i18next";

export const Footer = ({lang}) => {
  const { t } = useTranslation("common");

  return (
    <FooterWrap id="contacts">
      <JustList>
        <JItem>
          <JStyled lang={lang}>{t('footer.just1')}</JStyled>
        </JItem>
        <JItem>{t('footer.just2')}</JItem>
        <JItem>{t('footer.just3')}</JItem>
        <JItem>
          <JStyled lang={lang}>{t('footer.just1')}</JStyled>
        </JItem>
        <JItem>{t('footer.just4')}</JItem>
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
            <BiMap size="24" /> {t('footer.addr')}
          </CLink>
        </CItem>
      </ContactsList>
    </FooterWrap>
  );
};
