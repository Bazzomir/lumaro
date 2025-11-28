import { useState } from 'react';
import { useInView } from '../../../hooks/useInView.js';
import { useLocation, useNavigate } from 'react-router-dom';
import { useData } from '../../../hooks/useData.js';
import { Button, ScrollToTopBtn } from '../../component/PageElements.jsx';
import { ScrollDownAnimation, LoadingAnimation } from '../../component/animations.jsx';
import { HighlightedText, Section } from '../../component/PageElements.jsx';

export default function Homepage() {
    const [ref, inView] = useInView({ threshold: 0.25 });
    const navigate = useNavigate();
    const { data, isLoading, error } = useData();
    const [hideAnimation, setHideAnimation] = useState(false);
    const location = useLocation();

    if (isLoading) return <LoadingAnimation />;
    if (error) return <p>{error.message}</p>;

    const scrollToDown = () => {
        document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
        setHideAnimation(true);
    };

    const homepage = data.homepage;
    const isHome = location.pathname === "/lumaro" || location.pathname === "/lumaro/";
    const shouldShowAnimation = isHome && !hideAnimation && inView;

    return (
        <Section className="homepage" id="home">
            <div className="row pt-5 pt-lg-3" ref={ref}>
                <div className="col-12 col-lg-7">
                    <div className="row gap-3 gap-md-5 text-center text-md-start">
                        <div className="col-12">
                            <h1 className="m-0 header-text--big" data-aos="fade-up" data-aos-easing="ease-in-all" data-aos-anchor-placement="center-center">
                                <HighlightedText text={homepage.header.title} />
                            </h1>
                        </div>
                        <div className="col-12">
                            <p className="m-0 homepage-smallText" data-aos="fade-right">
                                {homepage.header.paragraph}
                            </p>
                        </div>
                        <div className="text-center text-md-start py-5" data-aos="fade-up-right">
                            <Button btnName="Start Now" classNameBtn="btn-purple text-uppercase" classNameSpan="btn-purple--text" onClick={() => navigate("/lumaro/form")} />
                        </div>
                    </div>
                </div>
                {shouldShowAnimation && (<ScrollDownAnimation onClick={scrollToDown} />)}
            </div>
            <ScrollToTopBtn />
        </Section>
    );
}
