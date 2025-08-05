import { useState, useEffect } from 'react';
import { AboutCard } from '../../component/cards';
import GlobalExpertiseIcon from '@/assets/image/icons/gExpertise.svg';
import PrecisionIcon from '@/assets/image/icons/precision.svg';
import EfficiencyIcon from '@/assets/image/icons/efficiency.svg';
import ScalabilityIcon from '@/assets/image/icons/scalability.svg';

const iconMap = {
    'gExpertise': GlobalExpertiseIcon,
    'precision': PrecisionIcon,
    'efficiency': EfficiencyIcon,
    'scalability': ScalabilityIcon,
};

export default function About() {
    const [aboutData, setAboutData] = useState([]);

    useEffect(() => {
        const url = `${import.meta.env.BASE_URL}/data.json`;
        fetch(url)
            .then(res => {
                if (!res.ok) {
                    throw new Error('Network response was not ok!');
                }
                return res.json();
            })
            .then(data => {
                setAboutData(data.aboutUs);
            })
            .catch(err => {
                console.error('Error fetching data:', err);
            });
    }, []);

    return (
        <div className="about container-fluid mt-5 px-120" id="about">
            <div className="row justify-content-center align-items-center">
                <div className="col-12 col-lg-6 ">
                    <p className="mb-0 mx-0 mx-sm-auto text-center text-md-start header-text--big w-100 w-lg-75 ">
                        <span className="text-purple">We're</span> Your Strategic Ally In The <span className="text-purple">Digital</span> IT World.
                    </p>
                </div>
                <div className="col-0 col-lg-6 d-none d-lg-block relative">
                    <img src="/lumaro/rectangle.svg" alt="Background Image" className="bg-triangle" />
                    <img src="/lumaro/meeting.svg" alt="About us meeting" className="about-image mx-auto rounded" />
                </div>
            </div>
            <div className="row justify-content-center align-items-center pt-5">
                <div className="col-12 mt-3">
                    <h2 className="text-center p-3 mb-0 header-text--small">Why Work With Us</h2>
                </div>
                <div className="col-12 pt-4">
                    <div className="row p-0 m-0 justify-content-around align-items-center">
                        {aboutData.map((about, i) => {
                            const IconPath = iconMap[about.icon];
                            return (
                                <div key={i} className="col-md-6 col-lg-3 my-4 w-auto">
                                    {IconPath && (
                                        <AboutCard
                                            CardIcon={IconPath}
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
