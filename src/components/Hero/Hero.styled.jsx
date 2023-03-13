import styled from "@emotion/styled";
import { hero, hero480 } from "@/images";
import { fadeIn } from "@/utils/keyframes";

export const HeroWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;

  background-color: ${(p) => p.theme.colors.main};
  font-size: 40px;

  @media (max-width: 480px) {
    background-image: linear-gradient(
        180deg,
        rgba(18, 20, 29, 0.5),
        rgba(18, 20, 29, 0.5)
      ),
      url(${hero480.src});
  }

  @media (min-width: 481px) {
    background-image: linear-gradient(
        180deg,
        rgba(18, 20, 29, 0.5),
        rgba(18, 20, 29, 0.5)
      ),
      url(${hero.src});
  }
`;

export const Name = styled.h1`
  font-size: ${(p) => p.theme.fontSizes.xl};
  color: ${(p) => p.theme.colors.accent};
  text-align: center;
  opacity: 0;

  animation: ${fadeIn} 0.3s ease-in 0.3s forwards;

  @media (max-width: 480px) {
    font-size: 48px;
  }
`;

export const Trainer = styled.p`
  font-size: ${(p) => p.theme.fontSizes.l};
  font-weight: 700;
  color: ${(p) => p.theme.colors.accent};
  text-align: center;
  opacity: 0;

  animation: ${fadeIn} 0.3s ease-in 0.6s forwards;

  @media (max-width: 480px) {
    font-size: ${(p) => p.theme.fontSizes.m};
  }
`;

export const Tagline = styled.h2`
  font-size: ${(p) => p.theme.fontSizes.xl};
  font-weight: 500;
  font-family: ${(p) => p.theme.fonts.logo};
  color: #ffffff;
  text-align: center;
  opacity: 0;

  animation: ${fadeIn} 0.3s ease-in 0.9s forwards;

  @media (max-width: 480px) {
    font-size: 48px;
  }
`;
