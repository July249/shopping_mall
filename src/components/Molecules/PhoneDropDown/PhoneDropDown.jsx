import { PhoneDropDownBox, PhoneDropDownList } from "./PhoneDropDownStyle";

const PhoneDropDown = () => {
  const telNumberList = ["010", "011", "016", "017", "018", "019"];
  return (
    <PhoneDropDownBox>
      {telNumberList.map((item, idx) => (
        <PhoneDropDownList key={idx}>{item}</PhoneDropDownList>
      ))}
    </PhoneDropDownBox>
  );
};

export default PhoneDropDown;
