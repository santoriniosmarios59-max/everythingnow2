export default function HeroSmallCTA() {
  return (
    <div className="w-full bg-gradient-to-r from-purple-50 to-pink-50 py-6 mt-8">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <div>
          <div className="font-semibold">Want to monetize your content?</div>
          <div className="text-sm text-gray-600">Start earning from clicks, tips and memberships — we handle payouts securely.</div>
        </div>
        <a href="/register" className="px-4 py-2 bg-purple-600 text-white rounded">Get Started</a>
      </div>
    </div>
  );
}
