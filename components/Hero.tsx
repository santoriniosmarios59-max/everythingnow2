"use client";
import { useEffect } from "react";

export default function Hero() {
  useEffect(() => {
    // Φορτώνουμε το lottie-player script μόνο στον client
    const script = document.createElement("script");
    script.src =
      "https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <section className="w-full min-h-[60vh] flex items-center justify-center">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-8 px-6">
        <div className="flex-1">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            EverythingNow —{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
              the future of social & tools
            </span>
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-xl">
            One place for content, commerce and community — live feeds, 3D
            visuals, streams and monetization tools.
          </p>

          <div className="mt-8 flex gap-3">
            <a
              className="px-5 py-3 bg-purple-600 text-white rounded-full shadow"
              href="/register"
            >
              Create account
            </a>
            <a
              className="px-5 py-3 border rounded-full text-gray-700"
              href="/about"
            >
              Learn more
            </a>
          </div>

          <div className="mt-6 text-sm text-gray-500">
            <strong>Monetize:</strong> Clicks, views, memberships, tips — built
            in.
          </div>
        </div>

        <div className="flex-1 flex justify-center">
          <div
            className="w-full max-w-md"
            // 👇 Build-safe Lottie embed (TS does NOT check unknown tags)
            dangerouslySetInnerHTML={{
              __html: `
                <lottie-player
                  src="https://assets10.lottiefiles.com/packages/lf20_jcikwtux.json"
                  background="transparent"
                  speed="1"
                  loop
                  autoplay
                  style="width: 100%; height: 100%;"
                ></lottie-player>
              `,
            }}
          />
        </div>
      </div>
    </section>
  );
}
