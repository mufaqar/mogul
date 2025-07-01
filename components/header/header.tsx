'use client';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navItems = [
        { label: 'Tenants', href: '/', highlight: false },
        { label: 'Rentals', href: '/', highlight: true },
        { label: 'Landlords', href: '/', highlight: false },
    ];

    return (

        <header className="bg-black text-white  ">
            <section className='container mx-auto px-4 max-w-[1308px]'>
                <div className=' py-4 flex justify-between items-center relative z-50'>
                    <div className="">
                        <Image
                            src="/images/logo.png"
                            width={500}
                            height={500}
                            alt="Picture of the author"
                            className='w-40'
                        />
                    </div>

                    {/* Desktop Menu */}
                    <nav className="hidden md:flex gap-6 items-center">
                        {navItems.map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                className={`text-md font-semibold hover:underline hover:text-yellow-400 
                            }`}
                            >
                                {item.label}
                            </Link>
                        ))}
                        <Link href="/" className="bg-yellow-400 text-black text-md font-bold px-6 py-3 rounded">
                            SIGN UP
                        </Link>
                        <Link href="/" className="text-md hover:underline">
                            Sign In
                        </Link>
                    </nav>

                    {/* Mobile Menu Toggle */}
                    <Link href='/'
                        className="md:hidden"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle Menu"
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </Link>

                    {/* Mobile Dropdown Menu */}
                    {mobileMenuOpen && (
                        <div className="absolute top-full left-0 w-full bg-black text-white flex flex-col items-start p-4 gap-4 md:hidden">
                            {navItems.map((item) => (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    className={`text-sm font-semibold ${item.highlight ? 'text-yellow-400' : 'text-white'
                                        }`}
                                >
                                    {item.label}
                                </Link>
                            ))}
                            <Link href="/" className="bg-yellow-400 text-black text-sm font-bold px-4 py-2 rounded w-full text-center">
                                SIGN UP
                            </Link>
                            <Link href="/" className="text-sm">
                                Sign In
                            </Link>
                        </div>
                    )}
                </div>
            </section>
        </header>

    );
}
