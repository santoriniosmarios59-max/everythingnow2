"use client";

export default function Hero() {
  return (
    <section className="w-full h-[80vh] flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-5xl font-bold mb-6">
        Welcome to <span className="text-purple-600">EverythingNow</span>
      </h1>

      <p className="text-xl text-gray-600 max-w-2xl mb-8">
        The all-in-one platform that merges social media, videos, streaming,
        messaging, tools and AI — everything in one beautiful place.
      </p>

      <a
        href="/register"
        className="bg-purple-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-purple-700 transition"
      >
        Join Now
      </a>
    </section>
  );
}
