import Image from "next/image";
import logo from "../../../public/logo.svg";

const Spinner = () => {
  return <Image src={logo} alt="logo" className="w-12 h-12 animate-spin" />;
};

export default Spinner;
