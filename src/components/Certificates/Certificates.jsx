import { rundark, ntc } from "@/images";
import { CertWrap, CertTitle, CertList, CertItem } from "./Certificates.styled";
import Image from "next/image";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { width } from "styled-system";

export const Certificates = () => {
  return (
    <CertWrap id="certificates">
      <CertTitle>Certificates</CertTitle>

      <CertList>
        <CertItem>
          <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true}>
            <Image src={ntc} alt="NTC" width="420" />
          </AnimationOnScroll>
        </CertItem>
        <CertItem>
          <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true}>
            <Image src={rundark} alt="Run in the dark" width="300" />
          </AnimationOnScroll>
        </CertItem>
      </CertList>
    </CertWrap>
  );
};
