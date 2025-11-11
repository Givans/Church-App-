import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you ${form.name}, we’ll get back to you soon!`);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="p-10 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-churchBlue text-center mb-6 font-heading">
        Contact Us
      </h2>
      <p className="text-center text-gray-700 mb-8">
        Have a question, prayer request, or testimony? We’d love to hear from
        you!
      </p>

      <form
        onSubmit={handleSubmit}
        className="space-y-6 bg-white shadow-md rounded-xl p-8"
      >
        <input
          type="text"
          placeholder="Your Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full border p-3 rounded-lg"
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="w-full border p-3 rounded-lg"
          required
        />
        <textarea
          placeholder="Your Message"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="w-full border p-3 rounded-lg"
          rows={5}
          required
        />
        <button
          type="submit"
          className="bg-churchBlue text-white px-8 py-3 rounded-lg hover:bg-blue-800 transition"
        >
          Send Message
        </button>
      </form>

      <div className="text-center mt-10">
        <p className="text-gray-600">
          📍 Grace Fellowship Church, Nairobi, Kenya
        </p>
        <p className="text-gray-600 mt-1">📞 +254 712 345 678</p>
        <p className="text-gray-600 mt-1">📧 info@gracefellowship.org</p>
      </div>
    </div>
  );
}
