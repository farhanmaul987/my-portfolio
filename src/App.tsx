import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import HomePage from "@/components/pages/HomePage";
import TimelinePage from "@/components/pages/TimelinePage";
import BlogPage from "@/components/pages/BlogPage";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-bg text-text">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/timeline" element={<TimelinePage />} />
          <Route path="/blog" element={<BlogPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
