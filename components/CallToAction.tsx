"use client";

export default function CallToAction() {
  return (
    <section className="w-full py-24 flex flex-col items-center text-center">
      <h2 className="text-4xl font-bold mb-6">
        Ready to Join <span className="text-purple-600">EverythingNow</span>?
      </h2>

      <p className="text-lg text-gray-600 max-w-2xl mb-8">
        Become part of the next-generation platform that merges every social
        experience into one powerful place.
      </p>

      <a
        href="/register"
        className="bg-purple-600 text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-purple-700 transition"
      >
        Create Your Account
      </a>
    </section>
  );
}
