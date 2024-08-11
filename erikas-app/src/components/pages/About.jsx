import React from 'react';
import { ReactComponent as MeetingImg } from '../../assets/image/meeting.svg';

export default function About() {
    return (
        <div className="about container-fluid mt-5">
            <div className="row justify-content-center align-items-center">
                <div className="about-text col-12 col-lg-6">
                    <p className="mb-0 mx-auto text-justify text-wrap w-75">
                        <span className="text-purple">We're</span> Your Strategic Ally In The <span className="text-purple">Digital</span> IT World.
                    </p>
                </div>
                <div className="col-0 col-lg-6 d-none d-lg-block bg-triangle">
                    <MeetingImg alt="About us Image" className="about-image mx-auto" />
                </div>
            </div>
        </div>
    )
}