import { rundark, marathon23jun, jailbreak23 } from "@/images";
import { AchWrap } from "./Achievments.styled";
import { CertTitle, CertList, CertItem } from "@/components/Certificates/Certificates.styled";
import Image from "next/image";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { useTranslation } from "next-i18next";

export const Achievments = ({lang}) => {
  const { t } = useTranslation("common");

  return (
    <AchWrap>
      <CertTitle lang={lang}>{t('achieve.title')}</CertTitle>

      <CertList>        
         <CertItem>
          <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true}>
            <Image src={rundark} alt="Run in the dark" width="300" />
          </AnimationOnScroll>
        </CertItem>

         <CertItem>
          <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true}>
            <Image src={marathon23jun} alt="Run in the dark" width="400" />
          </AnimationOnScroll>
        </CertItem>    
        
         <CertItem>
          <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true}>
            <Image src={jailbreak23} alt="Jailbreak 2023" width="300" />
          </AnimationOnScroll>
        </CertItem>  
      </CertList>
      
    </AchWrap>
  );
};
