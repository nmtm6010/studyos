import Link from "next/link";
import Image from "next/image";
export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-5 border-b-10 border-b-gray-300 bg-gray-200">
      <Image src="/studyos2.png" alt="Logo" width={80} height={30}/>
      <Link className="text-3xl font-bold font-serif text-green-700" href="/">Home</Link>
      <Link className="text-3xl font-bold font-serif text-green-700" href="/assignments">Assignments</Link>
      <Link className="text-3xl font-bold font-serif text-green-700" href="/calendar">Calendar</Link>
      <Link className="text-3xl font-bold font-serif text-green-700" href="/dashboard">Dashboard</Link>
      <Link className="text-3xl font-bold font-serif text-green-700" href="/quizzes">Quizzes</Link>
      <Link className="text-3xl font-bold font-serif text-green-700" href="/settings">Settings</Link>
    </nav>
  );
}