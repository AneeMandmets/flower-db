'use client'
import { useRouter } from 'next/navigation';
import { Alumni_Sans } from "next/font/google";

const font = Alumni_Sans({
    weight: ['400', '700'],
    variable: '--font-alumni-sans',
    subsets: ['latin'],
});

export default function Header() {
    const router = useRouter();
    
    return (
        <div className="flex h-16 w-full flex-row justify-center items-center p-4">
            <h1 className={`${font.variable} font-bold text-4xl`} onClick={() => router.push('/')}>Lillede Andmebaas</h1>
        </div>
    )
}