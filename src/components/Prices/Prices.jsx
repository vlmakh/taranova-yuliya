import { PricesWrap, PricesTitle, List, Item } from "./Prices.styled";
import { AnimationOnScroll } from "react-animation-on-scroll";

export const Prices = () => {
  return (
    <PricesWrap id="prices">
      <PricesTitle>Prices</PricesTitle>
      <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true}>
        <List>
          <Item>30min PR session - 30euro</Item>
          <Item>60min PR session - 50euro</Item>
          <Item>Small group classes - 10euro (5-6 people)</Item>
          <Item>Group classes - 7euro (12-16 people)</Item>
        </List>
      </AnimationOnScroll>
      <h2>FIRST TRIAL SESSION FREE</h2>
    </PricesWrap>
  );
};
