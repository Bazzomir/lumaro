import { useEffect, useState } from 'react';
import { ServicesCard } from '../../component/cards';
import ConsultingIcon from '../../../assets/image/icons/consulting.svg';
import DevelopmentIcon from '../../../assets/image/icons/development.svg';
import QualityIcon from '../../../assets/image/icons/quality.svg';
import MobileIcon from '../../../assets/image/icons/mobile.svg';
import CreativeIcon from '../../../assets/image/icons/creative.svg';

const iconMap = {
    'consulting': ConsultingIcon,
    'development': DevelopmentIcon,
    'quality': QualityIcon,
    'mobile': MobileIcon,
    'creative': CreativeIcon,
};

export default function Services() {
    const [servicesData, setServicesData] = useState([]);

    useEffect(() => {
        fetch('/data.json')
            .then(res => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                return res.json();
            })
            .then(data => {
                setServicesData(data.services);
            })
            .catch(err => {
                console.error('Error fetching data:', err);
            });
    }, []);

    return (
        <div className="services container-fluid mt-5 px-120" id="services">
            <div className="container">
                <div className="row">
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
        </div>
    );
}
