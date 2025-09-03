import { PiClock, PiMapPin, PiPhone } from 'react-icons/pi';
import Link from 'next/link';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Lokasi() {
    // === GANTI DI SINI ===
    const lat = -7.364519;            // latitude lokasimu
    const lng = 112.713369;           // longitude lokasimu
    const placeLabel = 'Pempek Riniko Sidoarjo'; // teks label opsional
    const zoom = 17;

    // URL untuk tombol "Buka di Google Maps"
    const mapsOpenUrl = `https://www.google.com/maps?q=${lat},${lng}(${encodeURIComponent(placeLabel)})`;

    // URL untuk iframe embed (pakai koordinat)
    // "loc:" memastikan pin tepat di koordinat
    const mapsEmbedUrl = `https://www.google.com/maps?q=loc:${lat},${lng}&z=${zoom}&output=embed`;

    return (
        <>
            <Navbar />
            <section className="mt-[120px] py-20 px-4">
                <div className="max-w-6xl mx-auto p-8 sm:p-10 rounded-2xl shadow-xl backdrop-blur-[80px]">
                    {/* Judul Section */}
                    <div className="text-center mb-12">
                        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
                            Alamat Kami
                        </h1>
                        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-200">
                            Kami siap menyajikan pempek terbaik untuk Anda langsung di tempat.
                        </p>
                    </div>

                    {/* Konten detail dan peta */}
                    <div className="flex flex-col lg:flex-row gap-12 lg:gap-8">
                        {/* Kolom Kiri: Informasi Detail */}
                        <div className="lg:w-1/3">
                            <h2 className="text-2xl font-bold text-orange-500 mb-4">Pempek Riniko Sidoarjo</h2>
                            <address className="not-italic space-y-4 text-white">
                                <div className="flex items-start gap-3">
                                    <PiMapPin size={24} className="text-orange-500 mt-1 flex-shrink-0" />
                                    <span>Perumahan Griyo Wage Asri 1 Blok E-21, Wage, Taman, Sidoarjo, Jawa Timur, Indonesia</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <PiPhone size={24} className="text-orange-500 flex-shrink-0" />
                                    <a href="tel:+628113497718" className="hover:text-orange-400">+62 813-3657-2790</a>
                                </div>
                            </address>

                            <Link
                                href={mapsOpenUrl} // ganti link tombol ke koordinatmu
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-8 inline-block w-full text-center px-8 py-3 font-semibold text-white bg-orange-500 rounded-full shadow-lg hover:bg-white hover:text-orange-500 transition-colors"
                            >
                                Buka di Google Maps
                            </Link>
                        </div>

                        {/* Kolom Kanan: Peta */}
                        <div className="lg:w-2/3 h-80 lg:h-auto rounded-xl overflow-hidden">
                            <iframe
                                src={mapsEmbedUrl} // ganti iframe ke koordinatmu
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Lokasi Toko"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Tombol WhatsApp */}
            <a
                href="https://wa.me/6281336572790"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-8 right-8 w-[60px] h-[60px] bg-[#25d366] text-white rounded-full flex justify-center items-center text-3xl shadow-lg z-[1000] hover:scale-105 transition-transform duration-300"
            >
                <img src="/assets/whatsapp.svg" alt="WhatsApp" className="w-[60px] h-[60px]" />
            </a>

            <Footer />
        </>
    );
}
