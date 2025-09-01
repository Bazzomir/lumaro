import { useState, useEffect, lazy } from 'react';
import { useInView } from '../../hooks/useInView.js';
const Lottie = lazy(() => import('lottie-react'));

export const LazyLottie = ({ path, loop = true, ...props }) => {
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

export const AboutAnimation = () => (
    <div data-aos="fade-left" data-aos-duration="1100">
        <LazyLottie path="about" />
    </div>
)
export const ContactAnimation = () => (
    <div data-aos="fade-left" data-aos-duration="1100">
        <LazyLottie path="contact" />
    </div>
)