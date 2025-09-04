import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useScrollSpy } from "../../hooks/useScrollSpy";
import { LazyPage } from "./lazyPage";
import { Header } from "../component/Header";
import { Footer } from "../component/Footer";
// import { ContactForm } from "./page/ContactForm";

function Main() {
  const location = useLocation();
  const { activeId, scrollToId } = useScrollSpy();

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
      {/* {location.pathname.includes("/form") ? <ContactForm /> : <LazyPage />} */}
      <LazyPage />
      <Footer activeLink={activeId} onNavClick={scrollToId} />
    </>
  );
}

export default Main;
