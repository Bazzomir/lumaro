import circle from '../../assets/image/icons/listCircle.svg';

export function ServicesCard({ category, description, offerings, iconPath }) {
    return (
        <div className="services-card gap-5 p-3 h-100 border shadow-sm rounded overflow-hidden box-sizing" data-aos="zoom-in-down" data-aos-duration="1100">
            <div className="services-card-body py-3 px-4">
                <div className="mb-3">
                    {iconPath && <img src={iconPath} alt={category} className="img-fluid" />}
                </div>
                <h3 className="services-card-body__title">{category}</h3>
                <p className="services-card-body__text text-muted">{description}</p>
                <ul className="list-group grid gap-0 row-gap-3 py-3" data-aos="fade-up" data-aos-duration="3000">
                    {offerings.map((offering, index) => (
                        <li key={index} className="d-flex">
                            <span className="me-2">
                                <img src={circle} alt="List Circle Icon" />
                            </span>
                            <span className="services-card-body__text">{offering}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export function ContactCard({ quote, fullName, avatarCard }) {
    return (
        <div className="contact-card-body rounded overflow-hidden box-sizing" data-aos="fade-up" data-aos-duration="1100">
            <p className="contact-card-body__text mx-auto mx-md-0 text-center text-lg-start">{quote}</p>
            <div className="col text-center text-lg-start pt-3">
                {avatarCard && <img src={avatarCard} alt={fullName} className="contact-card-body__avatar" />}
                <span className="contact-card-text__name">{fullName}</span>
            </div>
        </div>
    )
}

export function AboutCard({ category, description, CardIcon }) {
    return (
        <div className="about-card gap-5 p-3 shadow border-0 rounded h-screen overflow-hidden box-sizing" data-aos="flip-up" data-aos-duration="1500">
            <div className="about-card-body">
                <div className="mb-3">
                    {CardIcon && <img src={CardIcon} alt={category} className="img-fluid" />}
                </div>
                <h3 className="about-card-body__title">{category}</h3>
                <p className="about-card-body__text text-muted">{description}</p>
            </div>
        </div>
    );
}