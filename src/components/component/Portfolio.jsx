import { useEffect } from 'react';
import { useData } from '../../hooks/useData.js';
import { useInView } from '../../hooks/useInView.js';
import { LoadingAnimation } from './animations.jsx';
import { HighlightedText, CarouselControl } from '../component/PageElements.jsx';
import eCommerceImg from '../../assets/portfolio/eCommerce.jpg';
import taskManagementImg from '../../assets/portfolio/taskManagement.jpg';
import insightIQImg from '../../assets/portfolio/insightIQ.jpg';
import finSyncImg from '../../assets/portfolio/finSync.jpg';
import smartHubImg from '../../assets/portfolio/smartHub.jpg';

const portfolioImage = {
    eCommerce: eCommerceImg,
    taskManagement: taskManagementImg,
    insightIQ: insightIQImg,
    finSync: finSyncImg,
    smartHub: smartHubImg,
};

export default function Portfolio() {

    const { data, isLoading, error } = useData();
    const [ref, inView] = useInView({ threshold: 0.3 });

    useEffect(() => {
        const element = document.querySelector("#portfolioCarousel");
        if (!element || !window.bootstrap) return;

        const carousel = new window.bootstrap.Carousel(element, {
            interval: 3000,
            ride: false,
            pause: false
        });

        inView ? carousel.cycle() : carousel.pause();

        return () => { try { carousel.pause() } catch { } };
    }, [inView]);

    if (isLoading) return <LoadingAnimation />;
    if (error) return <p>{error.message}</p>;

    const portfolioData = data.portfolio;
    const projects = portfolioData.projects;

    return (
        <section>
            <div className="row">
                <div className="col-12 my-3" data-aos="fade-down">
                    <h3 className="text-center p-3 mb-0 header-text--small">
                        <HighlightedText text={portfolioData.header.title} />
                    </h3>
                    <p className="lead text-center main-paragraph-text text-muted">
                        {portfolioData.header.paragraph}
                    </p>
                </div>
            </div>

            <div className="row justify-content-center" data-aos="zoom-in">
                <div className="col-12">

                    <div id="portfolioCarousel" ref={ref} className="carousel slide shadow-lg rounded" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            {projects.map((_, index) => (
                                <button key={index} type="button" data-bs-target="#portfolioCarousel" data-bs-slide-to={index} className={index === 0 ? "active" : ""}></button>
                            ))}
                        </div>

                        <div className="carousel-inner rounded">
                            {projects.map((project, index) => {
                                const Img = portfolioImage[project.image];

                                return (
                                    <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                                        <div className="row g-0 bg-white">
                                            <div className="col-md-6">
                                                <img
                                                    src={Img}
                                                    className="img-fluid w-100 h-100"
                                                    alt={project.title}
                                                    style={{ minHeight: "400px", objectFit: "cover" }}
                                                />
                                            </div>

                                            <div className="col-md-6 d-flex align-items-center">
                                                <div className="p-4 p-lg-5">
                                                    <h3 className="h2 fw-bold text-dark mb-3">
                                                        {project.title}
                                                    </h3>

                                                    <p className="text-muted mb-4" style={{ lineHeight: "1.75" }}>
                                                        {project.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                        <CarouselControl direction="prev" target="#portfolioCarousel" />
                        <CarouselControl direction="next" target="#portfolioCarousel" />
                    </div>
                </div>
            </div>
        </section>
    );
}
