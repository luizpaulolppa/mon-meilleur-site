/* eslint-disable @next/next/no-img-element */
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export default function Home() {
  return (
    <div>
      <Header />
      {/* --------------------------------- */}
      <div className="flex justify-center bg-contain bg-no-repeat">
        <div className="relative flex items-center gap-4 max-w-[1000px] w-full h-[500px] bg-[url(/bg-image.jpeg)] bg-cover bg-no-repeat bg-none">
          <img alt="" src="/openart-72f96036-7b17-4816-8dff-2afd5f0dee17.png" width={100} height={100} className="h-full w-full object-cover" />
          <div className="absolute right-[30] h-[500px] w-[450px] flex flex-col justify-center">
            <div>
              <p className="text-[28px] mb-4">Neurosciences & Nutrition</p>
              <h2 className="text-[42px] text-[#02acdb] font-bold leading-10 mb-4">Adoptez les <br />Neuronutrisciences: <br />un nouvel art de vivre</h2>
              <p className="mt-2 text-[18px] leading-6">Changez d’Ere : libérez le plein potentiel de vos dirigeants et managers en adoptant nos Formations de Neuronutrisciences, l’association dynamique des Neurosciences et de la Nutrition.</p>
              <div className="flex justify-between text-white font-bold mt-8 text-[18px]">
                <div className="bg-[#629a34] rounded-[16px] px-2 cursor-pointer">
                  Je suis un particulier
                </div>
                <div className="bg-[#629a34] rounded-[16px] px-2 cursor-pointer">
                  Je suis un professionnel
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* --------------------------------- */}
      <section className="flex justify-center mt-16">
        <div className="flex gap-8 max-w-[1000px] w-full">
          <div className="w-full">
            <h2 className="font-bold text-[34px] leading-10">
              Pourquoi associer les
              <br />
              neurosciences à la nutrition?
            </h2>
            <p className="mt-4 text-justify text-[18px]">L'alimentation influence directement le fonctionnement du cerveau : énergie, mémoire, concentration, gestion du stress… Tout est lié ! Les neuronutrisciences explorent cette connexion entre nutrition et neurosciences pour optimiser les performances cognitives et le bien-être mental.</p>
            <p className="mt-6 text-justify">Comprendre comment les neurosciences agissent sur le cerveau permet d'adopter une alimentation adaptée à ses besoins, soit pour améliorer son humeur, réduire la fatigue mentale ou favoriser une meilleure résilience face au stress.</p>
            <div className="bg-[#629a34] rounded-[16px] px-4 cursor-pointer max-w-fit text-white font-bold text-[18px] mt-4">
              En savoir plus
            </div>
          </div>
          <div className="">
            <img alt="" src="/neuroscience_et_nutrition.png" width={100} height={100} className="h-[400px] min-w-[450px] object-cover rounded-[32px]" />
          </div>
        </div>
      </section>
      {/* --------------------------------- */}
      <section className="flex justify-center mt-16">
        <div className="flex relative max-w-[1000px] w-full h-[600px]">
          <div className="absolute h-[500px] w-[400px] top-[50px] rounded-[32px]">
            <img alt="Julie ARDUIN" src="/julie.jpg" width={100} height={100} className="w-full h-full object-cover rounded-[32px]" />
          </div>
          <div className="w-[30%]">
          </div>
          <div className="flex justify-end items-center w-full bg-[#02acdb]">
            <div className="w-[400px] mr-[62px] text-white">
              <h3 className="font-bold text-[38px] leading-10 mb-4">
                A la rencontre de
                <br />
                Julie Arduin
              </h3>
              <p className="font-bold text-[22px] mb-4">“Je nourris votre bonheur...”</p>
              <p className="text-justify text-[18px]">
                Passionée par le bien-être des équipes d’une
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
              <div className="bg-[#629a34] rounded-[16px] px-4 cursor-pointer max-w-fit text-white font-bold text-[18px] mt-6">
                En savoir plus
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* --------------------------------- */}
      <section className="flex justify-center mt-16 mb-16">
        <div className="flex flex-col max-w-[1000px] w-full h-[600px]">
          <h4 className="text-center mb-8 font-bold text-[34px]">Julie vous accompagne...</h4>
          <div className="flex justify-between gap-16">
            <div className="h-[500px] w-[300px] bg-[#629a34] rounded-t-full shadow-lg">
              <img alt="" src="/group.jpg" width={100} height={100} className="h-[300px] w-full object-cover rounded-t-full" />
              <div className="h-[200px] flex flex-col items-center justify-between text-white py-8">
                <div className="flex flex-col justify-center items-center">
                  <p className="text-[18px]">Pour booster votre entreprise</p>
                  <p className="font-bold text-[18px] text-center">Formation <br /> Neuronutrisciences</p>
                </div>
                <div className="bg-[#02acdb] rounded-[16px] px-4 cursor-pointer max-w-fit text-white font-bold text-[18px]">
                  En savoir plus
                </div>
              </div>
            </div>
            <div className="h-[500px] w-[300px] bg-[#629a34] rounded-t-full shadow-lg">
              <img alt="" src="/dupla-trabalhando.jpg" width={100} height={100} className="h-[300px] w-full object-cover rounded-t-full" />
              <div className="h-[200px] flex flex-col items-center justify-between text-white py-8">
                <div className="flex flex-col justify-center items-center">
                  <p className="text-[18px]">Pour améliorer votre santé</p>
                  <p className="font-bold text-[18px] text-center">Séance individuelle</p>
                </div>
                <div className="bg-[#02acdb] rounded-[16px] px-4 cursor-pointer max-w-fit text-white font-bold text-[18px]">
                  En savoir plus
                </div>
              </div>
            </div>
            <div className="h-[500px] w-[300px] bg-[#629a34] rounded-t-full shadow-lg">
              <img alt="" src="/menina.jpeg" width={100} height={100} className="h-[300px] w-full object-cover rounded-t-full" />
              <div className="h-[200px] flex flex-col items-center justify-between text-white py-8">
                <div className="flex flex-col justify-center items-center">
                  <p className="text-[18px]">Pour prendre connaissance</p>
                  <p className="font-bold text-[18px] text-center">Présentation de l'offre<br /> en ligne</p>
                </div>
                <div className="bg-[#02acdb] rounded-[16px] px-4 cursor-pointer max-w-fit text-white font-bold text-[18px]">
                  En savoir plus
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* --------------------------------- */}
      <Footer />
    </div>
  );
}
