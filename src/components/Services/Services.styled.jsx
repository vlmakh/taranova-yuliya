import styled from '@emotion/styled';
import { Section, Title } from "../Base/Base";

export const ServicesWrap = styled(Section)`
  background-color: white;
`;

export const ServicesTitle = styled(Title)`
  color: ${p => p.theme.colors.main};
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
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 240px;
  height: 100%;
  padding: 32px;
  font-size: 24px;
  font-weight: 700;
  border-radius: 16px;
  border: 2px solid ${p => p.theme.colors.main};
  color: ${p => p.theme.colors.main};

  transition: color 300ms ease-in, background-color 300ms ease-in;

  :hover {
    color: white;
    background-color: ${p => p.theme.colors.main};
  }
`;
