import { useState } from "react";
import { sermons } from "../data/sermons";

const Sermons = () => {
  const [selectedSermon, setSelectedSermon] = useState<any | null>(null);

  return (
    <div className="mt-12 bg-gradient-to-b from-blue-50 to-gray-100 min-h-screen text-gray-800 pb-16">
      {/* HERO SECTION */}
      <section className="text-center py-12 bg-blue-100 shadow-inner">
        <h1 className="text-4xl font-bold text-blue-800 mb-2">Our Sermons</h1>
        <p className="text-lg text-gray-700">
          Deepen your faith with weekly messages and reflections.
        </p>
      </section>

      {/* FEATURED SERMON VIDEO */}
      <section className="mt-10 px-6 flex flex-col items-center">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          🎥 Watch Latest Sermon
        </h2>
        <div className="w-full md:w-3/4 aspect-video rounded-2xl overflow-hidden shadow-lg border border-gray-200">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/hT0jD8CzgZw"
            title="Latest Sermon"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* SERMON LIST */}
      <section className="mt-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold mb-8 text-center text-blue-800">
          📖 Read & Reflect
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          {sermons.map((sermon) => (
            <div
              key={sermon.id}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-1">
                {sermon.title}
              </h3>
              <p className="text-sm italic text-gray-500 mb-2">
                📜 {sermon.verse}
              </p>
              <p className="text-gray-700 mb-3">
                {sermon.message.substring(0, 100)}...
              </p>
              <button
                onClick={() => setSelectedSermon(sermon)}
                className="text-blue-700 hover:text-blue-900 font-semibold"
              >
                Read More →
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* SERMON MODAL */}
      {selectedSermon && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center px-4 z-50">
          <div className="bg-white p-8 rounded-2xl shadow-lg max-w-2xl w-full relative">
            <button
              onClick={() => setSelectedSermon(null)}
              className="absolute top-3 right-3 text-gray-500 hover:text-red-500 font-bold text-lg"
            >
              ✕
            </button>
            <h2 className="text-2xl font-bold text-blue-800 mb-2">
              {selectedSermon.title}
            </h2>
            <p className="text-sm italic text-gray-500 mb-3">
              📖 {selectedSermon.verse}
            </p>
            <p className="text-gray-700 mb-4">{selectedSermon.message}</p>
            <p className="text-gray-600 italic">
              💭 {selectedSermon.reflection}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sermons;
