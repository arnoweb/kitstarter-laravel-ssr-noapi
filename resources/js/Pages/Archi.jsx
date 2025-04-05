import React from 'react';

export default function Archi({ title, description }) {
    return (
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-4xl font-bold mb-4">{title}</h1>
            <p>{description}</p>
            <p className="text-lg text-gray-600 mb-6">
                [ Navigateur ]<br />
                ↓ URL<br />
                [ Laravel Route ]<br />
                ↓<br />
                [ Controller Laravel ]<br />
                ↓<br />
                [ Inertia::render() ]<br />
                ↓<br />
                [ Middleware Inertia SSR ]<br />
                ↓<br />
                [ Server Node/Vite ]<br />
                ↓<br />
                [ Rendu React (HTML) ]<br />
                ↓<br />
                [ Laravel Response ]<br />
                ↓<br />
                [ Navigateur : HTML + Hydratation JS ]
            </p>
        </div>
    );
}
