import { useState } from 'react';
// import { useInView } from '../../../hooks/useInView.js';
import { useLocation } from 'react-router-dom';
import { useData } from '../../../hooks/useData.js';
import { Button } from '../../component/buttons';
import { ScrollDownAnimation, LoadingAnimation } from '../../component/animations.jsx';
import { HighlightedText, Section } from '../../component/PageElements.jsx';

export default function Homepage() {
    // const [ref, inView] = useInView({ threshold: 0.25 });
    const { data, isLoading, error } = useData();
    const [hideAnimation, setHideAnimation] = useState(false);
    const location = useLocation();

    if (isLoading) return <LoadingAnimation />;
    if (error) return <p>{error.message}</p>;

    const scrollToServices = () => {
        document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
        setHideAnimation(true);
    };

    const homepage = data.homepage;
    const isHome = location.pathname === "/lumaro" || location.pathname === "/lumaro/";
    const shouldShowAnimation = isHome && !hideAnimation;

    return (
        // <section className="homepage container-fluid pt-6 px-120 h-100 box-sizing overflow-hidden relative" id="home" >
        <Section className="homepage" id="home">
            <div className="row">
                <div className="col-12 col-lg-7">
                    <div className="row gap-3 gap-md-5 text-center text-md-start">
                        <div className="col-12">
                            <h1 className="m-0 header-text--big" data-aos="fade-up" data-aos-easing="ease-in-all" data-aos-anchor-placement="center-center">
                            {/* <h1 className="m-0 header-text--big"> */}
                                <HighlightedText text={homepage.header.title} />
                            </h1>
                        </div>
                        <div className="col-12">
                            <p className="m-0 homepage-smallText" data-aos="fade-right">
                            {/* <p className="m-0 homepage-smallText"> */}
                                {homepage.header.paragraph}
                            </p>
                        </div>
                        <Button btnName="Start Now" />
                    </div>
                </div>
                {shouldShowAnimation && (<ScrollDownAnimation onClick={scrollToServices} />)}
            </div>
            {/* </section> */}
        </Section>
    );
}
