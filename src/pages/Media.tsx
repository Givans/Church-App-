export default function Media() {
  const images = ["/worship.jpg", "/sermon.jpg", "/9.jpg", "/b.jpg"];

  return (
    <div className="p-10 mt-12">
      <h2 className="text-3xl font-bold text-blue-700 text-center mb-8">
        Church Media Gallery
      </h2>
      <div className="grid md:grid-cols-4 gap-6">
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt="church-media"
            className="rounded-xl shadow-lg hover:scale-105 transition-transform"
          />
        ))}
      </div>
    </div>
  );
}
