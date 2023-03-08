import { List, Item, ServicesWrap, ServicesTitle } from "./Services.styled";
import { AnimationOnScroll } from "react-animation-on-scroll";

export const Services = () => {
  return (
    <ServicesWrap id="services">
      <ServicesTitle>Services</ServicesTitle>

      <List>
        <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true}>
          <Item> Gym</Item>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true}>
          <Item> Suspension training</Item>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true}>
          <Item> Kettlebell Training</Item>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true}>
          <Item> Stretching</Item>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true}>
          <Item> Aerobic</Item>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true}>
          <Item> Outdoor run</Item>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true}>
          <Item> MSE Training</Item>
        </AnimationOnScroll>
      </List>
    </ServicesWrap>
  );
};
