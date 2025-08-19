import Lottie from 'lottie-react';
import LoadingBar from '../../assets/animation/LoadingBar.json';
import scrollDown from '../../assets/animation/scrollDown.json';

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