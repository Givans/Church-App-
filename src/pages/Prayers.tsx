import { useState } from "react";

export default function Prayers() {
  const [prayers, setPrayers] = useState([
    { id: 1, name: "John", message: "Pray for my exams this week." },
    { id: 2, name: "Mary", message: "Thanking God for healing and family." },
  ]);

  const [form, setForm] = useState({ name: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.name && form.message) {
      setPrayers([...prayers, { id: Date.now(), ...form }]);
      setForm({ name: "", message: "" });
    }
  };

  return (
    <div className="p-10 mt-12">
      <h2 className="text-3xl font-bold text-blue-700 text-center mb-8">
        Prayer & Daily Devotion
      </h2>

      {/* Verse of the Day */}
      <section className="bg-blue-100 p-6 rounded-xl shadow-md mb-10 text-center">
        <p className="text-xl italic text-blue-900">
          “The Lord is my shepherd; I shall not want.”
        </p>
        <p className="text-gray-600 mt-2">— Psalm 23:1</p>
      </section>

      {/* Submit Prayer Form */}
      <section className="bg-white shadow-lg rounded-xl p-8 mb-10">
        <h3 className="text-2xl font-semibold mb-4 text-blue-700">
          Submit a Prayer Request
        </h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="border w-full p-3 rounded-lg"
          />
          <textarea
            placeholder="Write your prayer..."
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="border w-full p-3 rounded-lg"
            rows={4}
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Submit Prayer
          </button>
        </form>
      </section>

      {/* Prayer Wall */}
      <section>
        <h3 className="text-2xl font-semibold text-blue-700 mb-4">
          Prayer Wall
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {prayers.map((p) => (
            <div
              key={p.id}
              className="bg-gray-50 border rounded-lg p-4 shadow-sm"
            >
              <h4 className="font-semibold text-blue-800">{p.name}</h4>
              <p className="text-gray-700 mt-2">{p.message}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
