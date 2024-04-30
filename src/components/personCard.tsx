"use client"
import React from 'react';

interface CardProps {
    imageSrc: any;
    text: string;
    title: string;
}

const BasicInfoCard: React.FC<CardProps> = ({ imageSrc, text, title }) => {
    return (
        <div className="bg-white shadow-xl rounded-lg p-5 max-w-full max-h-full" style={{ width: '400px', height: '500px' }}>
             <div className="text-center w-90">
                <p className="text-lg font-semibold">{title}</p>
            </div>
            <div className="flex items-center justify-center mb-4">
                <img src={imageSrc} alt="Card Image" className="w-90 h-80" />
            </div>
            <div className="text-center w-90">
                <p className="text-lg font-semibold">{text}</p>
            </div>
        </div>
    );
};

export default BasicInfoCard;
