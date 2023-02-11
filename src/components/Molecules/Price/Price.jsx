import { PriceText } from "./PriceStyle";

const Price = ({ size, price, isEmphasized = false, addUnit = true }) => {
  return (
    <PriceText size={size} isEmphasized={isEmphasized} addUnit={addUnit}>
      {price}
    </PriceText>
  );
};

export default Price;
