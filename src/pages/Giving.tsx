export default function Giving() {
  return (
    <div className="p-10 text-center">
      <h2 className="text-3xl font-bold text-blue-700 mb-4">
        Giving & Donations
      </h2>
      <p className="text-gray-600 mb-6">
        “Each of you should give what you have decided in your heart to give...”
        — 2 Corinthians 9:7
      </p>

      <div className="flex justify-center gap-8 flex-wrap">
        {["Tithe", "Offering", "Projects"].map((type) => (
          <button
            key={type}
            className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition"
          >
            {type}
          </button>
        ))}
      </div>

      <div className="mt-10 bg-gray-100 p-6 rounded-xl shadow-md inline-block">
        <p className="font-semibold text-lg mb-2 text-blue-700">
          Payment Options:
        </p>
        <p>
          M-Pesa PayBill: <span className="font-bold">123456</span>
        </p>
        <p>
          Account: <span className="font-bold">Grace Fellowship Church</span>
        </p>
      </div>
    </div>
  );
}
