import { rundark } from "@/images";
import { CertWrap, CertTitle, Certs } from "./Certificates.styled";
import Image from "next/image";
import { AnimationOnScroll } from "react-animation-on-scroll";

export const Certificates = () => {
  return (
    <CertWrap id="certificates">
      <CertTitle>Certificates</CertTitle>

      <Certs>
        <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true}>
          <Image src={rundark} alt="Run int the dark" width="300" />
        </AnimationOnScroll>        
      </Certs>
    </CertWrap>
  );
};
