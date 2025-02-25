/* eslint-disable @next/next/no-img-element */
import { headers } from "next/headers";
import Link from "next/link";

import { tv } from "tailwind-variants";
import { MobileHeader } from "./mobileHeader";

const link = tv({
  base: 'text-lg text-black font-semibold hover:underline',
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

  return (
    <>
      <nav className="hidden lg:flex justify-center items-center bg-white h-[100px] shadow-md">
        <ul className="flex items-center justify-between gap-4 max-w-[1000px] w-full">
          <li className="flex flex-col items-center my-2">
            <Link href="/" className="flex flex-col items-center">
              <img alt="" src="/logo-01.svg" width={56} height={56} className="w-[130px]" />
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
      <MobileHeader />
    </>
  )
}
