import React from 'react';

export function Button({ btnName }) {
    return (
        <div className="text-center text-md-start">
            <button className="btn btn-purple text-uppercase">{btnName}</button>
        </div>
    )
}