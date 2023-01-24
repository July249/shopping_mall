import TopBar from "../../components/Organisms/TopBar/TopBar";
import SellerTopBar from "../../components/Organisms/SellerTopBar/SellerTopBar";
import TabTitle from "../../components/Organisms/TabTitle/TabTitle";
import CartProductList from "../../components/Organisms/CartProductList/CartProductList";
import TextInputBox from "../../components/Molecules/TextInputBox/TextInputBox";
import NumberInputBox from "../../components/Molecules/NumberInputBox/NumberInputBox";
import CheckText from "../../components/Molecules/CheckText/CheckText";
import PhoneDropDown from "../../components/Molecules/PhoneDropDown/PhoneDropDown";
import {
  LargeBtnMain,
  LargeBtnDisabled,
  MediumBtnMain,
  MediumBtnDisabled,
  MediumBtnDark,
  MediumBtnWhite,
  SmallBtnMain,
  SmallBtnWhite,
  MSIconBtn,
  MSBtnMain,
  MSBtnWhite,
  TabBtnActive,
  TabBtnDisabled,
  TabMenuBtnActive,
  TabMenuBtnDeactive,
} from "../../components/Molecules/Buttons/Buttons";
// import Card from "../../components/Card/Card";
// import Cart from "../../components/Cart/Cart";
// import FailLoadData from "../../components/Shared/FailLoadData/FailLoadData";

// const ContainerMain = styled.main`
//   display: flex;
//   justify-content: center;
//   margin: 160px auto 0;
//   padding-bottom: 156px;
// `;

// const ContainerProductList = styled.ul`
//   display: flex;
//   flex-wrap: wrap;
//   // grid-template-columns: 1fr 1fr 1fr;
//   gap: 60px;
//   // width: 1260px;
//   flex-basis: 1260px;
//   max-width: 1260px;
//   margin-right: 60px;
// `;

export default function Home({ loadData }) {
  return (
    <>
      <TopBar />
      <br />
      <SellerTopBar />
      <br />
      <TabTitle />
      <br />
      <CartProductList />
      <br />
      <TextInputBox
        id="login_id"
        text="아이디"
        type="text"
        placeholder="아이디"
        maxLength=""
      />
      <br />
      <br />
      <TextInputBox
        id="login_password"
        text="비밀번호"
        type="password"
        placeholder="비밀번호"
        maxLength=""
      />
      <br />
      <br />
      <TextInputBox
        id="register_id"
        text="아이디"
        type="text"
        placeholder="아이디"
        maxLength=""
      />
      <br />
      <br />
      <TextInputBox
        id="productName"
        text="상품명"
        type="text"
        placeholder=""
        maxLength="50"
      />
      <br />
      <br />
      <NumberInputBox
        id="productPrice"
        text="판매가"
        type="number"
        placeholder=""
      />
      <br />
      <br />
      <CheckText />
      <br />
      <br />
      <PhoneDropDown />
      <br />
      <br />
      <LargeBtnMain type="button">버튼</LargeBtnMain>
      <br />
      <br />
      <LargeBtnDisabled type="button">버튼</LargeBtnDisabled>
      <br />
      <br />
      <MediumBtnMain type="button">버튼</MediumBtnMain>
      <br />
      <br />
      <MediumBtnDisabled type="button">버튼</MediumBtnDisabled>
      <br />
      <br />
      <MediumBtnDark type="button">버튼</MediumBtnDark>
      <br />
      <br />
      <MediumBtnWhite type="button">버튼</MediumBtnWhite>
      <br />
      <br />
      <SmallBtnMain type="button">버튼</SmallBtnMain>
      <br />
      <br />
      <SmallBtnWhite type="button">버튼</SmallBtnWhite>
      <br />
      <br />
      <MSIconBtn type="button" />
      <br />
      <br />
      <MSBtnMain type="button">버튼</MSBtnMain>
      <br />
      <br />
      <MSBtnWhite type="button">버튼</MSBtnWhite>
      <br />
      <br />
      <TabBtnActive type="button" active={true}>
        버튼
      </TabBtnActive>
      <br />
      <br />
      <TabBtnDisabled type="button" active={false}>
        버튼
      </TabBtnDisabled>
      <br />
      <br />
      <TabMenuBtnActive type="button" productCount="3" news="1" active={true} />
      <br />
      <br />
      <TabMenuBtnDeactive
        type="button"
        productCount="3"
        news="1"
        active={false}
      />
      <br />
      <br />
      {/* <ContainerMain>
        {loadData !== null ? (
          <>
            <ContainerProductList>
              {loadData.map((item) => (
                <Card key={item.id} {...item} />
              ))}
            </ContainerProductList>
            <Cart />
          </>
        ) : (
          <FailLoadData />
        )}
      </ContainerMain> */}
    </>
  );
}
