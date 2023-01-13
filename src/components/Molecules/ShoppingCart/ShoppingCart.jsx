import { ShoppingCartBtn, ShoppingCartImg } from "./ShoppingCartStyle";
import cartIcon from "../../../assets/images/icon-shopping-cart.svg";

const ShoppingCart = () => {
  return (
    <ShoppingCartBtn>
      <ShoppingCartImg src={cartIcon} alt="장바구니" />
      장바구니
    </ShoppingCartBtn>
  );
};

export default ShoppingCart;
