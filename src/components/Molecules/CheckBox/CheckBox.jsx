import { useState } from "react";
import { LabelEl } from "../../Atoms/_Label/LabelEl";
import { CheckBoxInput, CheckBoxIcon } from "./CheckBoxStyle";

const CheckBox = () => {
  const [checked, setChecked] = useState(false);
  return (
    <>
      <LabelEl htmlFor="product-select"></LabelEl>
      <CheckBoxInput
        className="ir"
        id="product-select"
        type="checkbox"
        onChange={() => setChecked(!checked)}
      />
      <CheckBoxIcon />
    </>
  );
};

export default CheckBox;
