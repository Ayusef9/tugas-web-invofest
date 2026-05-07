import { Button } from "../components/ui/Button";

export default function Competition() {
  return (
    <div>
      <section
        id="competition-hero"
        className="py-10 flex gap-10 justify-between items-center"
      >
        <div className="w-2/3 flex flex-col gap-6">
          <h1 className="text-6xl font-bold text-[#8B2E56]">
            IT Competition
          </h1>

          <h2 className="text-3xl font-semibold text-[#8B2E56]">
            "From Creation to Innovation"
          </h2>

          <p className="text-lg text-slate-600 leading-relaxed">
            Kompetisi dalam INVOFEST ini mengusung tema{" "}
            <span className="font-semibold text-slate-700">
              “From Creation to Innovation”
            </span>
            , Tema ini bertujuan mengajak generasi muda untuk mengembangkan
            inovasi dan kreativitas guna membentuk kelompok yang memiliki
            potensi luar biasa, yang mampu mewujudkan masa depan yang
            berkelanjutan.
          </p>

          <div className="flex gap-4">
            <Button label="Info Selengkapnya" variant="primary" />
            <Button label="Hubungi Panitia" variant="outline" />
          </div>
        </div>

        <div className="w-1/3 flex justify-center">
          <img
            src="https://www.invofest-harkatnegeri.com/assets/Maskot-Lomba.png"
            alt="Competition Mascot"
            className="w-full max-w-sm"
          />
        </div>
      </section>

      <section className="py-16 px-8 bg-pink-50 rounded-2xl mt-10 text-center">
        <h2 className="text-5xl font-bold text-[#8B2E56] mb-8">
          DESKRIPSI KOMPETISI
        </h2>

        <p className="text-lg text-slate-600 leading-loose max-w-6xl mx-auto">
          Kompetisi atau perlombaan yang ada dalam kegiatan INVOFEST
          (Informatics Vocational Festival) 2025 diantaranya National Poster
          Design Competition, UI UX Design Competition, dan juga UI/UX Design
          Competition. Kompetisi dalam INVOFEST ini mengusung tema{" "}
          <span className="font-semibold text-slate-700">
            “From Creation to Innovation”
          </span>
          . Tema ini bertujuan mengajak generasi muda untuk mengembangkan
          inovasi dan kreativitas guna membentuk kelompok yang memiliki potensi
          luar biasa, yang mampu mewujudkan masa depan yang berkelanjutan.
          Melalui pendekatan ini, diharapkan generasi ini akan berperan dalam
          menciptakan solusi-solusi baru untuk tantangan masa kini dan
          mendatang, baik dalam hal teknologi, lingkungan, pendidikan, maupun
          tanggung jawab sosial.
        </p>
      </section>
    </div>
  );
}