import Image from "next/image";
import Link from "next/link";
import { lexend_zetta } from "@/fonts";
import ConnectButton from "@/components/layout/connect-button";
import logo from "../../../public/logo.svg";

const Header = () => {
  return (
    <div className="p-8 flex flex-row justify-between w-full">
      <Link href="/">
        <div className="flex flex-row items-center">
          <Image src={logo} alt="logo" />
          <div
            className={`${lexend_zetta.variable} font-logo text-neon text-sm font-light pl-2`}
          >
            COSMOSCRAZE
          </div>
        </div>
      </Link>
      <ConnectButton />
    </div>
  );
};

export default Header;
