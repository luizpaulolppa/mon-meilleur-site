import Link from "next/link";

type Props = {
  children: React.ReactNode
  href: string
  type?: "green" | "blue" | "orange"
  className?: string
  target?: '_blank' | '_self' | '_parent' | '_top'
}

export function BadgeLink({ children, href, type = "orange", target = '_blank' }: Props) {
  if (type == "blue") {
    return (
      <Link href={href} target={target} className="bg-[#4187F5] rounded-[24px] cursor-pointer font-bold text-white px-4 py-2 text-[18px] max-w-max">
        {children}
      </Link>
    )
  }

  if (type == "orange") {
    return (
      <Link href={href} target={target} className="bg-[#ff6e3b] rounded-[24px] cursor-pointer font-bold text-white px-4 py-2 text-[18px] max-w-max">
        {children}
      </Link>
    )
  }

  return (
    <Link href={href} target={target} className="bg-[#6EBEA0] rounded-[24px] cursor-pointer font-bold text-white px-4 py-2 text-[18px] max-w-max">
      {children}
    </Link>
  )
}
