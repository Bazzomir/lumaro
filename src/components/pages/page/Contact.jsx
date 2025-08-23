import { useRef } from 'react';
import { useData } from '../../../hooks/useData.js';
import { useInView } from '../../../hooks/useInView.js';
// import Form from '../../component/form.jsx';
import { Button } from '../../component/buttons';
import { PartnersAnimation, LoadingAnimation } from '../../component/animations.jsx';
import { ContactCard } from '../../component/cards.jsx';
import avatarAveryR from '../../../../public/image/avatar/averyR.png';
import avatarCaseyW from '../../../../public/image/avatar/caseyW.png';
import avatarJordanM from '../../../../public/image/avatar/jordanM.png';

const avatarMap = {
    'averyR': avatarAveryR,
    'caseyW': avatarCaseyW,
    'jordanM': avatarJordanM,
};

export default function Contact() {

    const ref = useRef(null);
    const isInView = useInView(ref);
    const { data, isLoading, error } = useData();

    if (isLoading) return <LoadingAnimation />;
    if (error) return <p>{error.message}</p>;

    const contactData = data.contact;

    return (
        <section className="contact container-fluid my-5 pt-5 pb-6 px-120 h-100 box-sizing overflow-hidden relative" id="contact">
            <div className="row justify-content-center align-items-center">
                <div className="col-12 col-lg-6">
                    <h2 className="mb-0 mx-0 mx-sm-auto text-center text-md-start header-text--big w-100 w-lg-75" data-aos="fade-right">
                        <span className="text-purple">Your</span> Success <br /> Is Our <span className="text-purple">Success</span>
                    </h2>
                    <Button btnName="Contact Us" />
                </div>
                {/* <Form /> */}
                <div ref={ref} className="col-12 col-lg-6 relative">
                    {isInView && (
                        <>
                            <img src="/lumaro/rectangle.svg" alt="Background Image" className="bg-triangle" />
                            <PartnersAnimation />
                        </>
                    )}
                </div>
            </div>
            <div className="row justify-content-center align-items-center pt-5">
                <div className="col-12 mt-3">
                    <h3 className="text-center p-3 mb-0 header-text--small" data-aos="fade-down">
                        <span className="text-purple">In</span> Their Own <span className="text-purple">Words</span>
                    </h3>
                </div>
                <div className="col-12 pt-4">
                    <div className="row p-0 m-0 gap-5 gap-md-4 gap-lg-0">
                        {contactData.map((contact, i) => {
                            const AvatarPath = avatarMap[contact.avatar];
                            return (
                                <div key={i} className="col-md-6 col-lg-4 my-4">
                                    {AvatarPath && (
                                        <ContactCard
                                            avatarCard={AvatarPath}
                                            fullName={contact.fullName}
                                            quote={contact.quote}
                                        />
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section >
    );
}
