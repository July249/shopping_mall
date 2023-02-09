import { ProductImgStyle } from "./ProductImgStyle";
// temporary image source
import TempImg from "../../../assets/images/product-thumbnail.png";

const ProductImg = ({ size, src = TempImg }) => {
  return <ProductImgStyle size={size} src={src} alt="상품 이미지" />;
};

export default ProductImg;
