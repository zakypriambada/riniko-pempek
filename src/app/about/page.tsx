import Footer from "../components/Footer";
import Navbar from "../components/Navbar";


export default function About() {
    return (
        <div>
            <Navbar />
            <section className="w-full py-20 mt-[120px] p-8">
                <div
                    className=" max-w-4xl mx-auto p-8 rounded-2xl bg-black/20 backdrop-blur-[80px] shadow-xl"
                >
                    <div className="flex flex-col items-center gap-6">
                        <h2
                            className="text-2xl sm:text-3xl font-bold text-white px-8 py-2 text-center"
                        >
                            Pempek merupakan salah satu kekayaan kuliner tradisional Indonesia yang saat ini sudah bisa dinikmati di seluruh pelosok negeri ini.
                        </h2>
                        <div className="text-gray-200 text-base md:text-lg leading-relaxed text-justify space-y-4">
                            <p>
                                Pempek Farina melakukan pemilihan kualitas bahan baku serta teknik pengolahan yang tepat agar pempek kami memiliki cita rasa khas yang digemari masyarakat luas.
                            </p>
                            <p>
                                Sekarang di bawah PT. Primaboga Nusantara Inti, Pempek Farina menerapkan sistem manajemen mutu (Quality System) untuk memberikan produk-produk yang terbaik, yakni makanan yang sehat, bergizi, dan layak dikonsumsi oleh masyarakat Indonesia.
                            </p>
                            <p>
                                Dengan memiliki visi & misi yang kuat, PT. Primaboga Nusantara Inti ingin membawa Pempek Farina menjadi makanan tradisional kebanggaan bangsa Indonesia.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-transparent  py-16 sm:py-24">
                <div className="container mx-auto px-6 lg:px-8">
                    {/* Layout untuk menampung kedua kartu */}
                    <div className="flex flex-col lg:flex-row items-stretch justify-center gap-16 lg:gap-8">

                        {/* --- KARTU VISI --- */}
                        <div className="relative backdrop-blur-[80px] rounded-2xl shadow-xl p-8 pt-14 flex-1">
                            <div className=" absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-orange-500 text-white px-8 py-2 rounded-lg shadow-md">
                                <h3 className="text-xl font-bold uppercase tracking-wider">VISI</h3>
                            </div>
                            <div className="text-white space-y-4">
                                <p className="text-base leading-relaxed">
                                    Menjadikan PT. Primaboga Nusantara Inti sebagai perusahaan kuliner terkemuka di Indonesia yang mampu menjawab kebutuhan masyarakat dengan produk yang inovatif, bermutu tinggi serta pelayanan prima.
                                </p>
                            </div>
                        </div>

                        {/* --- KARTU MISI --- */}
                        <div className="relative backdrop-blur-[80px] rounded-2xl shadow-xl p-8 pt-14 flex-1">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-orange-500 text-white px-8 py-2 rounded-lg shadow-md">
                                <h3 className="text-xl font-bold uppercase tracking-wider">MISI</h3>
                            </div>
                            <div className="text-white space-y-4">
                                <div>
                                    <p className="mb-4 text-base leading-relaxed">
                                        PT. Primaboga Nusantara Inti memfokuskan diri pada 5 lini kerja utama:
                                    </p>
                                    <ol className="list-decimal list-inside space-y-2 text-base leading-relaxed">
                                        <li>Pengembangan outlet ke seluruh wilayah Indonesia.</li>
                                        <li>Mengembangkan bisnis untuk pertumbuhan sales melalui Omni Channel.</li>
                                        <li>Menghasilkan produk yang inovatif dan berkualitas melalui team R&D yang berkompeten.</li>
                                        <li>Membangun SDM yang berkompeten dan berintegritas.</li>
                                    </ol>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section className="w-full py-20 p-8">
                <div
                    className=" max-w-4xl mx-auto p-8 rounded-2xl bg-black/20 backdrop-blur-[80px] shadow-xl"
                >
                    <div className="flex flex-col items-center gap-6">
                        <img src="/assets/logo-pempek.png" alt="Pempek Farina Logo" className="w-[150px] h-auto mb-4 rounded-full" />
                        <div className="text-gray-200 text-base md:text-lg leading-relaxed text-justify space-y-4">
                            <p>
                                Pempek Farina adalah merek dan restoran pempek asli palembang dari surabaya. Kami selalu menerapkan sistem manajemen mutu (Quality System) untuk memberikan produk-produk yang terbaik, yakni makanan yang sehat, bergizi, dan layak dikonsumsi oleh masyarakat Indonesia.
                                Di bawah naungan PT. Primaboga Nusantara Inti. Pempek farina memiliki banyak cabang di berbagai kota terdekat dan semuanya masih dikelola sendiri oleh keluarga pendiri perusahaan.
                                Pempek merupakan salah satu kekayaan kuliner tradisional Indonesia yang saat ini sudah bisa dinikmati di seluruh pelosok negeri ini. Pempek Farina menjual pempek kapal selam, pempek lenjer, pempek kulit, pempek crispy, pempek otak-otak, pempek tahu, pempek adaan, pempek keriting, pempek lenggang, batagor, serta baso tekwan.
                            </p>
                        </div>

                    </div>
                </div>
            </section>
            <a href="https://wa.me/628113497718" target="_blank" rel="noopener noreferrer"
                className="fixed bottom-8 right-8 w-[60px] h-[60px] bg-[#25d366] text-white rounded-full flex justify-center items-center text-3xl shadow-lg z-[1000]
                          hover:scale-105 transition-transform duration-300">
                <img src="/assets/whatsapp.svg" alt="WhatsApp" className="w-[60] h-[60px]" />
            </a>
            <Footer />
        </div>
    );
}
