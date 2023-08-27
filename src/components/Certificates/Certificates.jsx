import { CertWrap, CertTitle, CertList, CertItem, ImgStyled } from "./Certificates.styled";
import Image from "next/image";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { useTranslation } from "next-i18next";
import Modal from "@/components/Modal/Modal";
import { useState } from "react";
import { certs } from "@/images";
import { Box } from "@/components/Box/Box";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Certificates = ({ lang }) => {
  const { t } = useTranslation("common");
  const [showModal, setShowModal] = useState(false);
  const [bigPhotoIdx, setBigPhotoIdx] = useState(0);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const onImageClick = (idx) => {
    setBigPhotoIdx(idx);
    toggleModal();
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: bigPhotoIdx,
    draggable: true,
  };

  return (
    <>
      <CertWrap id="certificates">
        <CertTitle lang={lang}>{t("cert.title")}</CertTitle>

        <CertList>
          {certs.map((cert, idx) => (
            <CertItem key={idx}>
              <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true}>
                <Image
                  src={cert.path}
                  alt={cert.alt}
                  width={cert.width}
                  onClick={() => onImageClick(idx)}
                />
              </AnimationOnScroll>
            </CertItem>
          ))}
        </CertList>
      </CertWrap>

      {showModal && (
        <Modal onClose={toggleModal}>
          <Slider {...settings}>
            {certs.map((cert) => (
              <Box display="flex" key={cert.path}>
                <ImgStyled
                  src={cert.path}
                  alt={cert.alt}
                />
              </Box>
            ))}
          </Slider>
        </Modal>
      )}
    </>
  );
};
