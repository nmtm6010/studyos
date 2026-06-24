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
  } else if (pathname === "/") {
  links = sidebarlinks.home;
}
  

return ( 
<aside className="w-80 border-r min-h-screen bg-gray-100"> 
  <nav className="flex flex-col"> 
    {links.map((link) =>
     ( <Link key={link.href} href={link.href} className="block w-full text-green-700 font-bold border-b-3 border-b-gray-400/60 py-5 pb-3 pl-8 text-xl hover:bg-gray-200 transition-colors">
       {link.name} 
       </Link> ))} 
       </nav> 
       </aside> 
       ); 
      }