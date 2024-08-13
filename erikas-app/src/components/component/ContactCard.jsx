import React from 'react';

export default function ContactCard({quote, fullName, avatarCard}) {
    return (
        <div className="contact-card">
            <div className="contact-card-body">
                <p className="contact-card-body__text">{quote}</p>
                <div className="col">
                {avatarCard && <img src={avatarCard} alt={fullName} className="contact-card-body__avatar" />}
                    <span className="card-text__name">{fullName}</span>
                </div>
            </div>
        </div>
    )
}