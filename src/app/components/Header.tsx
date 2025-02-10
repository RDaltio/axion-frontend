"use client";

import Link from 'next/link';
import Image from "next/image";
import { usePathname } from 'next/navigation';

const Header: React.FC = () => {
    const pathname = usePathname();

    return (
        <nav className="p-8 bg-[#F9F9F9] shadow-md shadow-gray-500/50">
            <div className='flex justify-between items-center mx-20'>
                <Image
                    src="/imgs/assets/logo.png"
                    alt="Logo Orange"
                    width={210}
                    height={70}
                />
                <div className="text-[#4A4A4A] font-light text-lg">
                    <Link href="/foods" className={`px-4 ${pathname === '/foods' ? 'font-bold' : ''}`}>FOODS</Link>
                    <Link href="/people" className={`px-4 ${pathname === '/people' ? 'font-bold' : ''}`}>PEOPLE</Link>
                    <Link href="/places" className={`px-4 ${pathname === '/places' ? 'font-bold' : ''}`}>PLACES</Link>
                </div>
            </div>
        </nav>
    );
};

export default Header;
