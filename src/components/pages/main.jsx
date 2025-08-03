import { useState } from 'react';
import Header from '../component/Header';
import Homepage from './page/Homepage';
import Services from './page/Services';
import About from './page/About';
import Contact from './page/Contact';
import Footer from '../component/Footer';

function Main() {

  const [activeLink, setActiveLink] = useState('home');

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
