import Lottie from 'lottie-react';
import LoadingBar from '../../assets/animation/LoadingBar.json';
import scrollDown from '../../assets/animation/scrollDown.json';
import CreativeTeam from '../../assets/animation/CreativeTeam..json';
import BusinessPartners from '../../assets/animation/BusinessPartners.json'

export function LoadingAnimation() {
    return (
        <div className="m-auto w-50 h-25">
            <Lottie
                animationData={LoadingBar}
                loop={true}
            />
        </div>
    );
};

export function ScrollDownAnimation({ onClick }) {
    return (
        <Lottie
            animationData={scrollDown}
            loop={true}
            className="scrollDownAnimation fixed-bottom mx-auto cursor-pointer"
            onClick={onClick}
        />
    );
};

export function TeamAnimation() {
    return (
        <div className="TeamAnimation" data-aos="fade-left">
            <Lottie
                animationData={CreativeTeam}
                loop={true}
            />
        </div>
    );
};

export function PartnersAnimation() {
    return (
        <div className="PartnersAnimation" data-aos="fade-left">
            <Lottie
                animationData={BusinessPartners}
                loop={true}
            />
        </div>
    );
};