import { MyPageBtn, MyPageImg } from "./MyPageStyle";
import userIcon from "../../../assets/icons/icon-user.png";

const MyPage = () => {
  return (
    <MyPageBtn>
      <MyPageImg src={userIcon} alt="마이페이지" />
      마이페이지
    </MyPageBtn>
  );
};

export default MyPage;
