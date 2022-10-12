import React, { useEffect, useState } from "react";
import { Footer, Header, Home } from "./index";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AboutPage from "./Container/NavigatePages/AboutPage";
import PortfolioPage from "./Container/NavigatePages/PortfolioPage";
import BlogPage from "./Container/NavigatePages/BlogPage";
import ContactPage from "./Container/NavigatePages/ContactPage";
import LoadingScreen from "./pages/LoadingScreen";
import Thanks from "./pages/Thanks";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    window.onload = () => {
      setLoading(false);
    };
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/react-templates/tian" />} />
          <Route
            element={loading ? <LoadingScreen /> : <Home />}
            path="/react-templates/tian"
          />
          <Route
            path="/react-templates/tian/about"
            element={loading ? <LoadingScreen /> : <AboutPage />}
          />
          <Route
            element={loading ? <LoadingScreen /> : <PortfolioPage />}
            path="/react-templates/tian/portfolio"
          />
          <Route
            element={loading ? <LoadingScreen /> : <BlogPage />}
            path="/react-templates/tian/blog"
          />
          <Route
            element={loading ? <LoadingScreen /> : <ContactPage />}
            path="/react-templates/tian/contact"
          />
          <Route
            element={loading ? <LoadingScreen /> : <Thanks />}
            path="/react-templates/tian/thanks"
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
