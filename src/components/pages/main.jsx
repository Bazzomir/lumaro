import { useEffect, useState } from 'react';
import Header from '../component/Header';
import Homepage from './page/Homepage';
import Services from './page/Services';
import About from './page/About';
import Contact from './page/Contact';
import Footer from '../component/Footer';
import AOS from "aos";

function Main() {

  const [activeLink, setActiveLink] = useState('home');

  useEffect(() => {
    AOS.init({ duration: 1300, once: false });
    AOS.refresh();
  }, [])

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
