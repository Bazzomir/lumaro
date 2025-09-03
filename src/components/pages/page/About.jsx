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

    const [ref, inView] = useInView({ threshold: [0, 0.25, 0.5, 0.75] });
    const { data, isLoading, error } = useData();

    if (isLoading) return <LoadingAnimation />;
    if (error) return <p>{error.message}</p>;

    const aboutData = data.about;

    return (
        // <section className="about container-fluid my-5 pt-6 px-120 h-100 box-sizing overflow-hidden" id="about">
        <Section className="about" id="about">
            <div className="row justify-content-center align-items-center">
                <div className="col-12 col-lg-6">
                    <h2 className="mb-0 mx-0 mx-sm-auto text-center text-md-start header-text--big" data-aos="fade-right" data-aos-anchor-placement="center">
                    {/* <h2 className="mb-0 mx-0 mx-sm-auto text-center text-md-start header-text--big" > */}
                        <HighlightedText text={aboutData.header.title} />
                    </h2>
                </div>
                <div className="col-12 col-lg-6 position-relative">
                    <div className="bg-triangle" data-aos="fade-top" aria-hidden="true"></div>
                    {/* <div className="bg-triangle" aria-hidden="true"></div> */}
                    <div ref={ref} className={`aboutAnimation ${inView ? "fade-in-visible" : "fade-in-hidden"}`}>
                        <AboutAnimation />
                    </div>
                </div>

            </div>
            <div className="row justify-content-center align-items-center pt-5">
                <div className="col-12 mt-3">
                    <h3 className="text-center p-3 mb-0 header-text--small" data-aos="fade-down">
                    {/* <h3 className="text-center p-3 mb-0 header-text--small"> */}
                        <HighlightedText text={aboutData.header.subtitle} />
                    </h3>
                </div>
                <div className="col-12 pt-4">
                    <div className="row p-0 m-0 justify-content-around align-items-center">
                        {aboutData.cardItems.map((card, i) => {
                            const IconPath = iconMap[card.icon];
                            return (
                                // <div key={i} className="col-md-6 col-lg-3 my-4 h-100" data-aos="zoom-in">
                                <div key={i} className="col-md-6 col-lg-3 my-4 h-100" >
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
