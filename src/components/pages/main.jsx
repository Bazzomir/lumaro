import { useEffect, useState, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import AOS from "aos";
import Header from "../component/Header";
// import Homepage from "./page/Homepage";
// import Services from "./page/Services";
// import About from "./page/About";
// import Contact from "./page/Contact";
import Footer from "../component/Footer";
import LazyPage from "./lazyPage";

function Main() {
  const [activeLink, setActiveLink] = useState("home");
  const navigate = useNavigate();
  const location = useLocation();
  const isNavigatingRef = useRef(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: false });

    const path = location.pathname.replace(/^\/+|\/+$/g, "");
    setActiveLink(path.split("/").pop() || "home");

    const handleNavClick = (e) => {
      const navLink = e.target.closest("a.nav-link, a.navbar-brand, a.footer-nav-link");
      if (!navLink) return;

      e.preventDefault();

      const url = new URL(navLink.href);
      const id = url.pathname === "/lumaro" || url.pathname === "/lumaro/" ? "home" : url.pathname.split("/").pop() || "home";

      isNavigatingRef.current = true;

      if (id === "home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
      }

      setActiveLink(id);
      const path = id === "home" ? "/lumaro" : `/lumaro/${id}`;
      navigate(path, { replace: true });

      setTimeout(() => isNavigatingRef.current = false, 200);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (isNavigatingRef.current) return;

        const bestEntry = entries
          .filter(e => e.isIntersecting)
          .reduce((best, curr) => curr.intersectionRatio > (best?.intersectionRatio || 0) ? curr : best, null);

        if (bestEntry) {
          const id = bestEntry.target.id;
          if (id !== activeLink) {
            setActiveLink(id);
            const path = id === "home" ? "/lumaro" : `/lumaro/${id}`;
            navigate(path, { replace: true });
          }
        }
      },
      { rootMargin: "-45% 0px -55% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    document.querySelectorAll("section[id]").forEach(s => observer.observe(s));
    document.addEventListener("click", handleNavClick, true);

    return () => {
      observer.disconnect();
      document.removeEventListener("click", handleNavClick, true);
    };
  }, [location.pathname, navigate]);

  return (
    <>
      <Header activeLink={activeLink} setActiveLink={setActiveLink} />
      {/* <Suspense fallback={<div className="loading">Loading...</div>}>
        <Homepage />
        <Services />
        <About />
        <Contact />
      </Suspense> */}
      <LazyPage />
      <Footer activeLink={activeLink} setActiveLink={setActiveLink} />
    </>
  );
}

export default Main;