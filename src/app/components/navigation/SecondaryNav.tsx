import Link from "next/link"

const links = [
    { name: 'Home', href: '/', target: ''},
    { name: 'About', href: '/about', target: ''},
    { name: 'Sign In', href: '/sign-in', target: ''},
    { name: 'API', href: 'https://api.timdarrow.com', target: '_blank'},
    { name: 'Taskify', href: '/taskify', target: '_blank'},
]

export const SecondaryNav = () => {
return (
    <nav>
        <ul className="flex align-middle justify-end">
            {links.map((link) => {
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