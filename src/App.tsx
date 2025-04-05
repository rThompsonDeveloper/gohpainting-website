import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SEO from "./components/SEO";
import About from "./components/About";
import Projects from "./components/Projects";

// Custom scroll restoration component
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen bg-gray-50">
          <SEO
            title="GOHpainting - Professional Painting Services in Raleigh, NC"
            description="GOHpainting offers professional residential and commercial painting services in Raleigh, NC. Family-owned business with years of experience in interior and exterior painting."
          />
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <Services />
                  <Testimonials />
                  <Contact />
                </>
              }
            />
            <Route
              path="/about"
              element={
                <>
                  <SEO
                    title="About GOHpainting - Family-Owned Painting Company in Raleigh"
                    description="Learn about GOHpainting's story, our family-owned business values, and why we're the trusted choice for painting services in Raleigh, NC."
                  />
                  <About />
                  <Contact />
                </>
              }
            />
            <Route
              path="/projects"
              element={
                <>
                  <SEO
                    title="Our Projects - GOHpainting Portfolio"
                    description="View our portfolio of completed painting projects in Raleigh, NC. See examples of our residential and commercial painting work."
                  />
                  <Projects />
                  <Contact />
                </>
              }
            />
            <Route
              path="/services"
              element={
                <>
                  <SEO
                    title="Our Painting Services"
                    description="Explore our comprehensive range of painting services including residential, commercial, interior, and exterior painting in Raleigh, NC."
                    canonicalUrl="/services"
                  />
                  <Services />
                </>
              }
            />
            <Route
              path="/contact"
              element={
                <>
                  <SEO
                    title="Contact Us"
                    description="Get in touch with GOHpainting for a free quote on your painting project. Professional painting services in Raleigh, NC."
                    canonicalUrl="/contact"
                  />
                  <Contact />
                </>
              }
            />
            {/* Add more routes as needed */}
          </Routes>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
