import React from 'react';
import { ReactComponent as HomepageImage } from '../../assets/image/homepage.svg';
import { Button } from '../component/buttons';

export default function Homepage() {
    return (
        <div className="homepage container mt-5">
            <div className="d-flex row justify-content-between">
                <div className="col-12 col-lg-5">
                    <div className="d-flex row gap-3 gap-md-5 text-center text-md-start">
                        <div className="col-12">
                            <h1 className="m-0 homepage-bigText">
                                Shape Your Future <br />  with Global Innovation
                            </h1>
                        </div>
                        <div className="col-12">
                            <p className="m-0 homepage-smallText ">Discover comprehensive talent, where every step forward is tailored to your vision.</p>
                        </div>
                        <Button btnName="Start Now" />
                    </div>
                </div>
                <div className="col-0 col-lg-5 d-none d-lg-block">
                    <div className="d-flex p-3">
                        <HomepageImage alt="Homepage Image" />
                    </div>
                </div>
            </div>
        </div>
    )
}