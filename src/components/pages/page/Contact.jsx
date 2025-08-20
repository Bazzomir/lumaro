import { useEffect, useState } from 'react';
import Form from '../../component/form.jsx';
import { PartnersAnimation } from '../../component/animations.jsx';
import { ContactCard } from '../../component/cards.jsx';
import avatarAveryR from '../../../assets/image/avatar/averyR.svg';
import avatarCaseyW from '../../../assets/image/avatar/caseyW.svg';
import avatarJordanM from '../../../assets/image/avatar/jordanM.svg';

const avatarMap = {
    'averyR': avatarAveryR,
    'caseyW': avatarCaseyW,
    'jordanM': avatarJordanM,
};

export default function Contact() {

    const [contactData, setContactData] = useState([]);

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
                setContactData(data.contact);
            })
            .catch(err => {
                console.error('Error fetching data:', err);
            });
    }, []);

    return (
        <>
            <section className="contact container-fluid my-5 pt-5 pb-6 px-120 h-100 box-sizing overflow-hidden relative" id="contact">
                <div className="row justify-content-center align-items-center">
                    <div className=" col-12 col-lg-6">
                        <div className="header-text--big">
                                <span className="text-purple">Your</span> Success <br /> Is Our <span className="text-purple">Success</span>
                            </p>
                        </div>
                        <Form />
                    </div>
                    <div className="col-0 col-lg-6 d-none d-lg-block relative">
                        <img src="/lumaro/rectangle.svg" alt="Background Image" className="bg-triangle" />

                        {/* <iframe width="800" height="600" src="https://www.youtube-nocookie.com/embed/XKe5cV1pvKw?si=f-zo2z_e2yND6hby" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className="contact-video rounded" data-aos="fade-left" /> */}
                        <PartnersAnimation />

                    </div>
                </div>
                <div className="row justify-content-center align-items-center pt-5">
                    <div className="col-12 mt-3">
                    </div>
                    <div className="col-12 pt-4">
                        <div className="row p-0 m-0 gap-5 gap-md-4 gap-lg-0">
                            {contactData.map((contact, i) => {
                                const AvatarPath = avatarMap[contact.avatar];
                                return (
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
            </section>
        </>
    );
}
