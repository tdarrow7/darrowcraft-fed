import Image from "next/image";
import { GiMokaPot } from "react-icons/gi";
import Logo from "./Logo";
import Link from "next/link";

export const LogoBox = () => {
  return (
    <Link href="/" title="Homepage">
      <div className="logo-box flex items-center text-sm md:text-base lg:text-2xl">
        <Logo className="fill-green-500 ovrd" width={100} height={100} />
        <strong className="text-green-500">DarrowCraft</strong>
      </div>
    </Link>
  );
};
