import { useState } from 'react';
// import { useInView } from '../../../hooks/useInView.js';
import { useLocation } from 'react-router-dom';
import { Button } from '../../component/buttons';
import { ScrollDownAnimation } from '../../component/animations.jsx';

export default function Homepage() {
    // const [ref, inView] = useInView({ threshold: 0.25 });
    const [hideAnimation, setHideAnimation] = useState(false);
    const location = useLocation();

    const scrollToServices = () => {
        document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
        setHideAnimation(true);
    };

    const isHome = location.pathname === "/lumaro" || location.pathname === "/lumaro/";
    const shouldShowAnimation = isHome && !hideAnimation;
    

    return (
        <section className="homepage container-fluid pt-6 px-120 h-100 box-sizing overflow-hidden relative" id="home" >
            <div className="row pt-5">
                <div className="col-12 col-lg-7 align-self-center">
                    <div className="row gap-3 gap-md-5 text-center text-md-start">
                        <div className="col-12">
                            <h1 className="m-0 header-text--big" data-aos="fade-up" data-aos-easing="ease-in-all" data-aos-anchor-placement="center-center">
                                <span className="text-purple">Shape</span> Your <span className="text-purple">Future</span> with Global <span className="text-purple">Innovation</span>
                            </h1>
                        </div>
                        <div className="col-12" data-aos="fade-up" data-aos-anchor-placement="center-bottom">
                            <p className="m-0 homepage-smallText">Discover comprehensive talent, where every step forward is tailored to your vision.</p>
                        </div>
                        <Button btnName="Start Now" />
                    </div>
                </div>
                {shouldShowAnimation && (<ScrollDownAnimation onClick={scrollToServices} />)}
            </div>
        </section>
    );
}
