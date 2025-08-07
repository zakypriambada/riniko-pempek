import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Produk from "./components/Produk";


export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Produk />
      <a href="https://wa.me/6281336572790" target="_blank" rel="noopener noreferrer"
        className="fixed bottom-8 right-8 w-[60px] h-[60px] bg-[#25d366] text-white rounded-full flex justify-center items-center text-3xl shadow-lg z-[1000]
                          hover:scale-105 transition-transform duration-300">
        <img src="/assets/whatsapp.svg" alt="WhatsApp" className="w-[60] h-[60px]" />
      </a>
      <Footer />
    </div>
  );
}
