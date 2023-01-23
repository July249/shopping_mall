import { useState } from "react";
import { CheckBoxButton, CheckBoxImg, CheckInfoText } from "./CheckTextStyle";
import EmptyCheckBox from "../../../assets/icons/check-box.png";
import FilledCheckBox from "../../../assets/icons/check-fill-box.png";

const CheckText = () => {
  const [checked, setChecked] = useState(false);

  const handleChecked = () => {
    setChecked(!checked);
    // console.log(checked);
    // console.log("hello");
  };

  return (
    <>
      <CheckBoxButton type="button" onClick={handleChecked}>
        {checked ? (
          <CheckBoxImg src={FilledCheckBox} alt="" />
        ) : (
          <CheckBoxImg src={EmptyCheckBox} alt="" />
        )}
      </CheckBoxButton>
      <CheckInfoText>
        주문 내용을 확인하였으며, 정보 제공 등에 동의합니다.
      </CheckInfoText>
    </>
  );
};

export default CheckText;
