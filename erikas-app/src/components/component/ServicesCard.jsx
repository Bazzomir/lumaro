import React from 'react';
import { ReactComponent as ListIcon } from '../../assets/image/icons/list-circle.svg';

export default function ServicesCard({ category, description, offerings, cardIcon: CardIcon }) {
    return (
        <div className="card gap-5 p-3 border shadow-sm">
            <div className="card-body mx-auto">
            <div className="mb-3">{CardIcon && <CardIcon />}</div>
                <h5 className="card-body__title">{category}</h5>
                <p className="card-body__text text-muted">{description}</p>
                <ul className="list-group grid gap-0 row-gap-3">
                    {offerings.map((offering, index) => (
                        <li key={index} className="d-flex">
                            <span className="me-2"><ListIcon /></span>
                            <span className="card-body__text">{offering}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
