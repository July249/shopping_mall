import { ProductUploadBtn, ProductUploadImg } from "./ProductUploadStyle";
import shoppingBagIcon from "../../../assets/icons/icon-shopping-bag.png";

const ProductUpload = () => {
  return (
    <ProductUploadBtn>
      <ProductUploadImg src={shoppingBagIcon} alt="상품 업로드" />
      판매자 센터
    </ProductUploadBtn>
  );
};

export default ProductUpload;
