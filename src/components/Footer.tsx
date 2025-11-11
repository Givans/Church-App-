export default function Footer() {
  return (
    <footer className="bg-gray-500 text-white text-center py-6 mt-10">
      <p>
        © {new Date().getFullYear()} Grace Fellowship Church. All rights
        reserved.
      </p>
      <p className="text-sm mt-2">
        “Let everything that has breath praise the Lord.” — Psalm 150:6
      </p>
    </footer>
  );
}
