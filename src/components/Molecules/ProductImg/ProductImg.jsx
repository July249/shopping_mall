import { ProductImgStyle } from "./ProductImgStyle";
// temporary image source
import TempImg from "../../../assets/images/product-thumbnail.png";

const ProductImg = ({ size, src = TempImg, alt = "상품 이미지" }) => {
  return <ProductImgStyle size={size} src={src} alt={alt} />;
};

export default ProductImg;
