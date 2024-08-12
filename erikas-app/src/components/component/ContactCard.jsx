import React from 'react';

export default function ContactCard({quote, fullName, avatarCard}) {
    return (
        <div className="card">
            <div className="card-body">
                <p className="card-text">{quote}</p>
                <div className="row">
                {avatarCard && <img src={avatarCard} alt={fullName} className="img-fluid" />}
                    <h2 className="card-text__name">{fullName}</h2>
                </div>
            </div>
        </div>
    )
}