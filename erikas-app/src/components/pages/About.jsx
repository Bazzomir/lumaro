import React from 'react';
import { ReactComponent as MeetingImg } from '../../assets/image/meeting.svg';

export default function About() {
    return (
        <div className="about container-fluid mt-5">
            <div className="row justify-content-center align-items-center">
                <div className="about-text col-12 col-lg-6">
                    <span className="text-purple">We're</span> your strategic ally in the <span>digital</span> IT world.
                </div>
                <div className="col-0 col-lg-6 d-none d-lg-block box-broder-box bg-triangle">
                    <div className="d-flex justify-conent-end">
                        <MeetingImg alt="About us Image" className="about-image p-5"/>
                    </div>
                </div>
            </div>
        </div>
    )
}