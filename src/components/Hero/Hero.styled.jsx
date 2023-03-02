import styled from '@emotion/styled';
import { hero } from '@/images';

export const HeroWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;

  background-color: ${p => p.theme.colors.main};
  font-size: 40px;

  background-image: linear-gradient(
      180deg,
      rgba(18, 20, 29, 0.5),
      rgba(18, 20, 29, 0.5)
    ),
    url(${hero.src});
`;

export const Name = styled.h1`
  font-size: ${p => p.theme.fontSizes.xl};
  color: ${p => p.theme.colors.accent};
  text-align: center;
`;

export const Trainer = styled.p`
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: 700;
  color: ${p => p.theme.colors.accent};
  text-align: center;
`;

export const Tagline = styled.h2`
  font-size: ${p => p.theme.fontSizes.xl};
  font-weight: 500;
  color: #ffffff;
  text-align: center;
`;
