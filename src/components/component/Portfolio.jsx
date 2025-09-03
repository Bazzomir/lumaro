import { useEffect } from 'react';

const portfolioProjects = [
    {
        id: 1,
        title: "E-Commerce Platform",
        description: "A modern e-commerce platform with React, Node.js, and Stripe integration. Features include user authentication, product catalog, and secure payments.",
        image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
        id: 2,
        title: "Task Management App",
        description: "A collaborative task management application built with React and Firebase. Real-time updates, team collaboration, and project tracking.",
        image: "https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
        id: 3,
        title: "Weather Dashboard",
        description: "An interactive weather dashboard with location-based forecasts, weather maps, and historical data visualization using D3.js.",
        image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800",
    }
];

const Portfolio = () => {
    useEffect(() => {
        // Initialize Bootstrap carousel with 3-second auto-rotation
        const carouselElement = document.querySelector('#portfolioCarousel');
        if (carouselElement && window.bootstrap) {
            new window.bootstrap.Carousel(carouselElement, {
                interval: 3000, // 3 seconds
                ride: 'carousel',
                pause: 'hover'
            });
        }
    }, []);

    return (
        <section className="py-5" data-aos="zoom-in">
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center mb-5">
                        <h2 className="display-4 fw-bold text-primary mb-3">Portfolio</h2>
                        <p className="lead text-muted">
                            Explore my latest work and creative projects built with modern technologies
                        </p>
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-12 col-lg-10">
                        {/* Bootstrap Carousel */}
                        <div
                            id="portfolioCarousel"
                            className="carousel slide shadow-lg rounded"
                            data-bs-ride="carousel"
                        >
                            {/* Indicators */}
                            <div className="carousel-indicators">
                                {portfolioProjects.map((_, index) => (
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

                            {/* Carousel Inner */}
                            <div className="carousel-inner rounded">
                                {portfolioProjects.map((project, index) => (
                                    <div
                                        key={project.id}
                                        className={`carousel-item ${index === 0 ? 'active' : ''}`}
                                    >
                                        <div className="row g-0 bg-white">
                                            {/* Project Image */}
                                            <div className="col-md-6">
                                                <img
                                                    src={project.image}
                                                    className="img-fluid w-100 h-100"
                                                    alt={project.title}
                                                    style={{
                                                        minHeight: '400px',
                                                        objectFit: 'cover'
                                                    }}
                                                />
                                            </div>

                                            {/* Project Details */}
                                            <div className="col-md-6 d-flex align-items-center">
                                                <div className="p-4 p-lg-5">
                                                    <h3 className="h2 fw-bold text-dark mb-3">
                                                        {project.title}
                                                    </h3>

                                                    <p className="text-muted mb-4" style={{ lineHeight: '1.75' }}>
                                                        {project.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Controls */}
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
            </div>
        </section>
    );
};

export default Portfolio;