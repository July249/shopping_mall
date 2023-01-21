import { PriceText } from "./PriceStyle";

const Price = ({ size, price }) => {
  return <PriceText size={size}>{price}</PriceText>;
};

export default Price;
