import { PriceText } from "./PriceStyle";

const Price = ({ size, price, isEmphasized, addUnit = true }) => {
  return (
    <PriceText size={size} isEmphasized={isEmphasized} addUnit={addUnit}>
      {price}
    </PriceText>
  );
};

export default Price;
