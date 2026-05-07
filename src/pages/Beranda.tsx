import { Button } from "../components/ui/Button";

export default function Beranda() {
  return (
    <div className="bg-white">
      
      
      <section className="max-w-7xl mx-auto px-6 py-16 flex flex-col lg:flex-row items-center justify-between gap-10">
        <div className="lg:w-1/2 flex flex-col gap-6">
          <img
            src="https://www.invofest-harkatnegeri.com/assets/text-image.png"
            alt="Invofest"
            className="w-72 md:w-96"
          />

          
          <p className="text-lg text-gray-600 leading-relaxed">
            Invofest (Informatics Vocational Festival) adalah festival tahunan
            yang bertujuan untuk menginspirasi dan memberdayakan generasi muda
            Indonesia dalam menghadapi era digital. Dengan mengusung tema{" "}
            <span className="font-semibold text-gray-700">
              “Beyond Limits, Beyond Intelligence: Innovate for a Smarter Tomorrow”
            </span>.
          </p>

          
          <div className="flex flex-wrap gap-4">
            <Button label="Info Selengkapnya" variant="primary" />
            <Button label="Hubungi Panitia" variant="outline" />
          </div>
        </div>

        
        <div className="lg:w-1/2 flex justify-center">
          <img
            src="https://www.invofest-harkatnegeri.com/assets/Maskot-Hero.png"
            alt="Maskot Invofest"
            className="w-full max-w-md"
          />
        </div>

      </section>

    </div>
  );
}