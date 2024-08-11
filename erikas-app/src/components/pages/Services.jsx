import React, { useEffect, useState } from 'react';
import ServicesCard from '../component/ServicesCard';

function importIcons(iconPath) {
    switch (iconPath) {
        case '/assets/image/icons/consulting.svg':
            return require('../../assets/image/icons/consulting.svg').ReactComponent;
        case '/assets/image/icons/development.svg':
            return require('../../assets/image/icons/development.svg').ReactComponent;
        case '/assets/image/icons/quality.svg':
            return require('../../assets/image/icons/quality.svg').ReactComponent;
        case '/assets/image/icons/mobile.svg':
            return require('../../assets/image/icons/mobile.svg').ReactComponent;
        case '/assets/image/icons/creative.svg':
            return require('../../assets/image/icons/creative.svg').ReactComponent;
        case '/assets/image/icons/quality.svg':
            return require('../../assets/image/icons/quality.svg').ReactComponent;
        default:
            return null;
    }
}

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
                    const IconComponent = importIcons(service.icon);
                    return (
                        <div key={index} className="col-md-4 my-4">
                            <ServicesCard
                                category={service.category}
                                description={service.description}
                                offerings={service.offerings}
                                cardIcon={IconComponent}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
