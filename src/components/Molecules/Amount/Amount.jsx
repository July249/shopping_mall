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

  return (
    <AmountBox>
      <MinusBtn aria-label="minus" onClick={() => setQuantity(quantity - 1)}>
        <BtnImg src={MinusLineImg} alt="Minus" />
      </MinusBtn>
      <AmountCounter>{quantity}</AmountCounter>
      <PlusBtn aria-label="plus" onClick={() => setQuantity(quantity + 1)}>
        <BtnImg src={PlusLineImg} alt="Plus" />
      </PlusBtn>
    </AmountBox>
  );
};

export default Amount;
