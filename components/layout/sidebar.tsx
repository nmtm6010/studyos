"use client";
 import { useState } from "react";
  import Link from "next/link"; 
  import { usePathname } from "next/navigation"; 
  import { sidebarlinks } from "@/lib/sidebarlinks";
  import {ChevronRight, ChevronLeft} from "lucide-react";
   export default function Sidebar() {
     const pathname = usePathname(); 
     const [collapsed, setCollapsed] = useState(false); 
     let links: { name: string; href: string; icon: any }[] = [];
      if (pathname.startsWith("/dashboard")) { links = sidebarlinks.dashboard; }
       else if (pathname.startsWith("/assignments")) { links = sidebarlinks.assignments; } 
       else if (pathname.startsWith("/calendar")) { links = sidebarlinks.calendar; } 
       else if (pathname.startsWith("/home")) { links = sidebarlinks.home; }
       else if (pathname.startsWith("/study")) { links = sidebarlinks.study; }
        else if (pathname.startsWith("/settings")) { links = sidebarlinks.settings; } 
        else if (pathname === "/") { links = sidebarlinks.home; } 
        return (
           <aside className= {` ${collapsed ? "w-20" : "w-80"} border-r min-h-screen bg-gray-100 transition-all duration-300`}> 
           <nav className="flex flex-col"> 
            {links.map((link) => 
            { const Icon = link.icon; return (
               <Link key={link.href} href={link.href} className="block w-full text-green-700 font-bold border-b-3 border-b-gray-400/60 py-5 pb-3 pl-8 text-xl hover:bg-gray-200 transition-colors flex items-center gap-3" > 
               <Icon size={22} />{}
               {!collapsed && link.name}
               </Link>
               )})}
            <button
  onClick={() => setCollapsed(!collapsed)}
  className="block w-full text-green-700 font-bold border-b-3 border-b-gray-400/60 py-5 pb-3 pl-8 text-xl hover:bg-gray-200 transition-colors flex items-center gap-3"
>
  {collapsed ? <ChevronRight size="22"/> : <ChevronLeft size="22"/> }
</button>
        </nav> 
    </aside> ); }