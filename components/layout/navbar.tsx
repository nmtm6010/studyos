
import Image from "next/image";
import NavLink from "./NavLink";
export default function Navbar() {
  return (
    <nav className="flex justify-between items-center border-b-10 border-b-green-700/60 bg-gray-200 pb-0">
      <Image src="/studyos2.png" alt="Logo" width={80} height={30}/>
<NavLink href="/home" className="relative group text-3xl font-bold font-serif text-green-700 hover:bg-gray-300 py-6 transition-colors">Home<span className="absolute left-0 -bottom-1 h-1 w-0 bg-green-700 transition-all duration-300 group-hover:w-full"></span></NavLink>
<NavLink className="relative group text-3xl font-bold font-serif text-green-700 hover:bg-gray-300 py-6 transition-colors" href="/assignments">Assignments <span className="absolute left-0 -bottom-1 h-1 w-0 bg-green-700 transition-all duration-300 group-hover:w-full"></span></NavLink>
<NavLink className="relative group text-3xl font-bold font-serif text-green-700 hover:bg-gray-300 py-6 transition-colors" href="/calendar">Calendar<span className="absolute left-0 -bottom-1 h-1 w-0 bg-green-700 transition-all duration-300 group-hover:w-full"></span></NavLink>
<NavLink className="relative group text-3xl font-bold font-serif text-green-700 hover:bg-gray-300 py-6 transition-colors" href="/dashboard">Dashboard<span className="absolute left-0 -bottom-1 h-1 w-0 bg-green-700 transition-all duration-300 group-hover:w-full"></span></NavLink>
<NavLink className="relative group text-3xl font-bold font-serif text-green-700 hover:bg-gray-300 py-6 transition-colors" href="/study">Study<span className="absolute left-0 -bottom-1 h-1 w-0 bg-green-700 transition-all duration-300 group-hover:w-full"></span></NavLink>
<NavLink className="relative group text-3xl font-bold font-serif text-green-700 hover:bg-gray-300 py-6 transition-colors" href="/settings">Settings<span className="absolute left-0 -bottom-1 h-1 w-0 bg-green-700 transition-all duration-300 group-hover:w-full"></span></NavLink>
    </nav>
  );
}