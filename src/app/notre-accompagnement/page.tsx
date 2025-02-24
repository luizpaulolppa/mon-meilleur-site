import { BadgeLink } from "@/components/badgeLink";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export default function NotreAccompagnement() {
  return (
    <div>
      <Header />
      {/* --------------------------------- */}
      <section className="flex justify-center my-14">
        <div className="flex items-center flex-col tabletx1:flex-row gap-8 max-w-[1000px] w-full px-4">
          <div>
            <img alt="" src="/colegas-escritorio.jpg" width={100} height={150} className="h-[400px] w-[350px] tabletx1:h-[500px] tabletx1:w-[450px] object-cover rounded-[32px]" />
          </div>
          <div className="w-full">
            <h2 className="font-corben text-[42px] leading-10">
              Un accompagnement
              <br />
              sur mesure
            </h2>
            <p className="mt-8 text-justify text-[18px]">
              {"Chaque individu est unique. Votre bien-être l'est tout autant. Grâce à notre approche, je vous propose un accompagnement qui correspond à votre personnalité."}
            </p>
            <p className="mt-6 text-justify text-[18px]">
              Que vous souhaitiez optimiser votre énergie, améliorer votre concentration ou adopter une alimentation en phase avec votre cerveau, je vous guide avec des solutions concrètes, basées sur les dernières avancées en neuronutrisciences.
            </p>
          </div>
        </div>
      </section>
      {/* --------------------------------- */}
      {/* --------------------------------- */}
      <section className="flex justify-center mt-16 bg-[#0851c1] py-16">
        <div className="flex items-center flex-col tabletx1:flex-row max-w-[1000px] w-full gap-4 px-4">
          <div className="w-full text-white word-break">
            <h3 className="tabletx1:text-[42px] text-[38px] font-corben leading-10">
              Formation<br /> Neuronutrisciences
            </h3>
            <h3 className="text-[24px] font-corben mt-4">
              3h30min
            </h3>
            <p className="mt-4">
              Cette formation innovante combine neurosciences et
              nutrition pour optimiser la performance et le bienêtre en entreprise. Découvrez comment identifier et
              gérer vos modes mentaux et avatars, en utilisant une
              boîte à outils dédiée aux managers et RH pour mieux
              accompagner les équipes. Apprenez à nourrir votre
              cerveau avec les meilleurs apports en
              macronutriments et micronutriments. Connectez ces
              deux leviers pour atteindre un équilibre global et un
              mieux-être holistique.
            </p>
            <div className="mt-8">
              <BadgeLink href="https://calendly.com/julie-arduin">Je réserve</BadgeLink>
            </div>
          </div>
          <div className="w-full mt-8 tabletx1:mt-0">
            <img src="/palestrante.jpg" alt="Neuroscience" height={80} width={80} className="h-[400px] w-[200px] w-full object-cover rounded-[32px]" />
          </div>
        </div>
      </section>
      {/* --------------------------------- */}
      {/* --------------------------------- */}
      <section className="flex justify-center my-14">
        <div className="flex items-center flex-col tabletx1:flex-row gap-8 max-w-[1000px] w-full px-4">
          <div>
            <img alt="" src="/duas-pessoas-estudando.jpg" width={100} height={150} className="h-[400px] w-[350px] tabletx1:h-[500px] tabletx1:w-[450px] object-cover rounded-[32px]" />
          </div>
          <div className="w-full">
            <h3 className="text-[42px] font-corben leading-10">
              Séance Individuelle
            </h3>
            <h3 className="text-[24px] font-corben mt-4">
              1h30min
            </h3>
            <p className="mt-6 text-justify text-[18px]">
              {"Retrouvez un équilibre entre votre vie personnelle et professionnelle. Comment ? En relevant avec succès, les défis suivants : apaiser votre relation à l'alimentation et au mental, ajuster votre poids, réduire votre stress, prévenir le burn-out... en bref, vivez sereinement votre quotidien. Je vous accompagne avec une approche complète alliant sophrologie, coaching neuropsychologique et nutrition. Je me consacre avec passion à votre bienêtre, enrichie par mon expérience en tant que DRH et manager."}
            </p>
            <div className="mt-8">
              <BadgeLink href="https://calendly.com/julie-arduin">Je réserve</BadgeLink>
            </div>
          </div>
        </div>
      </section>
      {/* --------------------------------- */}
      {/* --------------------------------- */}
      <section className="flex justify-center mt-16 bg-[#f4bd59] py-16">
        <div className="flex items-center flex-col tabletx1:flex-row max-w-[1000px] w-full gap-4 px-4">
          <div className="w-full text-white">
            <h3 className="text-[42px] font-corben leading-10">
              Présentation de <br />l’application
            </h3>
            <h3 className="text-[24px] font-corben mt-4">
              30min
            </h3>
            <p className="mt-4">
              {"Un accompagnement digital pour un bien-être durable en entreprise!"}

              {"En complément du Parcours Tremplin (2 demijournées de formation et 10 séances individuelles), la plateforme Mm@ vous guide au quotidien pour ancrer durablement de nouveaux rituels de vie, aussi bien personnels que professionnels, psychologiques qu'alimentaires. Pratique avant tout ! Vous y trouverez des exercices concrets, du contenu inspirant et motivant, adaptés à vos objectifs."}

              {"\"La chasse au bonheur est ouverte tous les matins!\" (Stendhal)"}
            </p>
            <div className="mt-8">
              <BadgeLink href="https://calendly.com/julie-arduin">Je réserve</BadgeLink>
            </div>
          </div>
          <div className="w-full mt-4 tabletx1:mt-0">
            <img src="/mao_segurando_celular.png" alt="Neuroscience" height={80} width={80} className="h-[500px] w-[300px] w-full object-cover rounded-[32px]" />
          </div>
        </div>
      </section>
      {/* --------------------------------- */}
      {/* --------------------------------- */}
      <section className="flex justify-center py-16">
        <div className="flex items-center flex-col tabletx1:flex-row max-w-[1000px] w-full gap-4 px-4">
          <div className="w-full">
            <h3 className="text-[42px] font-corben leading-10">
              Présentation de l’offre <br /> en ligne
            </h3>
            <h3 className="text-[24px] font-corben mt-4">
              1h
            </h3>
            <p className="mt-4">
              {"Un échange pour construire votre parcours sur mesure!"}
              {"Prenons le temps d'explorer ensemble vos enjeux, défis, envies et besoins . En fonction de votre personnalité, nous définissons le programme le plus adapté pour vous accompagner vers la meilleure version de vous-même , où votre identité s'exprime pleinement."}
              {"\"Grâce à Mon Meilleur @vatar, je nourris mon bonheur et je redeviens Moi!\""}
            </p>
            <div className="mt-8">
              <BadgeLink href="https://calendly.com/julie-arduin">Je réserve</BadgeLink>
            </div>
          </div>
          <div className="w-full mt-4 tabletx1:mt-0">
            <img src="/menina-estudando.jpg" alt="Neuroscience" height={80} width={80} className="h-[500px] w-[300px] w-full object-cover rounded-[32px]" />
          </div>
        </div>
      </section>
      {/* --------------------------------- */}
      <Footer />
    </div>
  );
}
