import {
  List,
  Item,
  Inner,
  ServicesWrap,
  ServicesTitle,
} from "./Services.styled";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { useTranslation } from "next-i18next";

export const Services = ({lang}) => {
  const { t } = useTranslation("common");

  return (
    <ServicesWrap id="services">
      <ServicesTitle lang={lang}>{t('services.title')}</ServicesTitle>

      <List>
        <Item>
          <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true}>
            <Inner>{t('services.gym')}</Inner>
          </AnimationOnScroll>
        </Item>
        <Item>
          <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true}>
            <Inner>{t('services.suspension')}</Inner>
          </AnimationOnScroll>
        </Item>
        <Item>
          <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true}>
            <Inner> {t('services.kettlebell')}</Inner>
          </AnimationOnScroll>
        </Item>
        <Item>
          <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true}>
            <Inner> {t('services.stretching')}</Inner>
          </AnimationOnScroll>
        </Item>
        <Item>
          <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true}>
            <Inner> {t('services.aerobic')}</Inner>
          </AnimationOnScroll>
        </Item>
        <Item>
          <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true}>
            <Inner> {t('services.run')}</Inner>
          </AnimationOnScroll>
        </Item>
        <Item>
          <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true}>
            <Inner> {t('services.mse')}</Inner>
          </AnimationOnScroll>
        </Item>
      </List>
    </ServicesWrap>
  );
};
