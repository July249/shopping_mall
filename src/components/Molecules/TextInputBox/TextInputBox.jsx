import { useState, useRef } from "react";
import {
  InputBox,
  InputLabel,
  InputArea,
  TextLimitCounter,
} from "./TextInputBoxStyle";

const TextInputBox = ({ id, text, type, placeholder, maxLength }) => {
  const inputRef = useRef(null);
  const [countTxt, setCountTxt] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [validCheck, setValidCheck] = useState(false);

  const handleCountTxt = (value) => {
    if (value.length <= 50) {
      setCountTxt(value.length);
    }
  };

  const handleInputBorderColorControl = (value) => {
    // console.log(value);
    if (value.length > 1 && validCheck) {
      // console.log(inputRef);
      // inputRef.current.target.style.borderBottom = "var(--main-color)";
    } else {
      // inputRef.current.target.style.borderBottom = "var(--warning-color)";
    }
  };

  return (
    <InputBox>
      <InputLabel htmlFor={id} text={text} />
      <InputArea
        id={id}
        type={type}
        placeholder={placeholder}
        ref={inputRef}
        maxLength={maxLength}
        onChange={(e) => {
          setInputValue(e.target.value);
          handleCountTxt(e.target.value);
          handleInputBorderColorControl(e.target.value);
        }}
      />
      <TextLimitCounter id={id}>{`${countTxt}/50`}</TextLimitCounter>
    </InputBox>
  );
};

export default TextInputBox;
