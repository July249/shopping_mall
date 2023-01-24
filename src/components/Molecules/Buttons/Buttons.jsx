import {
  CustomSizeBtnStyle,
  MSIconBtnStyle,
  MSBtnStyle,
  TabBtnStyle,
  TabMenuBtnStyle,
  MSIcon,
  NoticeCounter,
} from "./ButtonsStyle";
import ProductUploadImg from "../../../assets/icons/icon-plus.png";

const LargeBtnMain = ({ type, children }) => {
  return (
    <CustomSizeBtnStyle type={type} size="lr" bgClr="main">
      {children}
    </CustomSizeBtnStyle>
  );
};

const LargeBtnDisabled = ({ type, children }) => {
  return (
    <CustomSizeBtnStyle type={type} size="lr" bgClr="disabled">
      {children}
    </CustomSizeBtnStyle>
  );
};

const MediumBtnMain = ({ type, children }) => {
  return (
    <CustomSizeBtnStyle type={type} size="md" bgClr="main">
      {children}
    </CustomSizeBtnStyle>
  );
};

const MediumBtnDisabled = ({ type, children }) => {
  return (
    <CustomSizeBtnStyle type={type} size="md" bgClr="disabled">
      {children}
    </CustomSizeBtnStyle>
  );
};

const MediumBtnDark = ({ type, children }) => {
  return (
    <CustomSizeBtnStyle type={type} size="md" bgClr="dark">
      {children}
    </CustomSizeBtnStyle>
  );
};

const MediumBtnWhite = ({ type, children }) => {
  return (
    <CustomSizeBtnStyle type={type} size="md" bgClr="white">
      {children}
    </CustomSizeBtnStyle>
  );
};

const SmallBtnMain = ({ type, children }) => {
  return (
    <CustomSizeBtnStyle type={type} size="sm" bgClr="main">
      {children}
    </CustomSizeBtnStyle>
  );
};

const SmallBtnWhite = ({ type, children }) => {
  return (
    <CustomSizeBtnStyle type={type} size="sm" bgClr="white">
      {children}
    </CustomSizeBtnStyle>
  );
};

const MSIconBtn = ({ type }) => {
  return (
    <MSIconBtnStyle type={type}>
      <MSIcon src={ProductUploadImg} alt="" />
      상품 업로드
    </MSIconBtnStyle>
  );
};

const MSBtnMain = ({ type, children }) => {
  return (
    <MSBtnStyle type={type} bgClr="main">
      {children}
    </MSBtnStyle>
  );
};

const MSBtnWhite = ({ type, children }) => {
  return (
    <MSBtnStyle type={type} bgClr="white">
      {children}
    </MSBtnStyle>
  );
};

const TabBtnActive = ({ type, active = true, children }) => {
  return (
    <TabBtnStyle type={type} active={active}>
      {children}
    </TabBtnStyle>
  );
};

const TabBtnDisabled = ({ type, active = false, children }) => {
  return (
    <TabBtnStyle type={type} active={active}>
      {children}
    </TabBtnStyle>
  );
};

const TabMenuBtnActive = ({ type, productCount, news, active = true }) => {
  return (
    <TabMenuBtnStyle
      type={type}
      productCount={productCount}
      news={news}
      active={active}
    >
      {`판매중인 상품(${productCount})`}
      <NoticeCounter>{news}</NoticeCounter>
    </TabMenuBtnStyle>
  );
};

const TabMenuBtnDeactive = ({ type, productCount, news, active = false }) => {
  return (
    <TabMenuBtnStyle
      type={type}
      productCount={productCount}
      news={news}
      active={active}
    >
      {`판매중인 상품(${productCount})`}
      <NoticeCounter>{news}</NoticeCounter>
    </TabMenuBtnStyle>
  );
};

export {
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
};
