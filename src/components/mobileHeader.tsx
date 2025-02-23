"use client"

import { useState } from "react"

/* eslint-disable @next/next/no-html-link-for-pages */
export function MobileHeader() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative flex lg:hidden items-center shadow-xl bg-[#4187F5] h-[76px] px-4">
      <img
        src="/menu-icon.png" alt="" className="h-[32px] w-[32px] cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      />
      {isOpen && (
        <div className="absolute top-0 left-0 w-full h-screen bg-[#4187F5] flex flex-col justify-center items-center">
          <ul className="flex flex-col items-center justify-between gap-4 max-w-[1000px] w-full text-white">
            <li className="flex flex-col items-center my-2">
              <a href="/" className="flex flex-col items-center">
                <img alt="" src="/android-chrome-192x192.png" width={56} height={56} className="min-w-[60px]" />
                {/* <p className="font-semibold text-[12px] text-white">Mon Meilleun @vatan</p> */}
              </a>
            </li>
            <li>
              <a href="/">
                <p className="text-[18px] font-bold">
                  Home
                </p>
              </a>
            </li>
            <li>
              <a href="/neuronutrisciences">
                <p className="text-[18px] font-bold">
                  Neuronutrisciences
                </p>
              </a>
            </li>
            <li>
              <a href="/notre-vision">
                <p className="text-[18px] font-bold">
                  Notre Vision
                </p>
              </a>
            </li>
            <li>
              <a href="/julie-arduin">
                <p className="text-[18px] font-bold">
                  Julie ARDUIN
                </p>
              </a>
            </li>
            <li>
              <a href="/notre-accompagnement">
                <p className="text-[18px] font-bold">
                  Notre Accompagnement
                </p>
              </a>
            </li>
            <li>
              <a href="/temoignages">
                <p className="text-[18px] font-bold">
                  Témoignages
                </p>
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}
