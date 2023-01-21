import { useState } from "react";
import {
  CheckBoxIconHollowCircle,
  CheckBoxIconFilledCircle,
} from "./CheckBoxStyle";

const CheckBox = () => {
  const [checked, setChecked] = useState(false);

  const handleChecked = () => {
    setChecked(!checked);
    // console.log(checked);
    // console.log("hello");
  };

  return (
    <CheckBoxIconHollowCircle type="button" onClick={handleChecked}>
      <CheckBoxIconFilledCircle checked={checked} />
    </CheckBoxIconHollowCircle>
  );
};

export default CheckBox;
