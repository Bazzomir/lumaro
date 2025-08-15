import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import Header from '../component/Header';
import Homepage from './page/Homepage';
import Services from './page/Services';
import About from './page/About';
import Contact from './page/Contact';
import Footer from '../component/Footer';
import AOS from "aos";

function Main() {

  const [activeLink, setActiveLink] = useState('home');
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
    AOS.refresh();

    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");
            setActiveLink(id);
            navigate(`#${id}`, { replace: true }); // го менува URL-то
          }
        });
      },
      { rootMargin: "-30% 0px -70% 0px" } // 50% од секцијата да биде видлива
    );

    sections.forEach((sec) => observer.observe(sec));

    return () => observer.disconnect();
  }, [navigate]);

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
