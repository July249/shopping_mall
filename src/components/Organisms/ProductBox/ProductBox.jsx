import { useState } from "react";
// Temporary image source
import TempImg from "../../../assets/images/product-thumbnail.png";
import { SmallBtnMain, SmallBtnWhite } from "../../Molecules/Buttons/Buttons";
import {
  ProductContentListForSeller,
  ProductInfoForSeller,
  ProductInfoImgForSeller,
  ProductTextBoxForSeller,
  ProductTitleForSeller,
  ProductStockQuantity,
  ProductSalePriceForSeller,
  ProductEditButtonContainer,
  ProductDeleteButtonContainer,
} from "./ProductBoxStyle";

const ProductBox = () => {
  const [stock, setStock] = useState(370);
  return (
    <ProductContentListForSeller>
      <ProductInfoForSeller>
        <ProductInfoImgForSeller size="xs" src={TempImg} />
        <ProductTextBoxForSeller>
          <ProductTitleForSeller>딥러닝 개발자 무릎 담요</ProductTitleForSeller>
          <ProductStockQuantity>재고 : {stock}개</ProductStockQuantity>
        </ProductTextBoxForSeller>
      </ProductInfoForSeller>
      <ProductSalePriceForSeller size="sm" price="17500" />
      <ProductEditButtonContainer>
        <SmallBtnMain type="button">수정</SmallBtnMain>
      </ProductEditButtonContainer>
      <ProductDeleteButtonContainer>
        <SmallBtnWhite type="button">삭제</SmallBtnWhite>
      </ProductDeleteButtonContainer>
    </ProductContentListForSeller>
  );
};

export default ProductBox;
