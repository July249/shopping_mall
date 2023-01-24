// import mypage_dropdown from "../../../assets/icons/mypage_dropdown.png";
import { DropDownBox, DropDownMenuBtn } from "./MyPageDropDownStyle";

const MyPageDropDown = () => {
  return (
    <DropDownBox>
      <DropDownMenuBtn type="button">마이페이지</DropDownMenuBtn>
      <DropDownMenuBtn type="button">로그아웃</DropDownMenuBtn>
    </DropDownBox>
  );
};

export default MyPageDropDown;
