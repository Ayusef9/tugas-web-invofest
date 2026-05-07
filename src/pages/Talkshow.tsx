import SpeakerCard from "../components/SpeakerCard";
import { Button } from "../components/ui/Button";

const Talkshow = () => {
  const speakers = [
    {
      name: "Moh. Ichsan Maulana",
      role:
        "Human Capital Information System (HCIS), PT. Garuda Daya Pratama Sejahtera",
      image:
        "https://www.invofest-harkatnegeri.com/assets/talkshow/talkshow%20ichsan.png",
    },
    {
      name: "M. Zaim Zamzami",
      role:
        "Programmer, PT. Pertamina Drilling Service Indonesia",
      image:
        "https://www.invofest-harkatnegeri.com/assets/talkshow/talkshow%20zaim%20zamzami.png",
    },
    {
      name: "Daffa Zuhdan Muhtar",
      role:
        "Android Developer, PT. Astra Internasional",
      image:
        "https://www.invofest-harkatnegeri.com/assets/talkshow/talkshow%20daffa.png",
    },
    {
      name: "Bayu Adi Prasetiyo",
      role: "Software Engineer, KOMPAS.ID",
      image:
        "https://www.invofest-harkatnegeri.com/assets/talkshow/talkshow%20bayu.png",
    },
  ];

  return (
    <div className="bg-white">
      <section className="max-w-7xl mx-auto px-6 py-16 flex flex-col lg:flex-row items-center justify-between gap-10">
        
       
        <div className="lg:w-1/2 flex flex-col gap-6">
          <h1 className="text-5xl md:text-6xl font-bold text-[#852e4e]">
            IT Talkshow
          </h1>

          <h2 className="text-2xl md:text-3xl font-semibold text-[#852e4e] leading-snug">
            “Humanizing Technology: Kolaborasi Manusia dan AI di Masa Depan”
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed">
            Talkshow interaktif yang mengeksplorasi bagaimana teknologi AI
            dapat dikembangkan dengan nilai kemanusiaan seperti empati,
            etika, dan kreativitas. Bertujuan untuk menginspirasi audiens
            agar memanfaatkan AI sebagai alat kolaboratif, bukan sebagai pengganti manusia.
          </p>

          <div>
            <Button label="Daftar Sekarang" variant="primary" />
          </div>
        </div>

      
        <div className="lg:w-1/2 flex justify-center">
          <img
            src="https://www.invofest-harkatnegeri.com/assets/Maskot-Talkshow.png"
            alt="Talkshow Mascot"
            className="w-full max-w-md"
          />
        </div>
      </section>

      <section className="py-24">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-[#852e4e] mb-20">
          Temui Pembicara Kami
        </h2>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 px-6">
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
};

export default Talkshow;