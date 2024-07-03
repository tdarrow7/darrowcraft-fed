import Image from "next/image";
import { GiMokaPot } from "react-icons/gi";
import Logo from "./Logo";
import Link from "next/link";

export const LogoBox = () => {
  return (
    <Link href="/" title="Homepage">
      <div className="logo-box flex items-center">
        <Logo className="fill-green-500 ovrd" width={100} height={100} />
        <strong className="text-2xl text-green-500">DarrowCraft</strong>
      </div>
    </Link>
  );
};
