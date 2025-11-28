import { useData } from '../../../hooks/useData.js';
import { ServicesCard } from '../../component/cards';
import { LoadingAnimation } from '../../component/animations.jsx';
import { HighlightedText, Section } from '../../component/PageElements.jsx';
import ConsultingIcon from '../../../assets/icons/consulting.svg';
import DevelopmentIcon from '../../../assets/icons/development.svg';
import QualityIcon from '../../../assets/icons/quality.svg';
import MobileIcon from '../../../assets/icons/mobile.svg';
import CreativeIcon from '../../../assets/icons/creative.svg';

const iconMap = {
    'consulting': ConsultingIcon,
    'development': DevelopmentIcon,
    'quality': QualityIcon,
    'mobile': MobileIcon,
    'creative': CreativeIcon,
};

export default function Services() {

    const { data, isLoading, error } = useData();

    if (isLoading) return <LoadingAnimation />
    if (error) return <p>{error.message}</p>

    const servicesData = data.services;

    return (
        <Section className="services" id="services">
            <div className="pt-5 pt-lg-3">
                <div className="row" data-aos="fade-up-right">
                    <h2 className="header-text--big text-center">
                        <HighlightedText text={servicesData.header.title} />
                    </h2>
                    <p className="services--paragraph text-center">
                        {servicesData.header.paragraph}
                    </p>
                </div>
                <div className="row py-3">
                    {servicesData.cardItems.map((service, i) => {
                        const IconPath = iconMap[service.icon];
                        return (
                            <div key={i} className="col-md-6 col-lg-4 my-4" data-aos="zoom-in" data-aos-duration="1100">
                                <ServicesCard
                                    category={service.category}
                                    description={service.description}
                                    offerings={service.offerings}
                                    iconPath={IconPath}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </Section>
    );
}
