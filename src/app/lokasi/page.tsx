
import { PiClock, PiMapPin, PiPhone } from 'react-icons/pi';
import Link from 'next/link';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Lokasi() {
    const googleMapsUrl = "https://maps.app.goo.gl/your-location-link";

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
                                    <span>
                                        Jl. Pahlawan No. 123, Sidoarjo, Jawa Timur 61212
                                    </span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <PiPhone size={24} className="text-orange-500 flex-shrink-0" />
                                    <a href="tel:+628113497718" className="hover:text-orange-400">+62 811-3497-718</a>
                                </div>
                                <div className="flex items-start gap-3">
                                    <PiClock size={24} className="text-orange-500 mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-white">Jam Buka:</h3>
                                        <p>Senin - Minggu: <time>10:00</time> - <time>21:00</time> WIB</p>
                                    </div>
                                </div>
                            </address>

                            <Link
                                href={"MASUKKAN_LINK_SHARE_Maps_DISINI"}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-8 inline-block w-full text-center px-8 py-3 font-semibold text-white bg-orange-500 rounded-full shadow-lg hover:bg-white hover:text-orange-500 transition-colors"
                            >
                                Buka di Google Maps
                            </Link>
                        </div>

                        <div className="lg:w-2/3 h-80 lg:h-auto rounded-xl overflow-hidden">
                            <iframe
                                src={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.282910795415!2d112.71536937402633!3d-7.433807273303648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7e6b014152395%3A0x28666bd5b939deea!2sAlun-Alun%20Sidoarjo!5e0!3m2!1sid!2sid!4v1722956033100!5m2!1sid!2sid"}
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>

                    </div>
                </div>
            </section>
            <a href="https://wa.me/6281336572790" target="_blank" rel="noopener noreferrer"
                className="fixed bottom-8 right-8 w-[60px] h-[60px] bg-[#25d366] text-white rounded-full flex justify-center items-center text-3xl shadow-lg z-[1000] hover:scale-105 transition-transform duration-300">
                <img src="/assets/whatsapp.svg" alt="WhatsApp" className="w-[60] h-[60px]" />
            </a>
            <Footer />
        </>
    );
}