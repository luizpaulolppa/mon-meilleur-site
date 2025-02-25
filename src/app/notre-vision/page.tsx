/* eslint-disable @next/next/no-img-element */
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export default function NotreVision() {
  return (
    <div>
      <Header />
      {/* --------------------------------- */}
      <section className="flex justify-center mt-16 py-16 px-4">
        <div className="flex items-center justify-between flex-col tabletx1:flex-row gap-4 max-w-[1000px] w-full">
          <div className="flex flex-col justify-center items-center w-full">
            <img alt="" src="/logo-01@2x.png" width={56} height={56} className="w-[500px]" />
            {/* <h3 className="font-corben italic text-[32px] mt-4">Mon Meilleur @vatar</h3> */}
            <p className="text-center text-[20px] font-normal leading-6 mt-6">Adoptez les neuronutrisciences: <br />un nouvel art de vivre</p>
          </div>
          <div className="w-full">
            <h2 className="text-[42px] font-corben">Il était une fois...</h2>
            <p className="mt-4">{"L'Humain, le Bonheur, la Performance et l'Excellence forment autant de valeurs qui réunissent les membres de l'équipe de Mon Meilleur Avatar!"}</p>
            <p>La santé mentale et physique représentent de véritables enjeux de santé publique.</p>
            <p>{"Nous passons les 3/4 de notre temps en entreprise: comment s'y trouver bien et avoir envie de se rendre sur son lieu de travail?"}</p>

            <p className="mt-4">J’ai créé Mon Meilleur Avatar pour rendre encore plus solidaire les équipes dans leur entreprise et créer les meilleurs conditions d’un nouvel art de vivre.</p>
          </div>
        </div>
      </section>
      {/* --------------------------------- */}
      {/* --------------------------------- */}
      <section className="flex justify-center mt-16 bg-[#4187F5] py-16 px-4">
        <div className="flex items-center flex-col tabletx1:flex-row justify-between gap-4 max-w-[1000px] w-full">
          <div className="w-full text-white">
            <h3 className="text-[42px] font-corben leading-10">
              Notre Vision: le Mieux<br />
              Vivre dans l’entreprise
            </h3>
            <p className="mt-4">{"C'est en se connaissant mieux et en se concentrant sur soi que l'on parvient à mieux vivre avec les autres. Nous mettons toute notre énergie à créer un sentiment de bien-être au sein des équipes d’une entreprise selon nos engagements suivants : "}</p>
            <ul className="mt-4">
              <li className="mt-4">
                <span className="font-bold text-[22px]">1-</span> Créer un programme personnalisé fondé sur les
                Neurosciences appliquées et la Nutrition Humaine:
                <ul className="list-disc ml-8">
                  <li>en collectif</li>
                  <li>en individuel</li>
                  <li>en application</li>
                </ul>
              </li>
              <li className="mt-4">
                <span className="font-bold text-[22px]">2-</span> Réduire le stress des managers et des RH en agissant sur la santé mentale et physique
              </li>
              <li className="mt-4">
                <span className="font-bold text-[22px]">3-</span> Diminuer l’absentéisme et le burn-out chez les managers
              </li>
              <li className="mt-4">
                <span className="font-bold text-[22px]">4-</span> Renforcer l’engagement de tous les collaborateurs et réduire le turn-over
              </li>
              <li className="mt-4">
                <span className="font-bold text-[22px]">5-</span> Augmenter le sentiment d’appartenance à l’entreprise en rencorçant la personnalité des collaborateurs fondée sur des valeurs éthiques
              </li>
            </ul>
          </div>
          <div className="flex justify-center tabletx1:justify-end w-full">
            <img src="/escritorio-feliz.webp" alt="Neuroscience" height={80} width={80} className="h-[500px] max-w-[400px] w-full object-cover rounded-[32px]" />
          </div>
        </div>
      </section>
      {/* --------------------------------- */}
      {/* --------------------------------- */}
      <section className="flex justify-center relative bg-[url('/fond-valeurs.png')] bg-cover bg-no-repeat w-[100%] py-14">
        {/* <img alt="" src="/fond-valeurs.png" width={100} height={150} className="tabletx1:h-[700px] w-[100%] object-cover" /> */}
        <div className="flex flex-col items-center justify-center max-w-[1000px] w-full">
          <h2 className="text-center text-[36px] text-[#122a3a] font-corben">Nos Valeurs: <br />la personnalisation de nos Formations</h2>
          <div className="flex justify-evenly flex-wrap gap-4 mt-8 w-full">
            <div className="w-[300px] bg-[#ff6e3b] rounded-[32px] p-8 text-white">
              <p className="font-bold text-[42px] italic">01</p>
              <p className="font-bold text-[30px] leading-8 mt-4">Vous partage<br /> notre éthique</p>
              <p className="text-[18px] mt-8 text-justify">Parce que votre bien-être passe par des pratiques fondées sur la science et le respect de votre équilibre, nous vous accompagnons avec intégrité et bienveillance.</p>
            </div>

            <div className="w-[300px] bg-[#ff6e3b] rounded-[32px] p-8 text-white">
              <p className="font-bold text-[42px] italic">02</p>
              <p className="font-bold text-[30px] leading-8 mt-4">Vous êtes unique</p>
              <p className="text-[18px] mt-8 text-justify">Votre parcours, vos besoins et vos objectifs vous identifient: nous vous accompagnons en concevant des Formations sur mesure pour répondre à votre singularité.</p>
            </div>

            <div className="w-[300px] bg-[#ff6e3b] rounded-[32px] p-8 text-white">
              <p className="font-bold text-[42px] italic">03</p>
              <p className="font-bold text-[30px] leading-8 mt-4">Votre personnalité<br /> prime</p>
              <p className="text-[18px] mt-8 text-justify">Bien manger, bien penser, bien vivre : ici, nous adaptons les neuronutrisciences à votre mode de vie, et non l inverse, pour révéler le meilleur de vous-même.</p>
            </div>
          </div>
        </div>
      </section>
      {/* --------------------------------- */}
      {/* --------------------------------- */}
      <section className="flex justify-center py-8">
        <div className="flex items-center justify-center flex-col tabletx1:flex-row gap-4 max-w-[1000px] w-full px-4">
          <div className="w-[300px] h-[400px] tabletx1:w-[400px] tabletx1:h-[600px] p-4">
            <img alt="" src="/pessoas-como-base-do-sucesso.jpeg" width={100} height={100} className="h-full w-full object-cover rounded-[32px]" />
          </div>
          <div className="w-full max-w-[450px] flex flex-col justify-center">
            <div>
              <h2 className="text-[32px] font-corben leading-10">
                Nos Missions: <br />
                en priorité, combattre<br />
                l’absentéisme et le turn-over
              </h2>

              <p className="mt-8">La raison d’être de Mon Meilleur Avatar:</p>
              <ul className="list-disc ml-8">
                <li>combattre l’absentéisme et le turn-over</li>
                <li>améliorer la qualité de vie et les conditions de travail des collaborateurs dans l’entreprise</li>
                <li>lutter contre l’obésité</li>
                <li>promouvoir l’accès à une éducation de qualité</li>
                <li>développer l’engagement</li>
                <li>favoriser la santé et le bien-être</li>
                <li>promouvoir l’innovation frugale</li>
              </ul>
              <p className="text-end mt-4">Mon Meilleur @vatar,<br /> entreprise à mission</p>
            </div>
          </div>
        </div>
      </section>
      {/* --------------------------------- */}
      < Footer />
    </div >
  );
}
