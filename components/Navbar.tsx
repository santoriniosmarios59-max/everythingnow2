"use client";
import Link from "next/link";

export default function Nav() {
  return (
    <nav className="w-full max-w-6xl mx-auto flex items-center justify-between py-6 px-6">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold">
          EN
        </div>
        <Link href="/" className="text-xl font-semibold">EverythingNow</Link>
      </div>

      <div className="flex items-center gap-4">
        <Link href="/about" className="text-sm hover:underline">About</Link>
        <Link href="/tools" className="text-sm hover:underline">Tools</Link>
        <Link href="/login" className="text-sm hover:underline">Login</Link>
        <Link href="/register" className="ml-3 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full text-sm">Get Started</Link>
      </div>
    </nav>
  );
}
