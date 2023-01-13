import { Link } from "react-router-dom";
import Logo from "../../Molecules/Logo/Logo";
import { SellerTopBarHeadingOne, SellerTopBarSpan } from "./SellerTopBarStyle";

const SellerTopBar = () => {
  return (
    <SellerTopBarHeadingOne>
      <Link to={"/"}>
        <Logo size="md" />
        <SellerTopBarSpan>판매자 센터</SellerTopBarSpan>
      </Link>
    </SellerTopBarHeadingOne>
  );
};

export default SellerTopBar;
