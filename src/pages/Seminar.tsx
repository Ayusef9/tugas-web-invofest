import { Button } from "../components/ui/Button";
import SpeakerCard from "../components/SpeakerCard";

export default function Seminar() {
  const speakers = [
    {
      name: "Dery Agung Triyadi",
      role: "AWS Indonesia",
      image:
        "https://www.invofest-harkatnegeri.com/assets/seminar/Seminar%20Dery.png",
    },
    {
      name: "Sowam Habibi",
      role: "Google Indonesia",
      image:
        "https://www.invofest-harkatnegeri.com/assets/seminar/seminar%20sowam.png",
    },
  ];

  return (
    <div className="bg-white">
      
      
      <section className="max-w-7xl mx-auto px-6 py-16 flex flex-col lg:flex-row items-center justify-between gap-10">
        
        
        <div className="lg:w-1/2 flex flex-col gap-6">
          <h1 className="text-5xl md:text-6xl font-bold text-[#8B2E56]">
            IT Seminar
          </h1>

          <h2 className="text-2xl md:text-3xl font-semibold text-[#8B2E56] leading-snug">
            “Human-AI Integration: Merancang Arsitektur Kolaboratif, Bukan Kompetitif”
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed">
            Seminar nasional yang membahas strategi dan arsitektur teknologi
            untuk menciptakan sistem di mana manusia dan AI bekerja sebagai
            mitra yang sinergis. Bertujuan mengubah paradigma dari persaingan
            menjadi kolaborasi, serta meningkatkan pengetahuan peserta dalam
            merancang teknologi AI yang berpusat pada manusia.
          </p>

          <div>
            <Button label="Daftar Sekarang" variant="primary" />
          </div>
        </div>

        <div className="lg:w-1/2 flex justify-center">
          <img
            src="https://www.invofest-harkatnegeri.com/assets/Maskot-Seminar.png"
            alt="Seminar Mascot"
            className="w-full max-w-md"
          />
        </div>
      </section>

      <section className="py-24">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-[#8B2E56] mb-16">
          Temui Pembicara Khusus Kami
        </h2>

        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-12 px-6">
          {speakers.map((speaker, index) => (
            <SpeakerCard
              key={index}
              name={speaker.name}
              role={speaker.role}
              image={speaker.image}
            />
          ))}
        </div>
      </section>

    </div>
  );
}