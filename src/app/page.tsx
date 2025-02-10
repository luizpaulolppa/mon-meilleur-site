/* eslint-disable @next/next/no-img-element */
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="flex justify-center bg-contain bg-no-repeat">
        <div className="relative flex items-center gap-4 max-w-[1000px] w-full h-[500px] bg-[url(/bg-image.jpeg)] bg-cover bg-no-repeat bg-none">
          <img alt="" src="/openart-72f96036-7b17-4816-8dff-2afd5f0dee17.png" width={100} height={100} className="h-full w-full object-cover" />
          <div className="absolute right-[30] h-[500px] w-[450px] flex flex-col justify-center">
            <div>
              <p className="text-[28px] mb-4">Neurosciences & Nutrition</p>
              <h2 className="text-[42px] text-[#02acdb] font-bold leading-10 mb-4">Adoptez les <br />Neuronutrisciences: <br />un nouvel art de vivre</h2>
              <p className="mt-2 text-[18px] leading-6">Changez d’Ere : libérez le plein potentiel de vos dirigeants et managers en adoptant nos Formations de Neuronutrisciences, l’association dynamique des Neurosciences et de la Nutrition.</p>
              <div className="flex justify-between text-white font-bold mt-8 text-[18px]">
                <div className="bg-[#629a34] rounded-[16px] px-2 py-1 cursor-pointer">
                  Je suis un particulier
                </div>
                <div className="bg-[#629a34] rounded-[16px] px-2 py-1 cursor-pointer">
                  Je suis un particulier
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="">
        <div className="max-w-[1000px] w-full">
          Pourquoi associer les
          neurosciences à la nutrition ?
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
}
