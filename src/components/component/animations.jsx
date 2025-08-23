import { useState, useEffect } from 'react';
import { useInView } from '../../hooks/useInView.js';
import Lottie from 'lottie-react';

export function LazyLottie({ path, loop = true, ...props }) {
    const [animationData, setAnimationData] = useState(null);
    const [ref, inView] = useInView({ threshold: 0.25 });

    useEffect(() => {
        if (inView && !animationData) {
            import(`../../assets/animation/${path}.json`).then((data) => {
                setAnimationData(data.default);
            });
        }
    }, [inView, path, animationData]);

    return (
        <div ref={ref}>
            {animationData ? (
                <Lottie animationData={animationData} loop={loop} {...props} />
            ) : null}
        </div>
    );
}

// Reusable wrappers
export const LoadingAnimation = () => (
    <div className="m-auto w-50 h-25">
        <LazyLottie path="LoadingBar" />
    </div>
);

export const ScrollDownAnimation = ({ onClick }) => (
    <LazyLottie
        path="scrollDown"
        className="scrollDownAnimation fixed-bottom mx-auto cursor-pointer"
        onClick={onClick}
    />
);

export const TeamAnimation = () => (
    <div className="TeamAnimation" data-aos="fade-left">
        <LazyLottie path="CreativeTeam" />
    </div>
);

export const PartnersAnimation = () => (
    <div className="PartnersAnimation" data-aos="fade-left">
        <LazyLottie path="BusinessPartners" />
    </div>
);
