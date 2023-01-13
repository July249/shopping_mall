import { LogoImg } from "./LogoStyle";
import Hodu from "../../../assets/icons/Logo-hodu.png";

const Logo = ({ size }) => {
  return <LogoImg size={size} src={Hodu} alt="호두 메인 로고" />;
};

export default Logo;
