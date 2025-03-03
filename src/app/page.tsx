/* eslint-disable @next/next/no-img-element */
import { BadgeLink } from "@/components/badgeLink";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export default function Home() {
  return (
    <div>
      <Header />
      {/* --------------------------------- */}
      {/* <div className="flex justify-center mt-12 md:mt-4">
        <div className="flex justify-center items-center gap-4 max-w-[1000px] w-full h-[600px] px-4 lg:justify-normal lg:px-0 lg:max-h-max">
          <div className="w-full h-[600px] p-4 hidden lg:flex">
            <img alt="" src="/julie-home.jpg" width={100} height={100} className="h-full w-full object-cover rounded-[32px]" />
          </div>
          <div className="w-full h-[600px] max-w-[450px] flex flex-col justify-center pr-4">
            <div>
              <p className="text-[32px] mb-4">Neurosciences & Nutrition</p>
              <h2 className="text-[40px] text-[#4187F5] leading-[46px] mb-4 break-words font-corben">Adoptez les <br />Neuronutrisciences: <br />un nouvel art de vivre</h2>
              <p className="mt-2 text-[18px] leading-6">Changez d’Ere : libérez le plein potentiel de vos dirigeants et managers en adoptant nos Formations de Neuronutrisciences, l’association dynamique des Neurosciences et de la Nutrition.</p>
              <div className="flex text-white font-bold mt-8 text-[18px]">
                <BadgeLink href="https://calendly.com/julie-arduin">Je suis un particulier</BadgeLink>
                <BadgeLink href="https://calendly.com/julie-arduin">Je suis un professionnel</BadgeLink>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className="flex justify-center bg-[url('/265.jpg')] bg-cover bg-center bg-no-repeat">
        <div className="flex justify-center items-center gap-4 max-w-[1200px] w-full h-[700px] lg:justify-normal lg:px-0 lg:max-h-max tablet:h-[600px] p-4 tablet:p-0">
          <img alt="" src="/julie-home.png" width={100} height={100} className="object-contain laptop:h-full w-[500px] laptop:w-full h-[500px] hidden laptop:flex" />
          <div className="w-full h-[600px] max-w-[500px] flex flex-col justify-center pr-4">
            <div>
              <p className="text-[32px] mb-4">Neurosciences & Nutrition</p>
              <h2 className="text-[40px] text-[#4187F5] leading-[46px] mb-4 break-words font-corben">Adoptez les <br />Neuronutrisciences: <br />un nouvel art de vivre</h2>
              <p className="mt-2 text-[18px] leading-6">Changez d’Ere : libérez le plein potentiel de vos dirigeants et managers en adoptant nos Formations de Neuronutrisciences, l’association dynamique des Neurosciences et de la Nutrition.</p>
              <div className="flex flex-col gap-2 text-white font-bold mt-8 text-[18px] desktop:flex-row desktop:gap-1">
                <BadgeLink href="https://bit.ly/4ioDInj">Je suis un particulier</BadgeLink>
                <BadgeLink href="https://bit.ly/41j7Edz">Je suis un professionnel</BadgeLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* --------------------------------- */}
      <section className="flex justify-center mt-16">
        <div className="flex flex-col items-center gap-8 max-w-[1000px] w-full px-4 lg:px-0 md:flex-row">
          <div className="w-full">
            <h2 className="text-[34px] leading-10 font-corben">
              Pourquoi associer les
              <br />
              neurosciences à la nutrition?
            </h2>
            <p className="mt-6 text-justify text-[18px]">{"L'alimentation influence directement le fonctionnement du cerveau : énergie, mémoire, concentration, gestion du stress… Tout est lié ! Les neuronutrisciences explorent cette connexion entre nutrition et neurosciences pour optimiser les performances cognitives et le bien-être mental."}</p>
            <p className="mt-6 text-justify">{"Comprendre comment les neurosciences agissent sur le cerveau permet d'adopter une alimentation adaptée à ses besoins, soit pour améliorer son humeur, réduire la fatigue mentale ou favoriser une meilleure résilience face au stress."}</p>
            <div className="mt-8">
              <BadgeLink href="/neuronutrisciences" target="_self">En savoir plus</BadgeLink>
            </div>
          </div>
          <div>
            <img alt="" src="/neuroscience_et_nutrition.png" width={100} height={100} className="h-[350px] min-w-[350px] lg:h-[450px] lg:min-w-[450px] object-cover rounded-[32px]" />
          </div>
        </div>
      </section>
      {/* -------------------------- */}
      <section className="flex justify-center py-14 my-14 bg-[#4187F5] px-4">
        <div className="flex flex-col md:flex-row items-center gap-8 max-w-[1000px] w-full">
          <div>
            <img
              alt=""
              src="/julie.jpg"
              width={100}
              height={150}
              className="h-[400px] min-w-[350px] md:h-[500px] md:min-w-[450px] object-cover rounded-[32px]"
            />
          </div>
          <div className="w-full text-white">
            <h3 className="text-[38px] leading-10 mb-4 font-corben">
              A la rencontre de
              <br />
              Julie Arduin
            </h3>
            <p className="font-bold text-[22px] mb-4">“Je nourris votre bonheur...”</p>
            <p className="text-justify text-[18px]">
              Passionnée par le bien-être des équipes d’une
              entreprise, je propose une série de Formations qui
              diminuent leur stress et assure leur mieux-vivre
              professionnel.
              <br />
              Je pratique en outre la sophrologie.
              <br />
              Je partage avec tous les participants de mes
              Formations mon sens de l’humour, le sourire et le
              rire. Le bonheur existe, je vous propose de le
              rencontrer!
            </p>
            <div className="mt-8">
              <BadgeLink href="/julie-arduin" target="_self">En savoir plus</BadgeLink>
            </div>
          </div>
        </div>
      </section>
      {/* --------------------------------- */}
      <section className="flex justify-center mt-16 mb-16">
        <div className="flex flex-col max-w-[1000px] w-full md:h-[600px]">
          <h4 className="text-center mb-8 text-[34px] font-corben">Julie vous accompagne...</h4>
          <div className="flex flex-col items-center justify-between gap-4 px-4 lg:px-0 md:flex-row">
            <div className="h-[500px] w-[300px] bg-[#6EBEA0] rounded-t-full shadow-lg">
              <img alt="" src="/group.jpg" width={100} height={100} className="h-[300px] w-full object-cover rounded-t-full" />
              <div className="h-[200px] flex flex-col items-center justify-between text-white py-8">
                <div className="flex flex-col justify-center items-center">
                  <p className="text-[18px]">Pour booster votre entreprise</p>
                  <p className="font-bold text-[18px] text-center">Formation <br /> Neuronutrisciences</p>
                </div>
                <div className="mt-4">
                  <BadgeLink href="https://bit.ly/41j7Edz" type="blue">En savoir plus</BadgeLink>
                </div>
              </div>
            </div>
            <div className="h-[500px] w-[300px] bg-[#6EBEA0] rounded-t-full shadow-lg">
              <img alt="" src="/dupla-trabalhando.jpg" width={100} height={100} className="h-[300px] w-full object-cover rounded-t-full" />
              <div className="h-[200px] flex flex-col items-center justify-between text-white py-8">
                <div className="flex flex-col justify-center items-center">
                  <p className="text-[18px]">Pour améliorer votre santé</p>
                  <p className="font-bold text-[18px] text-center">Séance individuelle</p>
                </div>
                {/* <div className="bg-[#4187F5] rounded-[16px] px-4 cursor-pointer max-w-fit text-white font-bold text-[18px]">
                  En savoir plus
                </div> */}
                <div className="mt-4">
                  <BadgeLink href="https://bit.ly/4ioDInj" type="blue">En savoir plus</BadgeLink>
                </div>
              </div>
            </div>
            <div className="h-[500px] w-[300px] bg-[#6EBEA0] rounded-t-full shadow-lg">
              <img alt="" src="/menina.jpeg" width={100} height={100} className="h-[300px] w-full object-cover rounded-t-full" />
              <div className="h-[200px] flex flex-col items-center justify-between text-white py-8">
                <div className="flex flex-col justify-center items-center">
                  <p className="text-[18px]">Pour prendre connaissance</p>
                  <p className="font-bold text-[18px] text-center">{"Présentation de l'offre"}<br /> en ligne</p>
                </div>
                <div className="mt-4">
                  <BadgeLink href="https://bit.ly/41j7Edz" type="blue">En savoir plus</BadgeLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* --------------------------------- */}
      {/* --------------------------------- */}
      <section className="flex justify-center relative h-[700px] sm:h-[500px]">
        <img alt="" src="/campo.png" width={100} height={150} className="w-[100%] object-cover" />
        <div className="absolute flex flex-col items-center justify-center max-w-[1000px] w-full h-full">
          <h3 className="text-[38px] text-[#122a3a] mt-6 text-center font-corben">Ils nous font confiance...</h3>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <div className="flex justify-center items-center h-[150px] w-[150px] bg-white rounded-xl shadow-xl">
              <img src="/partners/1.jpeg" alt="" className="rounded-xl" />
            </div>
            <div className="flex justify-center items-center h-[150px] w-[150px] bg-white rounded-xl shadow-xl">
              <img src="/partners/2.png" alt="" height={120} width={120} className="object-fill" />
            </div>
            <div className="flex justify-center items-center h-[150px] w-[150px] bg-white rounded-xl shadow-xl">
              <img src="/partners/3.png" alt="" height={120} width={120} />
            </div>
            <div className="flex justify-center items-center h-[150px] w-[150px] bg-white rounded-xl shadow-xl">
              <img src="/partners/4.png" alt="" height={120} width={120} />
            </div>
            <div className="flex justify-center items-center h-[150px] w-[150px] bg-white rounded-xl shadow-xl">
              <img src="/partners/5.gif" alt="" height={120} width={120} />
            </div>
          </div>
        </div>
      </section>
      {/* --------------------------------- */}
      <Footer />
    </div>
  );
}
