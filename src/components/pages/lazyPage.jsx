import { lazy, Suspense } from "react";
import Lottie from "lottie-react";
import ProgressBar from "../../assets/animation/ProgressBar.json";

// const Header = lazy(() => import("../component/Header"));
const Homepage = lazy(() => import("./page/Homepage"));
const Services = lazy(() => import("./page/Services"));
const About = lazy(() => import("./page/About"));
const Contact = lazy(() => import("./page/Contact"));
// const Footer = lazy(() => ("./component/Footer"));


export default function LazyPage() {

  
  return (
    <>
      <Suspense fallback={
        <Lottie
          animationData={ProgressBar}
          loop={true}
          className="flex justify-center items-center h-screen w-100 h-100"
          style={{height: "100px", width: "300px"}}
        />
      }>
        {/* <Header /> */}
        <Homepage />
        <Services />
        <About />
        <Contact />
        {/* <Footer /> */}
      </Suspense>
    </>
  );
}

// export default LazyPage;
