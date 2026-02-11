export default function About() {
  return (
    <div className="p-10 text-center mt-12">
      <h2 className="text-3xl font-bold text-churchBlue mb-6 font-heading">
        About Grace Fellowship Church
      </h2>
      <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed">
        Grace Fellowship Church is a Christ-centered community dedicated to
        spreading love, hope, and faith. Our mission is to nurture spiritual
        growth, serve our community, and glorify God in everything we do.
      </p>
      <div className="grid md:grid-cols-3 gap-6 mt-10">
        <div className="bg-white shadow-md rounded-xl p-6">
          <h3 className="text-xl font-semibold text-churchGold mb-2">
            Our Vision
          </h3>
          <p className="text-gray-600">
            To see every life transformed by the power of the Gospel.
          </p>
        </div>
        <div className="bg-white shadow-md rounded-xl p-6">
          <h3 className="text-xl font-semibold text-churchGold mb-2">
            Our Mission
          </h3>
          <p className="text-gray-600">
            To reach, teach, and nurture believers into disciples of Christ.
          </p>
        </div>
        <div className="bg-white shadow-md rounded-xl p-6">
          <h3 className="text-xl font-semibold text-churchGold mb-2">
            Our Values
          </h3>
          <p className="text-gray-600">
            Faith, Love, Integrity, Service, and Unity in the body of Christ.
          </p>
        </div>
      </div>
    </div>
  );
}
