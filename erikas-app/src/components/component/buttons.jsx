import React from 'react';

export function Button({ btnName }) {
    return (
        <div className="text-center text-md-start py-5">
            <button className="btn btn-purple text-uppercase"><span className="btn-purple--text">{btnName}</span></button>
        </div>
    )
}