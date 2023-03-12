import styled from '@emotion/styled';

export const HeaderWrap = styled.header`
  display: flex;
  align-items: center;
  gap: ${p => p.theme.space[4]}px;

  position: fixed;
  width: 100%;
  height: 64px;
  border-bottom: 1px solid lightgrey;
  z-index: 100;
  background-color: rgba(255, 255, 255, 0.5);

  @media (max-width: 1279.98px) {
    padding-left: ${p => p.theme.space[4]}px;
    padding-right: ${p => p.theme.space[4]}px;
  }

  @media (min-width: 1280px) {
    padding-left: ${p => p.theme.space[5]}px;
    padding-right: ${p => p.theme.space[5]}px;
  }
`;

export const LogoDiv = styled.div`
  display: flex;
  align-items: center;
  gap: ${p => p.theme.space[3]}px;
  color: ${p => p.theme.colors.textMain};
  margin-left: ${p => p.theme.space[3]}px;

  @media (max-width: 767.98px) {
    display: none;
  }
`;

export const HeaderLogo = styled.a`
  font-size: 32px;
  font-weight: 700;
  color: #112734;
  text-decoration: none;
  cursor: pointer;

  transition: text-shadow 300ms ease-in;

  :hover {
    text-shadow: ${p => p.theme.shadows.link};
  }
`;

export const Nav = styled.ul`
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: right;
  list-style: none;
  gap: ${p => p.theme.space[4]}px;
  margin-left: auto;

  @media (max-width: 480px) {
    display: none;
  }
`;

export const NavMobile = styled.ul`
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: right;
  list-style: none;
  gap: ${p => p.theme.space[4]}px;
  margin-left: auto;

  @media (min-width: 481px) {
    display: none;
  }
`;

export const NavItem = styled.li``;

export const NavLink = styled.a`
  display: flex;
  align-items: center;  
  gap: 8px;
  text-decoration: none;
  color: ${p => p.theme.colors.main};
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: 700;
  cursor: pointer;

  transition: text-shadow 300ms ease-in;

  :hover {
    text-shadow: ${p => p.theme.shadows.link};
  }
`;
