import styled from "@emotion/styled";
import { keyframes } from "@emotion/css";
import { hero } from "@/images";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

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

  background-image: linear-gradient(
      180deg,
      rgba(18, 20, 29, 0.5),
      rgba(18, 20, 29, 0.5)
    ),
    url(${hero.src});
`;

export const Name = styled.h1`
  font-size: ${(p) => p.theme.fontSizes.xl};
  color: ${(p) => p.theme.colors.accent};
  text-align: center;

  animation: ${fadeIn} 0.5s ease-in;
`;

export const Trainer = styled.p`
  font-size: ${(p) => p.theme.fontSizes.l};
  font-weight: 700;
  color: ${(p) => p.theme.colors.accent};
  text-align: center;

  animation: ${fadeIn} 1s ease-in;
`;

export const Tagline = styled.h2`
  font-size: ${(p) => p.theme.fontSizes.xl};
  font-weight: 500;
  color: #ffffff;
  text-align: center;

  animation: ${fadeIn} 1.5s ease-in;
`;
