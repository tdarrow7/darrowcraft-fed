'use client'
import { usePathname } from 'next/navigation'

export default function ProductPage() {
    return (
        <main>Product Page: {usePathname()}</main>
    );
}
 