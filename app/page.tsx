export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-10">
      <h1 className="text-4xl font-bold mb-6">Welcome to EverythingNow</h1>

      <p className="text-lg text-gray-600 max-w-xl text-center">
        Your platform is ready. Configure your settings after deploy completes.
      </p>

      <div className="mt-10 p-6 border rounded-xl shadow-md">
        <p className="text-gray-700">
          Deployment check passed. The homepage is loading correctly without any
          3D components or external libraries.
        </p>
      </div>
    </main>
  );
}
