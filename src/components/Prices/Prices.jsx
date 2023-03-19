import { PricesWrap, PricesTitle, List, Item } from "./Prices.styled";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { useTranslation } from "next-i18next";

export const Prices = ({lang}) => {
const { t } = useTranslation("common");

  return (
    <PricesWrap id="prices">
      <PricesTitle lang={lang}>{t('prices.title')}</PricesTitle>
      <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true}>
        <List>
          <Item>{t('prices.30min')}</Item>
          <Item>{t('prices.60min')}</Item>
          <Item>{t('prices.small')}</Item>
          <Item>{t('prices.group')}</Item>
        </List>
      </AnimationOnScroll>
      <h2>{t('prices.free')}</h2>
    </PricesWrap>
  );
};
