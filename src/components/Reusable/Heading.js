import React from 'react'

export default function Heading({title}) {
    return (
        <div className="row">
            <div className="col text-center mb-4">
                <h1 className="display-4 text-dark">{title}</h1>
            </div>
        </div>
    )
}
