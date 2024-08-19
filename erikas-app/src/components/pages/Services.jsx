import React, { useEffect, useState } from 'react';
import { ServicesCard } from '../component/cards';
import ConsultingIcon from '../../assets/image/icons/consulting.svg';
import DevelopmentIcon from '../../assets/image/icons/development.svg';
import QualityIcon from '../../assets/image/icons/quality.svg';
import MobileIcon from '../../assets/image/icons/mobile.svg';
import CreativeIcon from '../../assets/image/icons/creative.svg';

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
        <div className="services container mt-5">
            <div className="row">
                <h2 className="services--header text-center">Our Services</h2>
                <p className="services--paragraph text-center">Welcome to our website</p>
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
    );
}
