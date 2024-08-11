import React from 'react';

export default function AboutCard({ category, description, CardIcon }) {
    return (
        <div className="card gap-5 p-3 border shadow-sm h-100">
            <div className="card-body text-center">
                <div className="mb-3">{CardIcon && <CardIcon />}</div>
                <h5 className="card-body__title">{category}</h5>
                <p className="card-body__text text-muted">{description}</p>
            </div>
        </div>
    );
}
