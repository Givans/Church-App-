import announcements from "../data/announcements";

export default function Announcements() {
  return (
    <div className="p-10 mt-12">
      <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">
        Church Announcements
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {announcements.map((item) => (
          <div key={item.id} className="bg-white shadow-lg rounded-xl p-6">
            <h3 className="text-xl font-semibold text-blue-600">
              {item.title}
            </h3>
            <p className="text-gray-700 mt-2">{item.date}</p>
            <p className="text-gray-600 mt-4">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
