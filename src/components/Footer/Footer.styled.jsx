import styled from "@emotion/styled";

export const FooterWrap = styled.footer`
  padding: 64px 0;
  font-weight: 700;
  color: ${(p) => p.theme.colors.secondary};
  width: 100%;
  border-top: 1px solid lightgrey;
  background-color: ${(p) => p.theme.colors.main};
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-end;
`;

export const JustList = styled.ul`
  margin: 0 auto;
  list-style: none;
  max-width: 480px;
`;

export const JustItem = styled.li`
  padding: 4px;
  font-size: 24px;
  font-weight: 400;
  color: white;
`;

export const ContactsList = styled.ul`
  margin: 0 auto;
  list-style: none;
  max-width: 480px;

  @media (max-width: 767.98px) {
    margin-top: 32px;
  }
`;

export const ContactsItem = styled.li`
  padding: 8px;
  font-size: 24px;
  font-weight: 400;
  text-transform: uppercase;
`;

export const ContactsLink = styled.a`
  padding: 0;
  font-size: 24px;
  font-weight: 400;
  text-transform: uppercase;
  text-decoration: none;
  color: ${(p) => p.theme.colors.secondary};
`;

export const StyledSpan = styled.span`
  font-family: ${(p) => p.theme.fonts.logo};
  font-size: 28px;
`;
