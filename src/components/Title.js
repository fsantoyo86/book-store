import React from 'react'

export default function Title({name,title}) {
    return (
        <div className="row">
            <div className="mx-auto py-4 text-center text-4xl">
                <h1 className="font-bold">{name} <strong className="text-blue-500">{title}</strong></h1>
            </div>
        </div>
    )
}
