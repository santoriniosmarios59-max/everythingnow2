"use client";

export default function Nav() {
  return (
    <nav className="w-full px-6 py-4 flex items-center justify-between bg-white shadow">
      <div className="text-2xl font-bold">EverythingNow</div>
      <div className="flex gap-4">
        <a href="/" className="hover:text-purple-600">Home</a>
        <a href="/about" className="hover:text-purple-600">About</a>
        <a href="/services" className="hover:text-purple-600">Services</a>
        <a href="/contact" className="hover:text-purple-600">Contact</a>
      </div>
    </nav>
  );
}
