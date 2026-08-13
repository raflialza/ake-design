"use client";

import Image from "next/image";
import { useState } from "react";

// --- DATA DUMMY ---
const gallery = [
  {
    id: 1,
    name: "Modern Classic Bedroom",
    price: "20.000.000 IDR",
    dimensions: "3.5 x 3M",
    imageUrl: "/dapur.jpg",
  },
  {
    id: 2,
    name: "Urban Modern Kitchen",
    price: "35.000.000 IDR",
    dimensions: "4 x 2.9M",
    imageUrl:
      "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 3,
    name: "Industrial Living Room",
    price: "30.000.000 IDR",
    dimensions: "4 x 3.9M",
    imageUrl:
      "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80&w=800",
  },
];

const testimonials = [
  {
    id: 1,
    name: "Sarah Wijaya",
    text: '"Sangat puas dengan hasil kerja AKE Design. Desainnya elegan dan pengerjaannya tepat waktu!"',
    photoUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150",
  },
  {
    id: 2,
    name: "Budi Santoso",
    text: '"Ruangan saya jadi terasa lebih luas dan fungsional. Timnya sangat komunikatif dan kooperatif."',
    photoUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150",
  },
];

export default function Home() {
  // State untuk mengontrol buka/tutup menu mobile
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const waNumber = "6281234567890";
  const waMessage = "Halo AKE DESIGN, saya tertarik untuk Free Consult.";
  const waLink = `https://wa.me/${waNumber}?text=${encodeURIComponent(waMessage)}`;

  // Fungsi untuk handle klik menu
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans relative pb-20">
      {/* --- 1. TOP NAVBAR --- */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-sm shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex justify-between items-center relative z-50">
          {/* Logo Area */}
          <div className="flex items-center gap-3">
            <div className="relative w-12 h-12 bg-black rounded-md">
              <Image
                src="/logo.png"
                alt="AKE Design Logo"
                fill
                className="object-contain p-1"
              />
            </div>
            <span className="font-bold text-xl tracking-wide text-black">
              AKE DESIGN
            </span>
          </div>

          {/* Hamburger Icon (Mobile & Tablet) */}
          <button
            className="md:hidden block text-black focus:outline-none p-2 relative z-[60] cursor-pointer"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
            aria-expanded={isMenuOpen}
          >
            <svg
              className="w-8 h-8 pointer-events-none" // Tambahan: Mencegah SVG memblokir klik di HP
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                // Ikon Close (X)
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                // Ikon Hamburger
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Navigation Links (Desktop) */}
          <div className="hidden md:flex gap-8 font-semibold text-sm tracking-widest text-black">
            <a href="#home" className="hover:text-[#F5B041] transition">
              HOME
            </a>
            <a href="#about" className="hover:text-[#F5B041] transition">
              ABOUT
            </a>
            <a href="#testimonials" className="hover:text-[#F5B041] transition">
              TESTIMONIALS
            </a>
            <a href="#gallery" className="hover:text-[#F5B041] transition">
              GALLERY
            </a>
          </div>
        </div>

        {/* Garis Aksen Bawah Header */}
        <div className="flex w-full h-1.5 md:h-2 relative z-50">
          <div className="w-[75%] bg-[#F5B041]"></div>
          <div className="w-[25%] bg-[#C0392B]"></div>
        </div>

        {/* Navigation Links (Mobile Dropdown Menu) */}
        {/* Tambahan: top-full, left-0, dan pointer-events-none agar tidak menutupi tombol saat tertutup */}
        <div
          className={`md:hidden absolute top-full left-0 w-full bg-white shadow-lg transition-all duration-300 ease-in-out origin-top z-40 ${
            isMenuOpen
              ? "opacity-100 scale-y-100 pointer-events-auto"
              : "opacity-0 scale-y-0 pointer-events-none"
          }`}
        >
          <div className="flex flex-col items-center gap-6 py-8 font-bold tracking-widest text-black border-t border-gray-100">
            <a
              href="#home"
              onClick={closeMenu}
              className="hover:text-[#F5B041] transition w-full text-center"
            >
              HOME
            </a>
            <a
              href="#about"
              onClick={closeMenu}
              className="hover:text-[#F5B041] transition w-full text-center"
            >
              ABOUT
            </a>
            <a
              href="#testimonials"
              onClick={closeMenu}
              className="hover:text-[#F5B041] transition w-full text-center"
            >
              TESTIMONIALS
            </a>
            <a
              href="#gallery"
              onClick={closeMenu}
              className="hover:text-[#F5B041] transition w-full text-center"
            >
              GALLERY
            </a>
          </div>
        </div>
      </nav>

      {/* --- 2. HERO SECTION --- */}
      <section
        id="home"
        className="relative w-full h-[90vh] flex flex-col items-center justify-center text-center px-4 pt-20 overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <Image
            src="/dapur.jpg"
            alt="Interior Background"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/80 via-black/30 to-white"></div>
        <div className="relative z-20 flex flex-col items-center mt-10">
          <h1 className="text-5xl md:text-7xl font-serif text-white drop-shadow-lg mb-4">
            More Cozy,
            <br />
            More Elegant
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl drop-shadow-md">
            Make your Living Experience even More Memorable with AKE Design
          </p>
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-gray-800 transition shadow-xl flex items-center gap-2"
          >
            👍 Free Consult
          </a>
        </div>
      </section>

      {/* --- 3. ABOUT SECTION --- */}
      <section id="about" className="max-w-7xl mx-auto px-6 py-24 scroll-mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif text-black leading-tight mb-6">
              Experience Quality Life with AKE Design
            </h2>
            <div className="w-16 h-1.5 bg-[#F5B041] mb-6 rounded-full"></div>
          </div>
          <div className="text-lg text-gray-600 leading-relaxed space-y-4 font-medium">
            <p>
              AKE Design adalah konsultan arsitektur interior yang berdedikasi
              untuk mengubah visi Anda menjadi ruang nyata yang estetik dan
              fungsional.
            </p>
            <p>
              Semua tim desain, sipil, dan furnitur kami kerjakan secara
              in-house di bawah supervisi profesional untuk memastikan setiap
              detail sesuai dengan standar kualitas tertinggi.
            </p>
          </div>
        </div>
      </section>

      {/* --- 4. TESTIMONIALS SECTION --- */}
      <section
        id="testimonials"
        className="w-full bg-gray-50 py-24 scroll-mt-20"
      >
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-black tracking-wide">
            APA KATA KLIEN KAMI
          </h2>

          <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 custom-scrollbar">
            {testimonials.map((testi) => (
              <div
                key={testi.id}
                className="snap-center shrink-0 w-[85vw] sm:w-[400px] md:w-[450px] bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition flex flex-col items-center text-center border border-gray-100"
              >
                <div className="relative w-20 h-20 mb-6">
                  <Image
                    src={testi.photoUrl}
                    alt={testi.name}
                    fill
                    className="object-cover rounded-full shadow-md"
                  />
                </div>
                <p className="text-gray-600 italic mb-6 text-lg flex-grow">
                  {testi.text}
                </p>
                <h4 className="font-bold text-black uppercase tracking-wider mt-auto">
                  {testi.name}
                </h4>
              </div>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#C0392B] hover:bg-[#a02f23] text-white px-8 py-3 rounded-full font-bold text-lg transition-colors shadow-lg"
            >
              Share Your Experience
            </a>
          </div>
        </div>
      </section>

      {/* --- 5. GALLERY SECTION --- */}
      <section
        id="gallery"
        className="max-w-7xl mx-auto px-6 py-24 scroll-mt-20"
      >
        <h2 className="text-3xl font-bold text-center mb-16 text-black tracking-wide">
          GALLERY PROYEK
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {gallery.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 flex flex-col group"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={item.imageUrl}
                  alt={item.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-black w-2/3">
                    {item.name}
                  </h3>
                  <span className="bg-[#F5B041] text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                    {item.dimensions}
                  </span>
                </div>
                <p className="text-2xl font-extrabold text-[#C0392B] mt-auto">
                  {item.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- Floating WhatsApp Button --- */}
      <a
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 md:bottom-10 md:right-10 bg-[#25D366] hover:bg-[#1ebd57] text-white p-4 rounded-full shadow-2xl z-[100] transition-transform hover:scale-110 flex items-center justify-center"
        aria-label="Contact us on WhatsApp"
      >
        <svg
          className="w-8 h-8 md:w-10 md:h-10 fill-current"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12.031 0C5.394 0 0 5.394 0 12.031c0 2.12.553 4.184 1.603 6.002L.092 23.55l5.635-1.478A11.963 11.963 0 0012.03 24c6.636 0 12.03-5.394 12.03-12.03S18.666 0 12.031 0zm6.544 17.262c-.274.774-1.584 1.478-2.182 1.54-.564.06-1.32.148-3.95-1.042-3.178-1.442-5.234-4.66-5.394-4.88-.16-.22-1.282-1.706-1.282-3.256 0-1.55.808-2.31 1.096-2.61.288-.3.626-.376.836-.376.21 0 .42.002.604.01.196.01.458-.074.718.552.274.662.884 2.152.964 2.312.08.16.136.346.036.566-.1.22-.152.356-.304.526-.152.17-.32.372-.456.51-.15.15-.31.312-.136.612.174.3.774 1.282 1.666 2.072 1.154 1.022 2.112 1.34 2.412 1.49.3.15.476.126.654-.07.178-.196.764-.886.964-1.186.2-.3.396-.25.67-.15.274.1.1.734.82 2.016 2.196.196.22.326.34.356.51.03.17.03.82-.244 1.594z" />
        </svg>
      </a>
    </main>
  );
}
