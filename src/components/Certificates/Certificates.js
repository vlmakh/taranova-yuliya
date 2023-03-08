import { rundark } from "@/images";
import { CertWrap, CertTitle } from "./Certificates.styled";
import { Box } from "@/components/Box/Box";
import Image from "next/image";
import { AnimationOnScroll } from "react-animation-on-scroll";

export const Certificates = () => {
  return (
    <CertWrap id="certificates">
      <CertTitle>Certificates</CertTitle>

      <Box display="flex" justifyContent="center" mt={5}>
        <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true}>
          <Image src={rundark} alt="Run int the dark" width="300" />
        </AnimationOnScroll>
      </Box>
    </CertWrap>
  );
};
