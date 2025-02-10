import Image from "next/image";

export function Header() {
  return (
    <nav className="flex justify-center items-center bg-[#89dbef] shadow-lg">
      <ul className="flex items-center gap-4 max-w-[1000px] w-full">
        <li className="flex flex-col items-center my-2">
          <Image alt="" src="/logo.png" width={56} height={56} />
          <p className="font-semibold text-[12px]">Mon Meilleun @vatan</p>
        </li>
        <li>
          <p className="text-lg font-bold">Neuronutrisciences</p>
        </li>
        <li>
          <p className="text-lg font-bold">Notre Vision</p>
        </li>
        <li>
          <p className="text-lg font-bold">Julie ARDUIN</p>
        </li>
        <li>
          <p className="text-lg font-bold">Notre Accompagnement</p>
        </li>
        <li>
          <p className="text-lg font-bold">Témoignages</p>
        </li>
      </ul>
    </nav>
  )
}
