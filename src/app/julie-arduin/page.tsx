/* eslint-disable @next/next/no-img-element */
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export default function JulieArduin() {
  return (
    <div>
      <Header />
      {/* --------------------------------- */}
      <section className="flex justify-center py-8 mb-40">
        <div className="flex items-center gap-4 max-w-[1000px] w-full h-[600px]">
          <div className="w-full h-[600px] p-4">
            <img alt="" src="/julie-encarando-.jpg" width={100} height={100} className="h-full w-full object-cover rounded-[32px]" />
          </div>
          <div className="w-full h-[600px] max-w-[450px] flex flex-col justify-center">
            <div>
              <p className="">{"\"Le Bonheur n’est pas forcément une gare où l’on arrive, c’est avant tout une certaine façon de voyager\""}</p>
              <p className="text-end mt-2 mb-4">Oscar Wide</p>
              <h1 className="text-center font-bold text-[32px]">Julie Arduin</h1>
              <p className="text-center font-bold text-[22px]">Présidente</p>

              <p className="text-justify mt-2">{"Je m'appelle Julie, Présidente de Mm@ Mon Meilleur @vatar. J'ai travaillé comme Directrice Opérationnelle et Directrice des Ressources Humaines pendant 18 ans dans un groupe de services français. J'ai démarré en tant que manager d'une centaine de personnes en Nuit dans un centre industriel. J'ai accompagné la transformation tout au long de ma carrière."}</p>
              <br />
              <p className="text-justify">{"Je suis aujourd’hui Neuropraticienne formée à l’Institute of Neurocognitism en Belgique et Coach en Nutrition Humaine en formation au CERDEN (Centre Européen pour la Recherche, le Développement et l’Enseignement de la Nutrition et de la Nutrithérapie)"}</p>
            </div>
          </div>
        </div>
      </section>
      {/* --------------------------------- */}
      <Footer />
    </div>
  );
}
