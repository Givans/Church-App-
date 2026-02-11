export default function Livestream() {
  return (
    <div className="p-10 text-center mt-12">
      <h2 className="text-3xl font-bold text-blue-700 mb-4">
        Livestream Service
      </h2>
      <p className="text-gray-700 mb-6">Join our live worship every Sunday!</p>
      <div className="flex justify-center">
        <iframe
          width="800"
          height="450"
          src="https://www.youtube.com/embed/live_stream?channel=YOUR_CHANNEL_ID"
          title="Church Live Stream"
          allowFullScreen
          className="rounded-xl shadow-lg"
        ></iframe>
      </div>
    </div>
  );
}
