'use client'
import { usePathname } from 'next/navigation'
// import { useRouter } from "next/router";

export default function ProductPage() {
    // const router = useRouter();
    return (
        <main>Product Page: {usePathname()}</main>
    );
}
 