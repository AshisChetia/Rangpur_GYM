import { Routes, Route, useLocation } from "react-router-dom"
import { useLayoutEffect } from "react"
import Navbar from "./components/UI/Navbar"
import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import Services from "./pages/Services/Services"
import Access from "./pages/Access/Access"
import Footer from "./components/UI/Footer"

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useLayoutEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/access" element={<Access />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
