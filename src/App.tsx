import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Announcements from "./pages/Announcements";
import Prayers from "./pages/Prayers";
import Programs from "./pages/Programs";
import Media from "./pages/Media";
import Livestream from "./pages/Livestream";
import Giving from "./pages/Giving";
import Contact from "./pages/Contact";
import Sermons from "./pages/Sermons";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/announcements" element={<Announcements />} />
            <Route path="/prayers" element={<Prayers />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/media" element={<Media />} />
            <Route path="/livestream" element={<Livestream />} />
            <Route path="/giving" element={<Giving />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/sermons" element={<Sermons />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
