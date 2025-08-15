import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Header from "../component/Header";
import Homepage from "./page/Homepage";
import Services from "./page/Services";
import About from "./page/About";
import Contact from "./page/Contact";
import Footer from "../component/Footer";
import AOS from "aos";

function Main() {
  const [activeLink, setActiveLink] = useState("home");
  const [manualScroll, setManualScroll] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // AOS анимации
    AOS.init({ duration: 1000, once: false });
    AOS.refresh();

    // Скрол до секцијата според URL
    const sectionId = location.pathname.replace("/lumaro/", "") || "home";
    const section = document.getElementById(sectionId);
    if (section) {
      setManualScroll(true); // блокирај observer за време на скрол
      section.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => setManualScroll(false), 500); // по скрол дозволи observer
    }

    // IntersectionObserver за scroll-spy
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        if (manualScroll) return; // ако е кликано, игнорирај
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");
            setActiveLink(id);
            navigate(`/lumaro/${id}`, { replace: true });
          }
        });
      },
      { rootMargin: "-30% 0px -70% 0px" }
    );

    sections.forEach((sec) => observer.observe(sec));

    return () => observer.disconnect();
  }, [location.pathname, navigate, manualScroll]);

  return (
    <>
      <Header activeLink={activeLink} setActiveLink={setActiveLink} />
      <Homepage />
      <Services />
      <About />
      <Contact />
      <Footer activeLink={activeLink} setActiveLink={setActiveLink} />
    </>
  );
}

export default Main;
