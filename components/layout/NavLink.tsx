"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export default function NavLink({ href, children, className = "" }: Props) {
  const pathname = usePathname();

  const isActive =
    href === "/"
      ? pathname === "/"
      : pathname.startsWith(href);

  return (
    <Link
      href={href}
      className={`
  ${className}
  ${isActive ? "border-b-4 border-green-700 bg-[#dadde2] text-green-700 py-5" : ""}
`}
    >
      {children}
    </Link>
  );
}