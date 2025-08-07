
import Link from 'next/link';
import { PiCookingPot, PiReceipt } from 'react-icons/pi';

export default function Hero() {
    return (
        // PERBAIKAN: Menggunakan flex untuk menengahkan konten di dalam container setinggi layar
        <section className="h-screen flex items-center justify-center">
            <div className="container mx-auto px-6 text-center">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white">
                        Kelezatan Otentik <span className="text-orange-500">Riniko Pempek</span>
                    </h1>
                    <p className="mt-4 text-lg md:text-xl text-gray-300">
                        Dibuat dari ikan tenggiri segar pilihan dan resep cuko warisan keluarga yang menggugah selera. Rasakan sensasi gurih dan pedas yang pas di setiap gigitan.
                    </p>
                    
                    <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                        {/* PERBAIKAN: Menambahkan rel="noopener noreferrer" pada target="_blank" untuk keamanan */}
                        <Link 
                            href="https://wa.me/6281336572790" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="inline-flex items-center justify-center gap-2 px-8 py-3 font-semibold text-white bg-orange-500 rounded-full shadow-lg hover:bg-white hover:text-orange-500 transition-colors duration-300 transform hover:scale-105"
                        >
                            <PiCookingPot size={22} />
                            Pesan Sekarang
                        </Link>
                        {/* PERBAIKAN: Menyederhanakan hover effect */}
                        <Link 
                            href="/#produk"
                            className="inline-flex items-center justify-center gap-2 px-8 py-3 font-semibold text-white bg-transparent border-2 border-white rounded-full hover:bg-white/20 transition-colors duration-300"
                        >
                            <PiReceipt size={22} />
                            Lihat Menu
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}