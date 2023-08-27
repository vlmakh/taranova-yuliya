import styled from "styled-components";
import { Section, Title } from "../Base/Base";

export const CertWrap = styled(Section)`
  background-color: white;
`;

export const CertTitle = styled(Title)`
  font-family: ${(p) =>
    p.lang === "ua" ? p.theme.fonts.logoUa : p.theme.fonts.logo};
  font-style: ${(p) => (p.lang === "ua" ? "italic" : null)};
  color: ${(p) => p.theme.colors.main};
`;

export const CertList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style: none;
  gap: ${(p) => p.theme.space[4]}px;
  margin-top: ${(p) => p.theme.space[5]}px;

  @media (max-width: 480px) {
    padding: 0 8px;
  }
`;

export const CertItem = styled.li`
  cursor: pointer;

  @media (max-width: 480px) {
    max-width: 420px;
  }

  @media (min-width: 481px) {
    max-width: 540px;
  }
`;
