'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

const HamburgerIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="3" y1="12" x2="21" y2="12"></line>
        <line x1="3" y1="6" x2="21" y2="6"></line>
        <line x1="3" y1="18" x2="21" y2="18"></line>
    </svg>
);

const CloseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
);

export default function Navbar() {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [showNavbar, setShowNavbar] = useState(true);
    const lastScrollY = useRef(0);

    const navLinks = [
        { href: '/', label: 'Beranda' },
        { href: '/about', label: 'About' },
        { href: '/lokasi', label: 'Lokasi' },
    ];

    // Effect untuk menampilkan/menyembunyikan navbar saat scroll
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            setShowNavbar(currentScrollY < lastScrollY.current || currentScrollY < 100);
            lastScrollY.current = currentScrollY;
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Effect untuk mengunci scroll body saat sidebar terbuka
    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
        return () => { document.body.style.overflow = 'auto'; };
    }, [isMenuOpen]);

    return (
        <>
            <nav
                className={`
                    fixed top-0 left-0 w-full z-50 text-white
                    transition-transform duration-300 ease-in-out
                    shadow-md backdrop-blur-lg
                    ${showNavbar ? 'translate-y-0' : '-translate-y-full'}
                `}
            >
                <div className="container mx-auto flex justify-between items-center p-4 md:pl-[150px]">
                    <a href="/">
                        <img className="rounded-full" src="/assets/logo-pempek.png" width={60} alt="Logo Pempek" />
                    </a>
                    <ul className="hidden md:flex space-x-8 md:pr-[150px]">
                        {navLinks.map((link) => (
                            <li key={link.label}>
                                <Link href={link.href} className={`relative group transition-colors pb-1 ${pathname === link.href ? 'font-bold' : 'hover:text-white'}`}>
                                    {link.label}
                                    <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-white transition-transform duration-300 ease-out origin-left ${pathname === link.href ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div className="md:hidden">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu" className="z-50 relative">
                            {isMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
                        </button>
                    </div>
                </div>
            </nav>

            {isMenuOpen && (
                <div
                    onClick={() => setIsMenuOpen(false)}
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
                    aria-hidden="true"
                ></div>
            )}

            {/* 2. Sidebar Menu */}
            <div
                className={`
                    fixed top-0 right-0 h-full w-2/4 max-w-sm bg-orange-500/20 shadow-2xl backdrop-blur-xl z-50
                    transition-transform duration-300 ease-in-out
                    flex flex-col p-8 pt-28 md:hidden
                    ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
                `}
            >
                <ul className="flex flex-col items-start space-y-8">
                    {navLinks.map((link) => (
                        <li className='rounded-[20px] p-2 text-center' key={link.label}>
                            <Link
                                href={link.href}
                                className="text-white text-3xl font-semibold"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}