import events from "../data/events";

export default function Programs() {
  return (
    <div className="p-10">
      <h2 className="text-3xl font-bold text-blue-700 text-center mb-6">
        Programs & Upcoming Events
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.map((event) => (
          <div key={event.id} className="bg-white shadow-lg p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-blue-600">
              {event.name}
            </h3>
            <p className="text-gray-600 mt-2">{event.date}</p>
            <p className="mt-3 text-gray-700">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
