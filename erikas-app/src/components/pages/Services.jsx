import React, { useEffect, useState } from 'react';
import ServicesCard from '../component/ServicesCard';
import ConsultingIcon from '../../assets/image/icons/consulting.svg';
import DevelopmentIcon from '../../assets/image/icons/development.svg';
import QualityIcon from '../../assets/image/icons/quality.svg';
import MobileIcon from '../../assets/image/icons/mobile.svg';
import CreativeIcon from '../../assets/image/icons/creative.svg';

const iconMap = {
    '/assets/image/icons/consulting.svg': ConsultingIcon,
    '/assets/image/icons/development.svg': DevelopmentIcon,
    '/assets/image/icons/quality.svg': QualityIcon,
    '/assets/image/icons/mobile.svg': MobileIcon,
    '/assets/image/icons/creative.svg': CreativeIcon,
};

export default function Services() {
    const [servicesData, setServicesData] = useState([]);

    useEffect(() => {
        fetch('/data.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setServicesData(data.services);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div className="services container mt-5">
            <div className="row">
                <h2 className="services--header text-center">Our Services</h2>
                <p className="services--paragraph text-center">Welcome to our website</p>
            </div>
            <div className="row py-3">
                {servicesData.map((service, index) => {
                    const IconPath = iconMap[service.icon];
                    return (
                        <div key={index} className="col-md-4 my-4">
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
