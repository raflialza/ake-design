import Image from "next/image";

// Data dummy sementara untuk galeri foto
const packages = [
  {
    id: 1,
    title: "Modern Classic",
    price: "20.000.000 IDR",
    category: "Kitchen Set",
    dimensions: "3.5 x 3M",
    scope:
      "Consultation with expert, design result, bed frame, headboard, bedside table, mirror, wainscoting, wallpainting.",
    imageUrl: "/dapur.jpg", // Using your local image
  },
  {
    id: 2,
    title: "Modern",
    price: "35.000.000 IDR",
    category: "Living Room",
    dimensions: "4 x 2.9M",
    scope:
      "Consultation with expert, design result, side cabinet, bed frame, bedside table, headboard, floating shelves, lighting, electric outlet, wall treatment, mirror, backdrop TV, floating table.",
    imageUrl: "/ruangtamu.jpg", // Using your local image
  },
  {
    id: 3,
    title: "Industrial",
    price: "30.000.000 IDR",
    category: "Bedroom",
    dimensions: "4 x 3.9M",
    scope:
      "Consultation with expert, design result, bedframe, headboard, bedside table, wall painting, working table, open rack, wardrobe, mirror, vynil.",
    imageUrl:
      "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80&w=800",
  },
];

export default function Home() {
  // Ganti dengan nomor WhatsApp aktif AKE DESIGN (gunakan kode negara 62 tanpa tanda +)
  const waNumber = "6281234567890";
  const waMessage =
    "Halo AKE DESIGN, saya tertarik untuk berdiskusi mengenai proyek interior.";
  const waLink = `https://wa.me/${waNumber}?text=${encodeURIComponent(waMessage)}`;

  return (
    <main className="min-h-screen bg-[#111111] text-gray-100 font-sans">
      {/* --- Bagian Hero / Header --- */}
      <section className="flex flex-col items-center justify-center py-24 px-4 text-center border-b border-gray-800">
        <div className="mb-8 relative w-48 h-48">
          {/* Menampilkan Logo */}
          <Image
            src="/logo.png"
            alt="AKE Design Logo"
            fill
            className="object-contain"
            priority
          />
        </div>
        <h1 className="text-4xl font-extrabold tracking-widest mb-4 text-[#D4AF37]">
          AKE DESAIN
        </h1>
        <p className="text-lg text-gray-400 max-w-2xl">
          Interior design is the strategic art of transforming spaces to
          harmonize beautiful aesthetics with practical functionality, creating
          environments tailored to your unique lifestyle.
        </p>
      </section>

      {/* --- Bagian Galeri Proyek --- */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center mb-12 text-white tracking-wide">
          OUR PROJECTS
        </h2>

        {/* Carousel Container */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-10 custom-scrollbar">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className="snap-start shrink-0 w-[340px] md:w-[380px] bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group flex flex-col"
            >
              {/* Image Container with Badges */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={pkg.imageUrl}
                  alt={pkg.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Badges */}
                <div className="absolute bottom-4 left-4 flex gap-2">
                  <span className="bg-[#F5B041] text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                    {pkg.category}
                  </span>
                  <span className="bg-white text-gray-800 text-xs font-bold px-3 py-1 rounded-full shadow">
                    {pkg.dimensions}
                  </span>
                </div>
              </div>

              {/* Text Content */}
              <div className="p-6 flex flex-col flex-grow bg-white text-gray-900">
                <h3 className="text-2xl font-extrabold text-[#D35400] mb-4">
                  {pkg.price}
                </h3>
                <h4 className="text-xl font-bold mb-3 text-gray-800">
                  {pkg.title}
                </h4>
                <div className="mt-auto">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
                    Scope of Work:
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {pkg.scope}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- Bagian Kontak --- */}
      <section className="flex flex-col items-center justify-center py-20 bg-black">
        <h2 className="text-2xl font-bold mb-6">Start Your Project With Us</h2>
        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-600 hover:bg-green-500 text-white font-bold py-3 px-8 rounded-full transition-colors flex items-center gap-2 shadow-lg"
        >
          Hubungi Kami via WhatsApp
        </a>
      </section>
    </main>
  );
}
