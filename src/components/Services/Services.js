import {
  List,
  Item,
  Inner,
  ServicesWrap,
  ServicesTitle,
} from "./Services.styled";
import { AnimationOnScroll } from "react-animation-on-scroll";

export const Services = () => {
  return (
    <ServicesWrap id="services">
      <ServicesTitle>Services</ServicesTitle>

      <List>
        <Item>
          <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true}>
            <Inner> Gym</Inner>
          </AnimationOnScroll>
        </Item>
        <Item>
          <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true}>
            <Inner> Suspension</Inner>
          </AnimationOnScroll>
        </Item>
        <Item>
          <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true}>
            <Inner> Kettlebell</Inner>
          </AnimationOnScroll>
        </Item>
        <Item>
          <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true}>
            <Inner> Stretching</Inner>
          </AnimationOnScroll>
        </Item>
        <Item>
          <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true}>
            <Inner> Aerobic</Inner>
          </AnimationOnScroll>
        </Item>
        <Item>
          <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true}>
            <Inner> Outdoor run</Inner>
          </AnimationOnScroll>
        </Item>
        <Item>
          <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true}>
            <Inner> MSE</Inner>
          </AnimationOnScroll>
        </Item>
      </List>
    </ServicesWrap>
  );
};
