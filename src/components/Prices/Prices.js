import { PricesWrap, PricesTitle, List, Item } from './Prices.styled';

export const Prices = () => {
  return (
    <PricesWrap id="prices">
      <PricesTitle>Prices</PricesTitle>
      <List>
        <Item>30min PR session - 30euro</Item>
        <Item>60min PR session - 50euro</Item>
        <Item>Small group classes - 10euro (5-6 people)</Item>
        <Item>Group classes - 7euro (12-16 people)</Item>
      </List>
      <h2>FIRST TRIAL SESSION FREE</h2>
    </PricesWrap>
  );
};
