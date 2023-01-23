import { useState } from "react";
import { InputBox, InputLabel } from "../TextInputBox/TextInputBoxStyle";
import { NumberInputArea, NumberUnit } from "./NumberInputBoxStyle";

const NumberInputBox = ({ id, text, type, placeholder }) => {
  const [price, setPrice] = useState(0);

  return (
    <InputBox>
      <InputLabel htmlFor={id} text={text} />
      <NumberInputArea
        id={id}
        type={type}
        placeholder={placeholder}
        min="0"
        onChange={(e) => setPrice(e.target.value)}
      />
      <NumberUnit>원</NumberUnit>
    </InputBox>
  );
};

export default NumberInputBox;
