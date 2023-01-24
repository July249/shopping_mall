// import { useLocation } from "react-router-dom";
import {
  TopBarContainer,
  TopBarSection,
  TopBarMenuUl,
  TopBarMenuLi,
} from "./TopBarStyle";
import Logo from "../../Molecules/Logo/Logo";
import SearchBar from "../../Molecules/SearchBar/SearchBar";
import ShoppingCart from "../../Molecules/ShoppingCart/ShoppingCart";
import MyPage from "../../Molecules/MyPage/MyPage";
import MyPageDropDown from "../../Molecules/MyPageDropDown/MyPageDropDown";
import ProductUpload from "../../Molecules/ProductUpload/ProductUpload";

const TopBar = () => {
  // const location = useLocation();
  const location = "user";

  return (
    <TopBarContainer>
      <TopBarSection>
        <Logo size="lr" />
        <SearchBar />
      </TopBarSection>
      <TopBarMenuUl>
        {location !== "seller" && (
          <TopBarMenuLi>
            <ShoppingCart />
          </TopBarMenuLi>
        )}
        <TopBarMenuLi>
          <MyPage />
          <MyPageDropDown />
        </TopBarMenuLi>
        {location === "seller" && (
          <TopBarMenuLi>
            <ProductUpload />
          </TopBarMenuLi>
        )}
      </TopBarMenuUl>
    </TopBarContainer>
  );
};

export default TopBar;
