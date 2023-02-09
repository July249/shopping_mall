import { DeleteBtnStyle, DeleteIconStyle } from "./DeleteButtonStyle";
import DeleteIconImg from "../../../assets/icons/icon-delete.png";

const DeleteButton = () => {
  return (
    <DeleteBtnStyle>
      <DeleteIconStyle src={DeleteIconImg} alt="장바구니 리스트 삭제 버튼" />
    </DeleteBtnStyle>
  );
};

export default DeleteButton;
