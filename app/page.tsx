import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Nav />
      <Hero />

      <section className="w-full max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold">Live feeds & Streams</h2>
        <p className="mt-3 text-gray-600">Connect YouTube, Twitch, Instagram, TikTok and more — unified feed for creators and followers.</p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 border rounded-lg">
            <h3 className="font-semibold">Monetize</h3>
            <p className="mt-2 text-sm text-gray-600">Subscriptions, tips, pay-per-view and ad revenue split.</p>
          </div>
          <div className="p-6 border rounded-lg">
            <h3 className="font-semibold">3D Experiences</h3>
            <p className="mt-2 text-sm text-gray-600">Immersive visuals and animated scenes via Lottie & WebGL (phased rollout).</p>
          </div>
          <div className="p-6 border rounded-lg">
            <h3 className="font-semibold">Tools</h3>
            <p className="mt-2 text-sm text-gray-600">QR, polls, trending, analytics — built for creators.</p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
