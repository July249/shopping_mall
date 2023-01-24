import Amount from "../../Molecules/Amount/Amount";
import Price from "../../Molecules/Price/Price";

const CartProductList = () => {
  return (
    <div>
      <Amount />
      <Price size="lr" price="17900" />
      <Price size="md" price="17900" />
      <Price size="sm" price="17900" />
    </div>
  );
};

export default CartProductList;
