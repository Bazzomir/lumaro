import { useState, useEffect, useRef } from 'react';
import Lottie from "lottie-react";
import { Button } from '../../component/buttons';
import scrollDownAnimation from '../../../assets/animation/scrollDown.json';

export default function Homepage() {

    const [isLottieVisible, setIsLottieVisible] = useState(true);
    const homepageRef = useRef(null);

    useEffect(() => {

        const onScroll = () => {
            const rect = homepageRef.current?.getBoundingClientRect();
            if (rect?.bottom < window.innerHeight / 3) setIsLottieVisible(false);
        };

        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const scrollToServices = () => {
        document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
        setIsLottieVisible(false);
    };

    return (
        <section className="homepage container-fluid pt-6 px-120 h-100 box-sizing overflow-hidden relative" id="home" ref={homepageRef}>
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
                {isLottieVisible && (
                    <Lottie
                        animationData={scrollDownAnimation}
                        loop={true}
                        className="scrollDownAnimation fixed-bottom mx-auto cursor-pointer"
                        onClick={scrollToServices}
                    />
                )}
            </div>
        </section>
    );
}
