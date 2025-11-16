export default function Footer() {
  return (
    <footer className="w-full border-t mt-16">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between gap-6">
        <div>
          <div className="font-bold text-lg">EverythingNow</div>
          <div className="text-sm text-gray-500 mt-2">Build your audience. Monetize ethically.</div>
        </div>

        <div className="flex gap-6 items-center">
          <a href="#" aria-label="Twitter" className="text-gray-600 hover:text-black">Twitter</a>
          <a href="#" aria-label="YouTube" className="text-gray-600 hover:text-black">YouTube</a>
          <a href="#" aria-label="Instagram" className="text-gray-600 hover:text-black">Instagram</a>
          <a href="#" aria-label="Twitch" className="text-gray-600 hover:text-black">Twitch</a>
        </div>

        <div className="text-right">
          <div className="text-sm">© {new Date().getFullYear()} EverythingNow</div>
          <div className="text-xs text-gray-500 mt-2">Built for creators & communities</div>
        </div>
      </div>
    </footer>
  );
}
