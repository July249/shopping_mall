import CheckBox from "../../Molecules/CheckBox/CheckBox";
import Amount from "../../Molecules/Amount/Amount";
import { SmallBtnMain } from "../../Molecules/Buttons/Buttons";
import {
  CartProductContentBox,
  CartProductInfoBox,
  CartProductContentList,
  CartProductImg,
  CartProductCompany,
  CartProductTitle,
  CartProductPrice,
  CartProductDeliveryOption,
  CartProductPurchaseQuantity,
  CartProductPurchaseBox,
  CartProductSalePrice,
  CartProductDeleteBtn,
} from "./CartProductListStyle";

const CartProductList = () => {
  return (
    <CartProductContentList>
      <CheckBox />
      <CartProductContentBox>
        <CartProductImg size="md" />
        <CartProductInfoBox>
          <CartProductCompany>백엔드글로벌</CartProductCompany>
          <CartProductTitle>딥러닝 개발자 무릎 담요</CartProductTitle>
          <CartProductPrice size="xs" price="17500" isEmphasized={false} />
          <CartProductDeliveryOption>택배배송 / 무료배송</CartProductDeliveryOption>
        </CartProductInfoBox>
      </CartProductContentBox>
      <CartProductPurchaseQuantity>
        <Amount />
      </CartProductPurchaseQuantity>
      <CartProductPurchaseBox>
        <CartProductSalePrice size="sm" price="17500" isEmphasized={true} />
        <SmallBtnMain type="button">주문하기</SmallBtnMain>
      </CartProductPurchaseBox>
      <CartProductDeleteBtn />
    </CartProductContentList>
  );
};

export default CartProductList;
