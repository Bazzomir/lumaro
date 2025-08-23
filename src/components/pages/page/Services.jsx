import { useData } from '../../../hooks/useData.js';
import { ServicesCard } from '../../component/cards';
import { LoadingAnimation } from '../../component/animations.jsx';
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
        <section className="services container-fluid mt-6 pt-6 px-120 h-100 box-sizing overflow-hidden" id="services">
            <div className="container">
                <div className="row" data-aos="fade-up-right">
                    <h2 className="header-text--small text-center">Our Services</h2>
                    <p className="services--paragraph text-center">We're equipped to deliver with precison and expertise.</p>
                </div>
                <div className="row py-3">
                    {servicesData.map((service, i) => {
                        const IconPath = iconMap[service.icon];
                        return (
                            <div key={i} className="col-md-6 col-lg-4 my-4">
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
        </section>
    );
}
