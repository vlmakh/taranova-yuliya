import { ntc, kettle, cycling, firstaid } from "@/images";
import { CertWrap, CertTitle, CertList, CertItem } from "./Certificates.styled";
import Image from "next/image";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { useTranslation } from "next-i18next";

export const Certificates = ({lang}) => {
  const { t } = useTranslation("common");

  return (
    <CertWrap id="certificates">
      <CertTitle lang={lang}>{t('cert.title')}</CertTitle>

      <CertList>
        <CertItem>
          <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true}>
            <Image src={ntc} alt="NTC" width="400" />
          </AnimationOnScroll>
        </CertItem>
        <CertItem>
          <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true}>
            <Image src={kettle} alt="Kettlebell Training" width="400" />
          </AnimationOnScroll>
        </CertItem>
        <CertItem>
          <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true}>
            <Image src={cycling} alt="Indoor Cycling" width="400" />
          </AnimationOnScroll>
        </CertItem>
        <CertItem>
          <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true}>
            <Image src={firstaid} alt="First Aid" width="300" />
          </AnimationOnScroll>
        </CertItem>
      </CertList>
    </CertWrap>
  );
};
