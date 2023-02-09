import { useState } from "react";
import { AmountBox, PlusBtn, MinusBtn, BtnImg, AmountCounter } from "./AmountStyle";
import PlusLineImg from "../../../assets/icons/icon-plus-line.png";
import MinusLineImg from "../../../assets/icons/icon-minus-line.png";
import PlusLineDisabledImg from "../../../assets/icons/icon-plus-line-disabled.png";

const Amount = () => {
  const [quantity, setQuantity] = useState(1);
  const [soldOut, setSoldOut] = useState(false);

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
      <PlusBtn type="button" soldOut={soldOut} aria-label="plus" onClick={handleAmount}>
        {soldOut ? <BtnImg src={PlusLineDisabledImg} alt="Disabled" /> : <BtnImg src={PlusLineImg} alt="Plus" />}
      </PlusBtn>
    </AmountBox>
  );
};

export default Amount;
