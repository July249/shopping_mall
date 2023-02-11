import { useState } from "react";
// Temporary image source
import TempImg from "../../../assets/images/product-thumbnail.png";
import {
  ProductInfoList,
  ProductInfoBox,
  ProductInfoImg,
  ProductTextBox,
  ProductCompany,
  ProductTitle,
  ProductDiscountPrice,
  ProductPurchaseQuantity,
  ProductDeliveryOption,
  ProductSalePrice,
} from "./ProductInfoStyle";

const ProductInfo = () => {
  const [quantity, setQuantity] = useState(1);
  return (
    <ProductInfoList>
      <ProductInfoBox>
        <ProductInfoImg size="sm" src={TempImg} />
        <ProductTextBox>
          <ProductCompany>백엔드글로벌</ProductCompany>
          <ProductTitle>딥러닝 개발자 무릎 담요</ProductTitle>
          <ProductPurchaseQuantity>수량 : {quantity}개</ProductPurchaseQuantity>
        </ProductTextBox>
      </ProductInfoBox>
      <ProductDiscountPrice size="sm" price="-" addUnit={false} />
      <ProductDeliveryOption>무료배송</ProductDeliveryOption>
      <ProductSalePrice size="sm" price="17500" />
    </ProductInfoList>
  );
};

export default ProductInfo;
