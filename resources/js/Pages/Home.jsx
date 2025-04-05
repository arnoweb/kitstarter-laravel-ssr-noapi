import React from 'react';

export default function Home({ title, subtitle, description, features, services }) {
    return (
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-4xl font-bold mb-4">{title}</h1>
            <h2 className="text-2xl font-semibold text-gray-700 mb-6">{subtitle}</h2>
            <p className="text-lg text-gray-600 mb-6">{description}</p>

            <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-4">{features.title}</h3>
                <ul className="list-disc pl-6 space-y-2">
                    {features.items.map((item, index) => (
                        <li key={index} className="text-gray-700">
                            {item}
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                <h3 className="text-2xl font-semibold mb-4">{services.title}</h3>
                <ul className="list-disc pl-6 space-y-2">
                    {services.items.map((item, index) => (
                        <li key={index} className="text-gray-700">
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
