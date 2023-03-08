import { List, Item, ServicesWrap, ServicesTitle } from "./Services.styled";

export const Services = () => {
  return (
    <ServicesWrap id="services">
      <ServicesTitle>Services</ServicesTitle>
      <List>
        <Item>Gym</Item>
        <Item>Suspension training</Item>
        <Item>Kettlebell Training</Item>
        <Item>Stretching</Item>
        <Item>Aerobic</Item>
        <Item>Outdoor run</Item>
        <Item>MSE Training</Item>
      </List>
    </ServicesWrap>
  );
};
