import CheckBox from "../../Molecules/CheckBox/CheckBox";
import { TabTitleUl, TabTitleLi, TabTitleParagraph } from "./TabTitleStyle";

const TabTitle = () => {
  return (
    <TabTitleUl>
      <TabTitleLi>
        <CheckBox />
      </TabTitleLi>
      <TabTitleLi>
        <TabTitleParagraph>상품정보</TabTitleParagraph>
      </TabTitleLi>
      <TabTitleLi>
        <TabTitleParagraph>수량</TabTitleParagraph>
      </TabTitleLi>
      <TabTitleLi>
        <TabTitleParagraph>상품금액</TabTitleParagraph>
      </TabTitleLi>
    </TabTitleUl>
  );
};

export default TabTitle;
