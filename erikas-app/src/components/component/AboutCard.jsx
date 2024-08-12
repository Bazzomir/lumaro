import React from 'react';

export default function AboutCard({ category, description, CardIcon }) {
    return (
        <div className="card gap-5 p-3 border shadow-sm h-100 text-center">
            <div className="card-body">
                <div className="mb-3">
                    {CardIcon && <img src={CardIcon} alt={category} className="img-fluid" />}
                </div>
                <h5 className="card-body__title">{category}</h5>
                <p className="card-body__text text-muted">{description}</p>
            </div>
        </div>
    );
}
