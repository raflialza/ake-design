import Image from "next/image";

// Data dummy sementara untuk galeri foto
const projects = [
  {
    id: 1,
    title: "Sitting room",
    // Menggunakan gambar placeholder sementara dari Unsplash
    imageUrl:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 2,
    title: "Kitchen Set",
    imageUrl: "/dapur.jpg", // Gambar lokal dari folder public
  },
  {
    id: 3,
    title: "Bedroom",
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

        {/* Grid Galeri */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-lg aspect-[4/3] bg-gray-900"
            >
              <Image
                src={project.imageUrl}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Overlay Teks saat di-hover */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <h3 className="text-xl font-semibold text-white tracking-wider">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- Bagian Kontak --- */}
      <section className="flex flex-col items-center justify-center py-20 bg-black">
        <h2 className="text-2xl font-bold mb-6">
          Mulai Proyek Anda Bersama Kami
        </h2>
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
