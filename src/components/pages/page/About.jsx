import { useData } from '../../../hooks/useData.js';
import { useInView } from '../../../hooks/useInView.js';
import { AboutCard } from '../../component/cards.jsx';
import { AboutAnimation, LoadingAnimation } from '../../component/animations.jsx';
import { HighlightedText, Section } from '../../component/PageElements.jsx';
import GlobalExpertiseIcon from '../../../assets/icons/gExpertise.svg';
import PrecisionIcon from '../../../assets/icons/precision.svg';
import EfficiencyIcon from '../../../assets/icons/efficiency.svg';
import ScalabilityIcon from '../../../assets/icons/scalability.svg';

const iconMap = {
    'gExpertise': GlobalExpertiseIcon,
    'precision': PrecisionIcon,
    'efficiency': EfficiencyIcon,
    'scalability': ScalabilityIcon,
};

export default function About() {

    const [ref, inView] = useInView({ threshold: 0.25 });
    const { data, isLoading, error } = useData();

    if (isLoading) return <LoadingAnimation />;
    if (error) return <p>{error.message}</p>;

    const aboutData = data.about;

    return (
        // <section className="about container-fluid my-5 pt-6 px-120 h-100 box-sizing overflow-hidden" id="about">
        <Section className="about" id="about">
            <div className="row justify-content-center align-items-center">
                <div className="col-12 col-lg-6 ">
                    {/* <h2 className="mb-0 mx-0 mx-sm-auto text-center text-md-start header-text--big w-100 w-lg-75" data-aos="fade-right">
                        <span className="text-purple">We're</span> Your Strategic Ally In The <span className="text-purple">Digital</span> IT World.
                    </h2> */}
                    <h2 className="mb-0 mx-0 mx-sm-auto text-center text-md-start header-text--big w-100 w-lg-75" data-aos="fade-right">
                        {/* {aboutData.header.title} */}
                        <HighlightedText text={aboutData.header.title} />
                    </h2>
                </div>
                <div ref={ref} className="col-12 col-lg-6 position-relative">
                    {inView && (
                        <>
                            <div className="bg-triangle" aria-hidden="true"></div>
                            <div className="aboutAnimation">
                                <AboutAnimation />
                            </div>
                        </>
                    )}
                </div>
            </div>
            <div className="row justify-content-center align-items-center pt-5">
                <div className="col-12 mt-3">
                    {/* <h3 className="text-center p-3 mb-0 header-text--small" data-aos="fade-down">
                        <span className="text-purple">Why</span> Work With <span className="text-purple">Us</span>
                    </h3> */}
                    <h3 className="text-center p-3 mb-0 header-text--small" data-aos="fade-down">
                        {/* {aboutData.header.subtitle} */}
                        <HighlightedText text={aboutData.header.subtitle} />
                    </h3>
                </div>
                <div className="col-12 pt-4">
                    <div className="row p-0 m-0 justify-content-around align-items-center">
                        {aboutData.cardItems.map((card, i) => {
                            const IconPath = iconMap[card.icon];
                            return (
                                <div key={i} className="col-md-6 col-lg-3 my-4 h-100" data-aos="zoom-in">
                                    {IconPath && (
                                        <AboutCard
                                            CardIcon={IconPath}
                                            category={card.category}
                                            description={card.description}
                                        />
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
            {/* </section> */}
        </Section>
    );
}
