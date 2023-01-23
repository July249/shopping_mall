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

  const handleInputBorderWarningColor = (value) => {
    if (value.length > 1 && !validCheck) {
      inputRef.current.style.borderColor = "#EB5757";
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
          handleInputBorderWarningColor(e.target.value);
        }}
      />
      <TextLimitCounter id={id}>{`${countTxt}/50`}</TextLimitCounter>
    </InputBox>
  );
};

export default TextInputBox;
