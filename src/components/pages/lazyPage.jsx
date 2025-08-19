import { lazy, Suspense } from 'react';
import { LoadingAnimation } from '../component/animations.jsx';

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
const Homepage = lazy(() =>
  delay(1000).then(() => import("./page/Homepage"))
);
// const Homepage = lazy(() => import("./page/Homepage"));
const Services = lazy(() => import("./page/Services"));
const About = lazy(() => import("./page/About"));
const Contact = lazy(() => import("./page/Contact"));

export default function LazyPage() {

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
