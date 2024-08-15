import Link from "next/link"
import { primaryNavLinks } from "./navGroup"

export const SecondaryNav = () => {
return (
    <nav>
        <ul className="flex align-middle justify-end">
            {primaryNavLinks.map((link) => {
                return (
                    <li key={link.name}>
                        <Link className="font-normal text-xs p-1 text-green-500 hover:text-green-900 transition-colors" href={link.href} target={link.target}>{link.name}</Link>
                    </li>
                )
            }
            )}
        </ul>
    </nav>
)
}