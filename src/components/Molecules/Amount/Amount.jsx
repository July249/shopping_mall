import { useState } from "react";
import {
  AmountBox,
  PlusBtn,
  MinusBtn,
  BtnImg,
  AmountCounter,
} from "./AmountStyle";
import PlusLineImg from "../../../assets/icons/icon-plus-line.png";
import MinusLineImg from "../../../assets/icons/icon-minus-line.png";

const Amount = () => {
  const [quantity, setQuantity] = useState(1);

  const handleAmount = () => {
    setQuantity();
    console.log("hello");
  };
  return (
    <AmountBox>
      <MinusBtn type="button" aria-label="minus" onClick={handleAmount}>
        <BtnImg src={MinusLineImg} alt="Minus" />
      </MinusBtn>
      <AmountCounter>{quantity}</AmountCounter>
      <PlusBtn type="button" aria-label="plus" onClick={handleAmount}>
        <BtnImg src={PlusLineImg} alt="Plus" />
      </PlusBtn>
    </AmountBox>
  );
};

export default Amount;
