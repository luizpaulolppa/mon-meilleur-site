/* eslint-disable @next/next/no-img-element */
import { headers } from "next/headers";
import Link from "next/link";

import { tv } from "tailwind-variants";

const link = tv({
  base: 'text-lg text-white font-semibold hover:underline',
  variants: {
    type: {
      selected: 'font-semibold underline',
      noSelected: '',
    }
  }
});

export async function Header() {
  const headerList = headers();
  const pathname = (await headerList).get("x-current-path") || "";
  console.log("pathname", pathname)

  return (
    <nav className="flex justify-center items-center bg-[#4187F5] shadow-xl">
      <ul className="flex items-center justify-between gap-4 max-w-[1000px] w-full">
        <li className="flex flex-col items-center my-2">
          <Link href="/" className="flex flex-col items-center">
            <img alt="" src="/android-chrome-192x192.png" width={56} height={56} className="min-w-[60px]" />
            {/* <p className="font-semibold text-[12px] text-white">Mon Meilleun @vatan</p> */}
          </Link>
        </li>
        <li>
          <Link href="/neuronutrisciences">
            <p className={link({ type: pathname.includes("neuronutrisciences") ? "selected" : "noSelected" })}>
              Neuronutrisciences
            </p>
          </Link>
        </li>
        <li>
          <Link href="/notre-vision">
            <p className={link({ type: pathname.includes("notre-vision") ? "selected" : "noSelected" })}>
              Notre Vision
            </p>
          </Link>
        </li>
        <li>
          <Link href="/julie-arduin">
            <p className={link({ type: pathname.includes("julie-arduin") ? "selected" : "noSelected" })}>
              Julie ARDUIN
            </p>
          </Link>
        </li>
        <li>
          <Link href="/notre-accompagnement">
            <p className={link({ type: pathname.includes("notre-accompagnement") ? "selected" : "noSelected" })}>
              Notre Accompagnement
            </p>
          </Link>
        </li>
        <li>
          <Link href="/temoignages">
            <p className={link({ type: pathname.includes("temoignages") ? "selected" : "noSelected" })}>
              Témoignages
            </p>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
