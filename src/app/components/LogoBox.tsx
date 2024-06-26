import Image from "next/image"
import { GiMokaPot } from "react-icons/gi"
import Logo from "./Logo"

export const LogoBox = () => {
    return (
        <div className="logo-box flex items-center">
            <Logo className="fill-green-500 ovrd" width={100} height={100}/>
            <strong className="text-2xl text-green-500">DarrowCraft</strong>
        </div>
    )
}