import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`;

export const ModalWindow = styled.div`
  max-height: calc(100vh - 24px);
  overflow-y: clip;
  overflow-x: clip;
  width: 100vw;

  @media (min-width: 769px) {
    overflow-x: visible;
    width: 700px;
  }
`;
