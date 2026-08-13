"use client";

import Image from "next/image";
import { useState } from "react";

// --- DUMMY DATA ---
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
  // State to manage the mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const waNumber = "6281234567890";
  const waMessage = "Halo AKE DESIGN, saya tertarik untuk Free Consult.";
  const waLink = `https://wa.me/${waNumber}?text=${encodeURIComponent(waMessage)}`;

  // Functions to handle menu toggling
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans">
      {/* --- 1. TOP NAVBAR --- */}
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo Area */}
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 bg-black rounded">
              <Image
                src="/logo.png"
                alt="AKE Design Logo"
                fill
                className="object-contain p-1"
              />
            </div>
            <span className="font-bold text-xl tracking-wider">AKE DESIGN</span>
          </div>

          {/* Hamburger Icon (Mobile Only) */}
          <button
            className="md:hidden text-gray-800 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                // Close (X) Icon
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                // Hamburger Menu Icon
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Navigation Links (Desktop) */}
          <div className="hidden md:flex gap-8 font-semibold text-sm tracking-wide">
            <a href="#home" className="hover:text-[#D35400] transition">
              HOME
            </a>
            <a href="#about" className="hover:text-[#D35400] transition">
              ABOUT
            </a>
            <a href="#testimonials" className="hover:text-[#D35400] transition">
              TESTIMONIALS
            </a>
            <a href="#gallery" className="hover:text-[#D35400] transition">
              GALLERY
            </a>
          </div>
        </div>

        {/* Navigation Links (Mobile Dropdown Menu) */}
        {/* Uses max-height and opacity transitions to create a smooth opening/closing effect */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col items-center gap-6 py-6 bg-white border-t border-gray-100 font-semibold tracking-wide">
            <a
              href="#home"
              onClick={closeMenu}
              className="hover:text-[#D35400] transition w-full text-center"
            >
              HOME
            </a>
            <a
              href="#about"
              onClick={closeMenu}
              className="hover:text-[#D35400] transition w-full text-center"
            >
              ABOUT
            </a>
            <a
              href="#testimonials"
              onClick={closeMenu}
              className="hover:text-[#D35400] transition w-full text-center"
            >
              TESTIMONIALS
            </a>
            <a
              href="#gallery"
              onClick={closeMenu}
              className="hover:text-[#D35400] transition w-full text-center"
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
            Free Consult
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
            <div className="w-16 h-1.5 bg-[#D35400] mb-6 rounded-full"></div>
          </div>
          <div className="text-lg text-gray-600 leading-relaxed space-y-4">
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

          {/* Swipeable Carousel Container */}
          <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 custom-scrollbar">
            {testimonials.map((testi) => (
              <div
                key={testi.id}
                // w-[85vw] ensures a bit of the next card peeks out on mobile so users know to swipe
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

          {/* Clickable Button */}
          {/* <div className="mt-10 flex justify-center">
            <a
              href={waLink} // Reusing your WhatsApp link here, but you can change it to any URL
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#D35400] hover:bg-[#b04600] text-white px-8 py-3 rounded-full font-bold text-lg transition-colors shadow-lg"
            >
              Share Your Experience
            </a>
          </div> */}
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
              className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 flex flex-col"
            >
              <div className="relative h-64 w-full">
                <Image
                  src={item.imageUrl}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-black w-2/3">
                    {item.name}
                  </h3>
                  <span className="bg-gray-100 text-gray-800 text-xs font-bold px-3 py-1 rounded-full">
                    {item.dimensions}
                  </span>
                </div>
                <p className="text-2xl font-extrabold text-[#D35400] mt-auto">
                  {item.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
