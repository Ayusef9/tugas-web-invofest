import { Button } from "../components/ui/Button";
import SpeakerCard from "../components/SpeakerCard";

export default function Workshop() {
  const speakers = [
    {
      name: "Lhuqita Fazry",
      role: "Mobile Development Developer, Founder Rumah Coding Indonesia",
      image:
        "https://www.invofest-harkatnegeri.com/assets/workshop/workshop%20mobile.png",
    },
    {
      name: "M. Dendi Purwanto",
      role: "Artificial Intelligence Software Engineer, PT. Mayar Kernel Supernova",
      image:
        "https://www.invofest-harkatnegeri.com/assets/workshop/workshop%20AI.png",
    },
    {
      name: "Danang Avan M",
      role: "Cyber Security Security Analyst, Founder | Contributor TegalSec",
      image:
        "https://www.invofest-harkatnegeri.com/assets/workshop/talkshow%20cyber.png",
    },
  ];

  return (
    <div className="bg-white">

      <section className="max-w-7xl mx-auto px-6 py-16 flex flex-col lg:flex-row items-center justify-between gap-10">
        
      
        <div className="lg:w-1/2 flex flex-col gap-6">
          <h1 className="text-5xl md:text-6xl font-bold text-[#852e4e]">
            IT Workshop
          </h1>

          <h2 className="text-2xl md:text-3xl font-semibold text-[#852e4e] leading-snug">
            “AI for a Sustainable Future: The Role of Z Generation in the Digital Era”
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed">
            IT Workshop ini menjembatani antara potensi Generasi Z dan kekuatan AI 
            untuk menciptakan masa depan yang berkelanjutan. Peserta akan dibekali 
            wawasan dan alat untuk mentransformasi ide-ide inovatif menjadi solusi 
            lingkungan yang nyata dan terukur di era digital.
          </p>

          <div>
            <Button label="Daftar Sekarang" variant="primary" />
          </div>
        </div>
        <div className="lg:w-1/2 flex justify-center">
          <img
            src="https://www.invofest-harkatnegeri.com/assets/Maskot-Workshop.png"
            alt="Workshop Mascot"
            className="w-full max-w-md"
          />
        </div>
      </section>

      <section className="py-24">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-[#852e4e] mb-20">
          Temui Pembicara Kami
        </h2>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 px-6">
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