import { List, Item, ServicesWrap, ServicesTitle } from "./Services.styled";
import { AnimationOnScroll } from "react-animation-on-scroll";

export const Services = () => {
  return (
    <ServicesWrap id="services">
      <ServicesTitle>Services</ServicesTitle>
      <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true}>
        <List>
          <Item>Gym</Item>
          <Item>Suspension training</Item>
          <Item>Kettlebell Training</Item>
          <Item>Stretching</Item>
          <Item>Aerobic</Item>
          <Item>Outdoor run</Item>
          <Item>MSE Training</Item>
        </List>
      </AnimationOnScroll>
    </ServicesWrap>
  );
};
