import React, { useState, useEffect } from 'react';
import AboutCard from '../component/AboutCard';
import MeetingImg from '../../assets/image/meeting.svg';

function importIcons(iconPath) {
    try {
        switch (iconPath) {
            case '/assets/image/icons/consulting.svg':
                return require('../../assets/image/icons/gExpertise.svg').ReactComponent;
            case '/assets/image/icons/development.svg':
                return require('../../assets/image/icons/precision.svg').ReactComponent;
            case '/assets/image/icons/quality.svg':
                return require('../../assets/image/icons/efficiency.svg').ReactComponent;
            case '/assets/image/icons/mobile.svg':
                return require('../../assets/image/icons/scalability.svg').ReactComponent;
            default:
                return null;
        }
    }
    catch (error) {
        console.error('Error importing icon:', error);
        return null;
    }
}

export default function About() {
    const [aboutData, setAboutData] = useState([]);

    useEffect(() => {
        fetch('/data.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setAboutData(data.aboutUs);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div className="about container-fluid mt-5">
            <div className="row justify-content-center align-items-center">
                <div className="about-text col-12 col-lg-6">
                    <p className="mb-0 mx-auto text-justify text-wrap w-75">
                        <span className="text-purple">We're</span> Your Strategic Ally In The <span className="text-purple">Digital</span> IT World.
                    </p>
                </div>
                <div className="col-0 col-lg-6 d-none d-lg-block bg-triangle">
                    <img src={MeetingImg} alt="About us Image" className="about-image mx-auto" />
                </div>
            </div>
            <div className="row justify-content-center align-items-center">
                <div className="col-12 mt-3">
                    <h2 className="text-center p-3 mb-0">Why Work With Us</h2>
                </div>
                <div className="col-12">
                    <div className="row p-0 m-0">
                        {aboutData.map((about, index) => {
                            const IconComponent = importIcons(about.icon);
                            return (
                                <div key={index} className="col-md-4 my-4">
                                    {IconComponent && (
                                        <AboutCard
                                            CardIcon={IconComponent}
                                            category={about.category}
                                            description={about.description}
                                        />
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
