import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useScrollSpy } from "../../hooks/useScrollSpy";
import AOS from "aos";
import LazyPage from "./lazyPage";
import Header from "../component/Header";
import Footer from "../component/Footer";

function Main() {
  const location = useLocation();
  const { activeId, scrollToId } = useScrollSpy();

  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
    window.addEventListener("load", () => {
      AOS.refresh();
    });
  }, []);

  useEffect(() => {
    const path = location.pathname.replace(/^\/+|\/+$/g, "");
    const id = path.split("/").pop() || "home";

    if (id !== "home") {
      setTimeout(() => {
        document
          .getElementById(id)
          ?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  }, [location.pathname]);

  return (
    <>
      <Header activeLink={activeId} onNavClick={scrollToId} />
      <LazyPage />
      <Footer activeLink={activeId} onNavClick={scrollToId} />
    </>
  );
}

export default Main;
