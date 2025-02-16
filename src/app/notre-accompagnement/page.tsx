import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export default function NotreAccompagnement() {
  return (
    <div>
      <Header />
      {/* --------------------------------- */}
      <section className="flex justify-center my-14">
        <div className="flex items-center gap-8 max-w-[1000px] w-full">
          <div>
            <img alt="" src="/colegas-escritorio.jpg" width={100} height={150} className="h-[500px] min-w-[450px] object-cover rounded-[32px]" />
          </div>
          <div className="w-full">
            <h2 className="font-bold text-[34px] leading-10">
              Un accompagnement
              <br />
              sur mesure
            </h2>
            <p className="mt-6 text-justify text-[18px]">
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
      <section className="flex justify-center mt-16 bg-[#4187F5] py-16">
        <div className="flex items-center max-w-[1000px] w-full h-[500px] gap-4">
          <div className="w-full text-white">
            <h3 className="text-[28px] font-bold">
              Formation Neuronutrisciences
            </h3>
            <h3 className="text-[24px] font-bold">
              3h30min - 1000€
            </h3>
            <p className="mt-4">
              Lorem ipsum dolor sit amet. Vel aliquid sint eos maxime corrupti non obcaecati impedit cum debitis veritatis quo harum asperiores cum molestiae illum eum numquam nihil. Et quasi autem ut officiis odio non alias totam quo ipsum eaque vel porro repellat vel suscipit suscipit. Et quasi autem ut officiis odio non alias totam quo ipsum eaque vel porro repellat vel suscipit suscipit.
            </p>
            <div className="bg-[#6EBEA0] rounded-[16px] px-4 cursor-pointer max-w-fit text-white font-bold text-[18px] mt-8">
              Je réserve
            </div>
          </div>
          <div className="w-full">
            <img src="/palestrante.jpg" alt="Neuroscience" height={80} width={80} className="h-[500px] w-[300px] w-full object-cover rounded-[32px]" />
          </div>
        </div>
      </section>
      {/* --------------------------------- */}
      {/* --------------------------------- */}
      <section className="flex justify-center my-14">
        <div className="flex items-center gap-8 max-w-[1000px] w-full">
          <div>
            <img alt="" src="/duas-pessoas-estudando.jpg" width={100} height={150} className="h-[500px] min-w-[450px] object-cover rounded-[32px]" />
          </div>
          <div className="w-full">
            <h3 className="text-[28px] font-bold">
              Séance Individuelle
            </h3>
            <h3 className="text-[24px] font-bold">
              1h30min - 150€
            </h3>
            <p className="mt-6 text-justify text-[18px]">
              Lorem ipsum dolor sit amet. Vel aliquid sint eos maxime corrupti non obcaecati impedit cum debitis veritatis quo harum asperiores cum molestiae illum eum numquam nihil. Et quasi autem ut officiis odio non alias totam quo ipsum eaque vel porro repellat vel suscipit suscipit. Et quasi autem ut officiis odio non alias totam quo ipsum eaque vel porro repellat vel suscipit suscipit.
            </p>
            <div className="bg-[#6EBEA0] rounded-[16px] px-4 cursor-pointer max-w-fit text-white font-bold text-[18px] mt-8">
              Je réserve
            </div>
          </div>
        </div>
      </section>
      {/* --------------------------------- */}
      {/* --------------------------------- */}
      <section className="flex justify-center mt-16 bg-[#e490b6] py-16">
        <div className="flex items-center max-w-[1000px] w-full h-[500px] gap-4">
          <div className="w-full text-white">
            <h3 className="text-[28px] font-bold">
              Présentation de l’offre en ligne
            </h3>
            <h3 className="text-[24px] font-bold">
              1h - Gratuit
            </h3>
            <p className="mt-4">
              Lorem ipsum dolor sit amet. Vel aliquid sint eos maxime corrupti non obcaecati impedit cum debitis veritatis quo harum asperiores cum molestiae illum eum numquam nihil. Et quasi autem ut officiis odio non alias totam quo ipsum eaque vel porro repellat vel suscipit suscipit. Et quasi autem ut officiis odio non alias totam quo ipsum eaque vel porro repellat vel suscipit suscipit.
            </p>
            <div className="bg-[#6EBEA0] rounded-[16px] px-4 cursor-pointer max-w-fit text-white font-bold text-[18px] mt-8">
              Je réserve
            </div>
          </div>
          <div className="w-full">
            <img src="/menina-estudando.jpg" alt="Neuroscience" height={80} width={80} className="h-[500px] w-[300px] w-full object-cover rounded-[32px]" />
          </div>
        </div>
      </section>
      {/* --------------------------------- */}
      <Footer />
    </div>
  );
}
