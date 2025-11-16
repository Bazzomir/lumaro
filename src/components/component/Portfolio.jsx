import { useEffect } from 'react';
import { useData } from '../../hooks/useData.js';
import { LoadingAnimation } from './animations';
import { Section, HighlightedText } from '../component/PageElements.jsx';

// Импортите за слики
import eCommerceImg from '../../../public/image/portfolio/eCommerce.jpg';
import taskManagementImg from '../../../public/image/portfolio/taskManagement.jpg';
import insightIQImg from '../../../public/image/portfolio/insightIQ.jpg';
import finSyncImg from '../../../public/image/portfolio/finSync.jpg';
import smartHubImg from '../../../public/image/portfolio/smartHub.jpg';

const portfolioImage = {
    "eCommerce": eCommerceImg,
    "taskManagement": taskManagementImg,
    "insightIQ": insightIQImg,
    "finSync": finSyncImg,
    "smartHub": smartHubImg,
};

export default function Portfolio() {

    const { data, isLoading, error } = useData();

    useEffect(() => {
        const carouselElement = document.querySelector("#portfolioCarousel");
        if (carouselElement && window.bootstrap) {
            new window.bootstrap.Carousel(carouselElement, {
                interval: 3000,
                ride: "carousel",
                pause: "hover",
            });
        }
    }, []);

    if (isLoading) return <LoadingAnimation />;
    if (error) return <p>{error.message}</p>;

    const portfolioData = data.portfolio;
    const projects = portfolioData.projects;

    return (
        // <Section id="portfolio" className="portfolio py-5" data-aos="zoom-in">
        // <div className="container">
        <>
            <div className="row">
                <div className="col-12 my-3">
                    <h3 className="text-center p-3 mb-0 header-text--small" data-aos="fade-down">
                        <HighlightedText text={portfolioData.header.title} />
                    </h3>
                    <p className="lead text-center text-muted">
                        {portfolioData.header.paragraph}
                    </p>
                </div>
            </div>

            <div className="row justify-content-center">
                <div className="col-12">

                    <div
                        id="portfolioCarousel"
                        className="carousel slide shadow-lg rounded"
                        data-bs-ride="carousel"
                    >
                        <div className="carousel-indicators">
                            {projects.map((_, index) => (
                                <button
                                    key={index}
                                    type="button"
                                    data-bs-target="#portfolioCarousel"
                                    data-bs-slide-to={index}
                                    className={index === 0 ? "active" : ""}
                                    aria-current={index === 0 ? "true" : "false"}
                                    aria-label={`Slide ${index + 1}`}
                                ></button>
                            ))}
                        </div>

                        <div className="carousel-inner rounded">
                            {projects.map((project, index) => {
                                const Img = portfolioImage[project.image];

                                return (
                                    <div
                                        key={index}
                                        className={`carousel-item ${index === 0 ? "active" : ""}`}
                                    >
                                        <div className="row g-0 bg-white">
                                            {/* Image */}
                                            <div className="col-md-6">
                                                <img
                                                    src={Img}
                                                    className="img-fluid w-100 h-100"
                                                    alt={project.title}
                                                    style={{ minHeight: "400px", objectFit: "cover" }}
                                                />
                                            </div>

                                            {/* Text */}
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

                        <button
                            className="carousel-control-prev"
                            type="button"
                            data-bs-target="#portfolioCarousel"
                            data-bs-slide="prev"
                        >
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>

                        <button
                            className="carousel-control-next"
                            type="button"
                            data-bs-target="#portfolioCarousel"
                            data-bs-slide="next"
                        >
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>

                </div>
            </div>
        </>

        // </div>
        // </Section >
    );
}
