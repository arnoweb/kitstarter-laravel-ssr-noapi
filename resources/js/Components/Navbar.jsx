import React from 'react';
import { Link } from '@inertiajs/react';

export default function Navbar({ menuItems }) {
    return (
        <nav className="bg-white shadow-lg">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between h-16">
                    <div className="flex">
                        <div className="flex space-x-8">
                            {menuItems.map((item, index) => (
                                <Link 
                                    key={index}
                                    href={item.href}
                                    className="inline-flex items-center px-1 pt-1 text-gray-900 hover:text-blue-600 transition-colors duration-200"
                                >
                                    <span className="font-medium">{item.label}</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
} 