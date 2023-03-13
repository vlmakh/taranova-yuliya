import {
  FooterWrap,
  ContactsList,
  ContactsItem,
  ContactsLink,
  JustList,
  JustItem, StyledSpan
} from "./Footer.styled";

export const Footer = () => {
  return (
    <FooterWrap id="contacts">
      <JustList>
        <JustItem><StyledSpan>Just Try</StyledSpan></JustItem>
        <JustItem>To be HEALTHY</JustItem>
        <JustItem>To be FIT</JustItem>
        <JustItem><StyledSpan>Just Try</StyledSpan></JustItem>
        <JustItem>TO BE</JustItem>
      </JustList>

      <ContactsList>
        <ContactsItem>
          <ContactsLink href="tel:+353892337815">
            Phone: +353 89 233 7815
          </ContactsLink>
        </ContactsItem>
        <ContactsItem>
          <ContactsLink href="mailto:ju.taranova@gmail.com">
            Email: ju.taranova@gmail.com
          </ContactsLink>
        </ContactsItem>
        <ContactsItem>Ballincollig Gym </ContactsItem>
      </ContactsList>
    </FooterWrap>
  );
};
