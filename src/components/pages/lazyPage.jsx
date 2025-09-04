import { lazy, Suspense, useEffect } from 'react';
import { LoadingAnimation } from '../component/animations.jsx';
import AOS from "aos";


const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
const Homepage = lazy(() =>
  delay(1000).then(() => import("./page/Homepage"))
);
// const Homepage = lazy(() => import("./page/Homepage"));
const Services = lazy(() => import("./page/Services"));
const About = lazy(() => import("./page/About"));
const Contact = lazy(() => import("./page/Contact"));

export const LazyPage = () => {

  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
    window.addEventListener("load", () => {
      AOS.refresh();
    });
  }, []);

  return (
    <>
      <Suspense fallback={<LoadingAnimation />}>
        <Homepage />
        <Services />
        <About />
        <Contact />
      </Suspense>
    </>
  );
};
