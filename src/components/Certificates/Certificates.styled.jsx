import styled from '@emotion/styled';
import { Section, Title } from '../Base/Base';

export const CertWrap = styled(Section)`
  background-color: white;
`;

export const CertTitle = styled(Title)`
  color: ${p => p.theme.colors.main};
`;

export const Certs = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${p => p.theme.space[4]}px;
  margin-top: ${p => p.theme.space[5]}px;
`;
