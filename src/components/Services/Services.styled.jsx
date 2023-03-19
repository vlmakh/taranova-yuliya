import styled from "styled-components";
import { Section, Title } from "../Base/Base";

export const ServicesWrap = styled(Section)`
  background-color: white;
`;

export const ServicesTitle = styled(Title)`
  font-family: ${(p) => p.lang === "uk" ? p.theme.fonts.logoUk : p.theme.fonts.logo};
  font-style: ${(p) => p.lang === "uk" ? 'italic' : null};
  color: ${(p) => p.theme.colors.main};
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  gap: 32px;
  justify-content: center;
  margin-top: 32px;
`;

export const Item = styled.li`
  width: 240px;  
`;

export const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 132px;
  padding: 32px;
  font-size: 24px;
  font-weight: 700;
  border-radius: 16px;
  border: 2px solid ${(p) => p.theme.colors.main};
  color: ${(p) => p.theme.colors.main};

  transition: color 300ms ease-in, background-color 300ms ease-in;

  :hover {
    color: white;
    background-color: ${(p) => p.theme.colors.main};
  }
`;
