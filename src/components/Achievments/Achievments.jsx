import { AchWrap } from "./Achievments.styled";
import {
  CertTitle,
  CertList,
  CertItem,
} from "@/components/Certificates/Certificates.styled";
import Image from "next/image";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { useTranslation } from "next-i18next";
import Modal from "@/components/Modal/Modal";
import { useState } from "react";
import { achievements } from "@/images";
import { Box } from "@/components/Box/Box";

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
          <Box display="flex">
            <Image
              src={achievements[bigPhotoIdx].path}
              alt={achievements[bigPhotoIdx].alt}
              // sizes="(max-width: 500px) 100vw"
            />
          </Box>
        </Modal>
      )}
    </>
  );
};
