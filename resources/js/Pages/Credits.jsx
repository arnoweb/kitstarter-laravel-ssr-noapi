import React from 'react';

export default function Credits({ title, description }) {
    return (
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-4xl font-bold mb-4">{title}</h1>
            <p className="text-lg text-gray-600 mb-6">
                {description}
            </p>
        </div>
    );
}
