// src/components/Footer.tsx
import React from 'react';
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';
// Tidak perlu import './Footer.css' jika sepenuhnya menggunakan Tailwind

const Footer: React.FC = () => {
    return (
        <footer className=" text-white pt-[20px] font-sans relative backdrop-blur-[80px]">
            <div className="max-w-7xl mx-auto flex flex-wrap justify-around pb-8 border-b border-[#8B0000]">
                {/* Bagian Kiri: Logo dan Tagline */}
                <div className="flex flex-col items-start text-left flex-1 min-w-[280px] m-5 lg:items-start md:items-center md:text-center">
                    {/* Ganti '/path/to/your/logo.png' dengan path logo Anda */}
                    <img src="/assets/logo-pempek.png" alt="Pempek Farina Logo" className="w-[100px] h-auto mb-4 rounded-full" />
                    <p className="mb-1 text-base">Pempek Jajanan</p>
                    <p className="text-base">Favorit Bunda Indonesia</p>
                </div>

                <div className="flex flex-col flex-1 min-w-[280px] m-5 lg:items-start md:items-center md:text-center">
                    <h3 className="text-white text-lg font-bold mb-5">KONTAK</h3>
                    <p className="mb-2 text-base">+62 813-3657-2790 (WA)</p>
                    <p className="mb-2 text-base">pempekriniko@gmail.com</p>
                    <div className="flex gap-4 mt-5 md:justify-center">
                        {/* Instagram */}
                        <a href="https://www.instagram.com/riniko_pempek/" target="_blank" rel="noopener noreferrer"
                            className="flex justify-center items-center w-10 h-10 rounded-full border border-white text-white text-xl hover:bg-white hover:text-[#212121] transition-colors duration-300">
                            <FaInstagram />
                        </a>

                        {/* WhatsApp */}
                        <a href="https://wa.me/6281336572790" target="_blank" rel="noopener noreferrer"
                            className="flex justify-center items-center w-10 h-10 rounded-full border border-white text-white text-xl hover:bg-white hover:text-[#212121] transition-colors duration-300">
                            <FaWhatsapp />
                        </a>
                    </div>
                </div>

                {/* Bagian Kanan: Kantor Pusat */}
                <div className="flex flex-col  min-w-[280px] m-5 lg:items-start md:items-center md:text-center">
                    <h3 className="text-white text-lg font-bold mb-5">ALAMAT</h3>
                    <p className="mb-2 text-base leading-relaxed">Perumahan Griyo Wage Asri 1 Blok E-21, Wage, Taman,</p>
                    <p className="mb-2 text-base leading-relaxed">Sidoarjo, Jawa Timur, Indonesia</p>
                    <a href="/lokasi" rel="noopener noreferrer"
                        className="text-orange-500 font-bold mt-4 inline-block hover:text-yellow-300 transition-colors duration-300">
                        View Map
                    </a>
                </div>
            </div>

            {/* Bagian Paling Bawah: Hak Cipta */}
            <div className="bg-orange-500 py-4 text-center text-sm">
                <p>Copyright by Riniko Pempek 2018</p>
            </div>

        </footer>
    );
};

export default Footer;