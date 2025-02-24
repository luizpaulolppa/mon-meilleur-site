import { BadgeLink } from "@/components/badgeLink";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export default function Neuronutrisciences() {
  return (
    <div>
      {/* --------------------------------- */}
      <Header />
      {/* --------------------------------- */}
      {/* --------------------------------- */}
      <section className="flex justify-center bg-[#5acdf5] px-4">
        <div className="flex items-center justify-between max-w-[1000px] w-full pb-12 tabletx1:pb-0 tabletx1:h-[600px] tabletx1:flex-row flex-col-reverse">
          <div className="text-white mx-12">
            <p className="text-[28px]">Neurosciences & Nutrition</p>
            <h1 className="text-[42px] leading-10 mt-4 font-corben">Découvre <br />les neuronutrisciences</h1>
            <p className="mt-6">Unique en France, Mon Meilleur Avatar vous fait<br /> bénéficier des atouts inédits de la complémentarité des<br /> neurosciences et de la nutrition.</p>
          </div>
          <div>
            <img alt="" src="/cabeca-de-frutas.png" width={100} height={150} className="tablet:h-[500px] w-[400px] object-cover rounded-[32px]" />
          </div>
        </div>
      </section>
      {/* --------------------------------- */}
      {/* --------------------------------- */}
      <section className="flex justify-center">
        <div className="max-w-[1000px] w-full my-14 lg:max-w-[900px] px-4 lg:px-0">
          <h1 className="text-[32px] text-center font-corben">Neuronutrisciences: les atouts de la complémentarité</h1>
          <p className="mt-4 text-justify">Notre cerveau et notre alimentation sont intimement liés. Les neuronutrisciences explorent cette connexion en combinant neurosciences et nutrition pour optimiser vos performances cognitives, votre bien-être mental et votre santé globale.</p>
          <p className="mt-4 text-justify">{"Chaque nutriment joue un rôle clé : les oméga-3 soutiennent la mémoire, les antioxydants protègent les neurones, et les probiotiques influencent même nos émotions via l'axe intestin-cerveau."}</p>
          <p className="mt-4 text-justify">{"L'approche complémentaire agit sur plusieurs leviers en même temps : alimentation ciblée, micronutrition, gestion du stress et rythmes biologiques . Un équilibre essentiel pour un cerveau en pleine forme, aujourd'hui et pour longtemps."}</p>
          <div className="flex justify-around flex-wrap gap-4 mt-8">
            <div className="flex flex-col items-center justify-center gap-1 max-w-max">
              <img src="/brain-in-head-left.png" alt="" height={80} width={80} />
              <p className="text-center font-bold leading-4 text-[#629a34]">Prévention des<br /> troubles mentaux</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-1 max-w-max">
              <img src="/ioga.png" alt="" height={80} width={80} />
              <p className="text-center font-bold leading-4 text-[#629a34]">Amélioration du<br /> bien-être général</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-1 max-w-max">
              <img src="/brain-on-head-right.png" alt="" height={80} width={80} />
              <p className="text-center font-bold leading-4 text-[#629a34]">Optimisation de la<br /> longétivité</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-1 max-w-max">
              <img src="/icons8-mulher-afligida-96.png" alt="" height={80} width={80} />
              <p className="text-center font-bold leading-4 text-[#629a34]">Réduction du<br /> stress</p>
            </div>
          </div>
        </div>
      </section>
      {/* --------------------------------- */}
      {/* --------------------------------- */}
      <section className="flex justify-center mt-16 bg-[#4187F5] py-16">
        <div className="flex items-center max-w-[1000px] w-full tabletx1:h-[600px] px-4 gap-4">
          <div className="w-full text-white">
            <h3 className="text-[28px] font-corben">
              Neurosciences : l’apport <br />
              des TCC (Thérapies <br />
              Cognitives Comportementales)
            </h3>
            <p className="mt-4">{"Les neurosciences ont profondément enrichi notre compréhension du cerveau et des mécanismes psychologiques, notamment grâce aux Thérapies Cognitives et Comportementales (TCC). Fondées sur l'idée que nos pensées, émotions et comportements sont liés, les TCC modifient les schémas de pensée négatifs et les comportements inadaptés."}</p>
            <p className="mt-4">{"Validées scientifiquement, elles sont particulièrement efficaces pour traiter l'anxiété, la dépression, les phobies ou encore les troubles obsessionnels. En s'appuyant sur des exercices concrets et une approche structurée, elles obtiennent des résultats durables."}</p>
            <p className="mt-4">{"Grâce aux avancées en neurosciences, les TCC continuent d'évoluer, offrant des méthodes toujours plus adaptées aux besoins individuels ou collectifs."}</p>
            {/* <div className="bg-[#6EBEA0] rounded-[16px] px-4 cursor-pointer max-w-fit text-white font-bold text-[18px] mt-8">
              Je réserve ma séance
            </div> */}
            <div className="mt-8">
              <BadgeLink href="https://calendly.com/julie-arduin">Je réserve ma séance</BadgeLink>
            </div>
          </div>
          <div className="w-full hidden lg:block">
            <img src="/neuroscience.png" alt="Neuroscience" height={80} width={80} className="h-[600px] w-full object-cover rounded-[32px]" />
          </div>
        </div>
      </section>
      {/* --------------------------------- */}
      {/* --------------------------------- */}
      <section className="flex justify-center my-14">
        <div className="flex items-center gap-8 max-w-[1000px] w-full px-4 gap-4">
          <div className="hidden lg:block">
            <img alt="" src="/d20040372373e3f4f43c153d21690643.avif" width={100} height={150} className="h-[500px] min-w-[450px] object-cover rounded-[32px]" />
          </div>
          <div className="w-full">
            <h2 className="font-corben text-[34px] leading-10">
              Nutrition allégée :
              <br />
              le plaisir de la sérénité
            </h2>
            <p className="mt-6 text-justify text-[18px]">
              {"Et si mieux manger rimait avec bien-être et clarté d'esprit ? La nutrition allégée ne consiste pas seulement à réduire les calories, mais à choisir des aliments qui nourrissent à la fois le corps et l'esprit. Grâce aux avancées en neuronutrisciences, nous comprenons mieux l'impact de l'alimentation sur l'équilibre émotionnel, la concentration et la gestion."}
            </p>
            <p className="mt-6 text-justify text-[18px]">
              {"En adoptant une alimentation plus légère, vous offrez à votre cerveau les nutriments essentiels pour fonctionner de manière optimale. Moins de surcharge, plus d'énergie, une meilleure humeur… et surtout, la sérénité retrouvée."}
            </p>
            <div className="mt-8">
              <BadgeLink href="https://calendly.com/julie-arduin">Je réserve ma séance</BadgeLink>
            </div>
          </div>
        </div>
      </section>
      {/* --------------------------------- */}
      <section className="flex justify-center relative">
        <img alt="" src="/fundo-ondulado.png" width={100} height={150} className="h-[500px] w-[100%] object-cover" />
        <div className="absolute flex flex-col items-center justify-center max-w-[1000px] w-full h-[500px]">
          <img alt="" src="/android-chrome-192x192.png" width={56} height={56} className="w-[150px]" />
          <p className="font-semibold text-[12px] text-[#2d358a] font-corben italic">Mon Meilleun @vatan</p>
          <h3 className="text-[38px] font-corben text-white mt-6 text-center">“Vivez votre bien-être au quotidien”</h3>
        </div>
      </section>
      {/* --------------------------------- */}
      <Footer />
      {/* --------------------------------- */}
    </div>
  );
}
