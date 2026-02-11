import React from "react";
import HeroSection from "../components/HeroSection";
import CardSection from "../components/CardSection";

const Home: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen mt-12">
      {/* Hero Section */}
      <HeroSection />

      {/* Content Section */}
      <section className="py-16 px-6 md:px-20 bg-white text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-10">
          Welcome to Our Church Family 🙏
        </h2>

        <p className="text-gray-600 max-w-3xl mx-auto mb-8">
          “Where faith grows, hope shines, and love abounds.” We’re glad you’re
          here — explore sermons, announcements, and upcoming programs to stay
          connected with our community.
        </p>

        {/* Quick Navigation Buttons */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12">
          <CardSection
            title="Sermons"
            description="Watch or listen to our recent sermons and teachings."
            link="/sermons"
          />
          <CardSection
            title="Announcements"
            description="Stay updated on the latest church news and activities."
            link="/announcements"
          />
          <CardSection
            title="Prayers"
            description="Access daily devotions or submit a prayer request."
            link="/prayers"
          />
          <CardSection
            title="Programs & Events"
            description="Join our Bible studies, services, and upcoming church events."
            link="/programs"
          />
          <CardSection
            title="Media"
            description="Browse our gallery of church photos and videos."
            link="/media"
          />
          <CardSection
            title="Livestream"
            description="Watch our live services and be part of the worship."
            link="/livestream"
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
