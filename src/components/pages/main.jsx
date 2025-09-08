import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { useScrollSpy } from "../../hooks/useScrollSpy";
import { LazyPage } from "./lazyPage";
import { Header } from "../component/Header";
import { Footer } from "../component/Footer";
import ContactForm from "./page/ContactForm";
// import { ContactForm } from "./page/ContactForm";

function Main() {
  const location = useLocation();
  const { activeId, scrollToId } = useScrollSpy();

  useEffect(() => {
    const path = location.pathname.replace(/^\/+|\/+$/g, "");
    const id = path || "home";

    if (id !== "home" && id !== "form") {
      requestAnimationFrame(() => {
        document
          .getElementById(id)
          ?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
  }, [location.pathname]);


  return (
    <>
      <Header activeLink={activeId} onNavClick={scrollToId} />
      {/* {location.pathname.includes("/form") ? <ContactForm /> : <LazyPage />} */}
      {/* <LazyPage /> */}
      <Routes>
        <Route path="*" element={<LazyPage />} />
        <Route path="/lumaro/form" element={<ContactForm />} />
      </Routes>
      <Footer activeLink={activeId} onNavClick={scrollToId} />
    </>
  );
}

export default Main;
