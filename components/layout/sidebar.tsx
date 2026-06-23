"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { sidebarlinks } from "@/lib/sidebarlinks";

export default function Sidebar() {
  const pathname = usePathname();

let links: { name: string; href: string }[] = [];

  if (pathname.startsWith("/dashboard")) {
    links = sidebarlinks.dashboard;
  } else if (pathname.startsWith("/assignments")) {
    links = sidebarlinks.assignments;
  } else if (pathname.startsWith("/calendar")) {
    links = sidebarlinks.calendar;
  } else if (pathname.startsWith("/home")) {
    links = sidebarlinks.home;
  } else if (pathname.startsWith("/study")) {
    links = sidebarlinks.study;
  } else if (pathname.startsWith("/settings")) {
    links = sidebarlinks.settings;
  } 

  return (
    <aside className="w-64 border-r p-4">
      <nav className="flex flex-col gap-3">
        {links.map((link) => (
          <Link key={link.href} href={link.href}>
            {link.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
}