import { useState, useRef } from "react";
import {
  InputBox,
  InputLabel,
  InputArea,
  ValidationText,
  TextLimitCounter,
} from "./TextInputBoxStyle";

const TextInputBox = ({ id, text, type, placeholder, maxLength }) => {
  const inputRef = useRef(null);
  const [countTxt, setCountTxt] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [validCheck, setValidCheck] = useState(false);
  const [validTxt, setValidTxt] = useState("");

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

  const handleValidationText = (value) => {
    if (value.length > 1 && validCheck) {
      setValidTxt("사용 가능한 아이디입니다.");
    } else if (value.length > 1 && !validCheck) {
      setValidTxt("이미 사용 중인 아이디입니다.");
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
          handleValidationText(e.target.value);
        }}
      />
      <ValidationText id={id} validCheck={validCheck}>
        {validTxt}
      </ValidationText>
      <TextLimitCounter id={id}>{`${countTxt}/50`}</TextLimitCounter>
    </InputBox>
  );
};

export default TextInputBox;
