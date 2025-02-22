/* eslint-disable @next/next/no-img-element */
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import Script from "next/script";

export default function Temoignages() {
  return (
    <div>
      <Script src="https://app.elogiou.com.br/js/iframeResizer.min.js" />
      <Script src="/elogiou.js" />
      <Header />
      {/* --------------------------------- */}
      <section className="flex justify-center mt-16 mb-40">
        <div className="flex flex-col max-w-[1000px] w-full">
          <h4 className="text-center mb-8 text-[34px] font-corben">Ils témoignent...</h4>
          {/* <ul className="flex justify-between">
            {[1, 2, 3].map((index) => (
              <li key={index} className="flex flex-col items-center w-[300px] bg-[#6EBEA0] rounded-[32px] text-white py-8 px-4">
                <img src="/menina-sorrindo.png" alt="Girl" className="w-[200px] rounded-full" />
                <h3 className="mt-4 text-[28px] font-semibold">Clara</h3>
                <p className="text-[18px]">PDG</p>
                <p className="text-justify mt-4">
                  Lorem ipsum dolor sit amet.
                  Vel aliquid sint eos maxime
                  corrupti non obcaecati
                  impedit cum debitis veritatis
                  quo harum asperiores cum
                  molestiae illum eum
                  numquam nihil.
                </p>
              </li>
            ))}
          </ul> */}
          <iframe id="elogiou-86008f7f-3c0c-4e2a-8f8b-d99694d44871" src="https://app.elogiou.com.br/embed/86008f7f-3c0c-4e2a-8f8b-d99694d44871" frameBorder="0" scrolling="no" width="100%" height="600px"></iframe>
        </div>
      </section>
      {/* --------------------------------- */}
      <Footer />
    </div>
  );
}
