"use client";

export default function Features() {
  const features = [
    {
      title: "Watch Videos",
      desc: "Enjoy a feed similar to YouTube and TikTok combined.",
    },
    {
      title: "Connect with People",
      desc: "Chat, follow, post, and connect—just like Facebook + Instagram.",
    },
    {
      title: "AI Tools",
      desc: "Use smart tools, AI chat, image generation and more.",
    },
    {
      title: "Earn Money",
      desc: "Earn from views, clicks, referrals and more.",
    },
  ];

  return (
    <section className="w-full py-20 bg-gray-100 flex flex-col items-center">
      <h2 className="text-4xl font-bold mb-10">What You Can Do</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 px-6 max-w-6xl">
        {features.map((f, i) => (
          <div
            key={i}
            className="p-6 bg-white rounded-xl shadow-lg hover:scale-105 transition transform duration-300"
          >
            <h3 className="text-2xl font-semibold mb-3">{f.title}</h3>
            <p className="text-gray-600">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
