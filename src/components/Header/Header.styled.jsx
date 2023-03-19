import styled from "styled-components";

export const HeaderWrap = styled.header`
  display: flex;
  gap: ${(p) => p.theme.space[4]}px;
  position: fixed;
  width: 100%;
  height: 64px;
  border-bottom: 1px solid lightgrey;
  z-index: 100;
  background-color: rgba(255, 255, 255, 0.5);

  @media (max-width: 1279.98px) {
    padding-left: ${(p) => p.theme.space[4]}px;
    padding-right: ${(p) => p.theme.space[4]}px;
  }

  @media (min-width: 1280px) {
    padding-left: ${(p) => p.theme.space[5]}px;
    padding-right: ${(p) => p.theme.space[5]}px;
  }
`;

export const HeaderLogo = styled.a`
  display: inline-flex;
  align-items: center;
  font-family: ${(p) => p.theme.fonts.logo};
  font-size: ${(p) => p.theme.fontSizes.l};
  color: ${(p) => p.theme.colors.main};
  text-decoration: none;
  cursor: pointer;

  transition: text-shadow 300ms ease-in;

  :hover {
    text-shadow: ${(p) => p.theme.shadows.link};
  }
`;

export const Nav = styled.ul`
  display: flex;
  justify-content: right;
  list-style: none;
  gap: ${(p) => p.theme.space[4]}px;
  margin-left: auto;

  @media (max-width: 480px) {
    display: none;
  }
`;

export const NavMobile = styled.ul`
  display: flex;
  justify-content: right;
  list-style: none;
  gap: ${(p) => p.theme.space[4]}px;
  margin-left: auto;

  @media (min-width: 481px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 100%;
`;

export const NavLink = styled.a`
  display: flex;
  align-items: center;
  height: 100%;
  gap: 8px;
  text-decoration: none;
  color: ${(p) => p.theme.colors.main};
  font-size: ${(p) => p.theme.fontSizes.s};
  font-weight: 700;
  cursor: pointer;

  transition: text-shadow 300ms ease-in;

  :hover {
    text-shadow: ${(p) => p.theme.shadows.link};
  }
`;

export const LangBtn = styled.button`
  background-color: transparent;
  border: none;
  color: ${(p) => p.theme.colors.main};
  cursor: pointer;
`;
