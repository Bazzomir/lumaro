import { useState, useEffect, useRef } from 'react';
import Lottie from 'react-lottie';
import { Button } from '../../component/buttons';
import scrollDownAnimation from '../../../assets/animation/scrollDown.json';

export default function Homepage() {

    const [isLottieVisible, setIsLottieVisible] = useState(true);
    const homepageRef = useRef(null);

    const handleScroll = () => {
        if (homepageRef.current) {
            const homePage = homepageRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight || document.documentElement.clientHeight;

            if (homePage.bottom < windowHeight / 2) {
                setIsLottieVisible(false);
            }
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: scrollDownAnimation,
        rendererSettings: {
            "preserveAspectRatio": "xMidYMid meet"
        }
    };

    return (
        <div className="homepage container-fluid mt-0 mt-md-5 px-120" id="home" ref={homepageRef}>
            <div className="row pt-5">
                <div className="col-12 col-lg-7  align-self-center">
                    <div className="row gap-3 gap-md-5 text-center text-md-start">
                        <div className="col-12">
                            <h1 className="m-0 header-text--big">
                                Shape Your Future with Global Innovation
                            </h1>
                        </div>
                        <div className="col-12">
                            <p className="m-0 homepage-smallText">Discover comprehensive talent, where every step forward is tailored to your vision.</p>
                        </div>
                        <Button btnName="Start Now" />
                    </div>
                </div>
                <div className="col-0 col-lg-5 d-none d-lg-block">
                    <div className="d-flex p-3 relative">
                        <img src="/lumaro/homepage.svg" alt="Homepage Image" className="homepage-image" />
                    </div>
                </div>
            </div>

            {isLottieVisible && (
                <Lottie
                    options={defaultOptions}
                    height={100}
                    width={100}
                />
            )}
        </div>
    );
}
