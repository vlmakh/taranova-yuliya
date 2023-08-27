import { AchWrap } from "./Achievments.styled";
import {
  CertTitle,
  CertList,
  CertItem, ImgStyled
} from "@/components/Certificates/Certificates.styled";
import Image from "next/image";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { useTranslation } from "next-i18next";
import Modal from "@/components/Modal/Modal";
import { useState } from "react";
import { achievements } from "@/images";
import { Box } from "@/components/Box/Box";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const Achievments = ({ lang }) => {
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
      <AchWrap>
        <CertTitle lang={lang}>{t("achieve.title")}</CertTitle>

        <CertList>
          {achievements.map((achieve, idx) => (
            <CertItem key={idx}>
              <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true}>
                <Image
                  src={achieve.path}
                  alt={achieve.alt}
                  width={achieve.width}
                  onClick={() => onImageClick(idx)}
                />
              </AnimationOnScroll>
            </CertItem>
          ))}
        </CertList>
      </AchWrap>

      {showModal && (
        <Modal onClose={toggleModal}>
          <Slider {...settings}>
            {achievements.map((achieve) => (
              <Box display="flex" key={achieve.path}>
                <ImgStyled src={achieve.path} alt={achieve.alt} />
              </Box>
            ))}
          </Slider>
        </Modal>
      )}
    </>
  );
};
