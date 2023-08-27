import { CertWrap, CertTitle, CertList, CertItem } from "./Certificates.styled";
import Image from "next/image";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { useTranslation } from "next-i18next";
import Modal from "@/components/Modal/Modal";
import { useState } from "react";
import { certs } from "@/images";

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
          <Image
            src={certs[bigPhotoIdx].path}
            alt={certs[bigPhotoIdx].alt}
            sizes="(max-width: 500px) 100vw"
          />
        </Modal>
      )}
    </>
  );
};
