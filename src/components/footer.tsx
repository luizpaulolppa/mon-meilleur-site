import Image from "next/image";

export function Footer() {
  return (
    <footer className="flex justify-center bg-[#4187F5] py-8">
      <div className="flex justify-between max-w-[1000px] w-full text-white">
        <div className="w-full">
          <p className="text-[22px] font-bold mb-2">Mon Meilleur @vatar</p>
          <p className="">31 B rue Santos Dumont</p>
          <p>75015 PARIS</p>
          <br />
          <p className="underline font-light">Mentions légales</p>
        </div>

        <div className="w-full">
          <p className="text-[22px] font-bold mb-2">Contact</p>
          <a href="tel:0614013655" className="font-light">06 14 01 36 55</a>
          <br />
          <a className="underline font-light" href="julie.arduin@outlook.com">julie.arduin@outlook.com</a>
          <br />
          <p className="underline font-light">CGV</p>
        </div>

        <div className="w-full">
          <p className="text-[22px] font-bold mb-2">Abonnez vous à la newsletter</p>
          <div className="flex w-full bg-white p-2 rounded-[38px]">
            <input type="text" placeholder="example@gmail.fr" className="w-full text-black outline-none pl-2" maxLength={50} />
            <Image alt="" src="/next.png" width={26} height={26} className="cursor-pointer" />
          </div>
          {/* <div className="flex gap-2 py-2">
            <input type="checkbox" name="conditions" id="conditions" />
            <label htmlFor="conditions">J’accepte les conditions</label>
          </div> */}
          <div className="flex justify-end gap-4 mt-4">
            <Image alt="" src="/facebook.png" width={26} height={26} />
            <Image alt="" src="/instagram.png" width={26} height={26} />
            <Image alt="" src="/linkedin.png" width={26} height={26} />
          </div>
        </div>
      </div>
    </footer>
  )
}
