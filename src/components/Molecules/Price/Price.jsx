import { PriceText } from "./PriceStyle";

const Price = ({ size, price, isEmphasized }) => {
  return (
    <PriceText size={size} isEmphasized={isEmphasized}>
      {price}
    </PriceText>
  );
};

export default Price;
