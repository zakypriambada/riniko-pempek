// app/components/ProductSection.jsx
import Image from 'next/image';
import Link from 'next/link';
import { PiShoppingCartSimpleBold } from 'react-icons/pi'; // npm install react-icons

// Definisikan data produk di sini agar mudah dikelola
const products = [
    {
        name: 'Pempek Kapal Selam',
        description: 'Pempek legendaris dengan isian telur utuh, digoreng renyah dan disajikan dengan kuah cuko pedas manis yang khas.',
        price: 'Rp 15.000',
        imageUrl: '/assets/kasel.jpg',
        link: '/pesan/kapal-selam'
    },
    {
        name: 'Pempek Lenjer',
        description: 'Bentuknya yang panjang dan padat dengan rasa ikan tenggiri yang kuat. Nikmat disantap sebagai lauk atau camilan.',
        price: 'Rp 15.000',
        imageUrl: '/assets/lenjer.jpg',
        link: '/pesan/lenjer'
    }
];

export default function Produk() {
    return (
        <section id='produk' className="bg-transparant py-16 sm:py-24">
            <div className="container mx-auto px-6 lg:px-8">

                {/* Judul Section */}
                <div className="text-center">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                        Produk Unggulan Kami
                    </h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-300">
                        Dibuat setiap hari dengan bahan-bahan segar pilihan dari Sidoarjo.
                    </p>
                </div>

                {/* Container Kartu Produk - Diubah dari Grid ke Flex */}
                <div className="mt-12 flex flex-wrap justify-center gap-8 lg:gap-12">
                    {products.map((product) => (
                        // Desain Kartu Produk
                        <div
                            key={product.name}
                            className="backdrop-blur-[80px]
        rounded-xl shadow-lg overflow-hidden 
        flex flex-col 
        transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl
        w-full max-w-sm /* <-- Diberi lebar maksimum agar rapi */
      "
                        >
                            {/* Gambar Produk */}
                            <div className="relative w-full h-56">
                                <Image
                                    src={product.imageUrl}
                                    alt={`Foto ${product.name}`}
                                    fill
                                    style={{ objectFit: 'cover' }}
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            </div>

                            {/* Konten Teks Kartu */}
                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-xl font-bold text-white">{product.name}</h3>
                                <p className="mt-2 text-gray-200 flex-grow">{product.description}</p>

                                {/* Harga dan Tombol CTA */}
                                <div className="mt-6 flex justify-between items-center">
                                    <p className="text-xl font-extrabold text-orange-500">{product.price}</p>
                                    <Link
                                        href="https://wa.me/6281336572790" target="_blank"
                                        className="inline-flex items-center gap-2 px-5 py-2.5 font-semibold text-white bg-orange-500 rounded-full hover:bg-white hover:text-orange-500 transition-colors shadow-md"
                                    >
                                        {/* ... ikon dan teks tombol tidak berubah ... */}
                                        <PiShoppingCartSimpleBold size={20} />
                                        Pesan
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}