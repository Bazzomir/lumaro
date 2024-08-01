import React from 'react';
import { ReactComponent as HomepageImage } from '../../assets/image/homepage.svg';

export default function Homepage() {
    return (
        <div className="homepage container mt-5">
            <div className="row">
                <div className="col-7">
                    <div className="d-flex row justify-content-start gap-3">
                        <p className="col-12 first-text text-uppercase">Welcome to our website</p>
                        <h1 className="col-12 second-text">
                            Shape Your Future <br />  with Global Innovation
                        </h1>
                        <p className="third-text">Discover comprehensive talent, where every step forward is tailored to your vision.</p>
                        <button className="btn btn-purple text-uppercase">Start now</button>
                    </div>
                </div>
                <div className="col-5">
                    <div className="d-flex justify-content-end p-3">
                        <HomepageImage alt="Homepage Image" />
                    </div>
                </div>
            </div>
        </div>
    )
}
