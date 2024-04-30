import React from 'react';

interface CardProps {
    imageSrc: any;
    text: string;
}

const Card: React.FC<CardProps> = ({ imageSrc, text }) => {
    return (
        <div className="bg-white shadow-xl rounded-lg p-4 max-w-xs mx-auto md:max-w-sm">
            <div className="flex items-center justify-center mb-4">
                <img src={imageSrc} alt="Card Image" className="w-24 h-24 md:w-32 md:h-32" />
            </div>
            <div className="text-center">
                <p className="text-lg md:text-xl font-semibold">{text}</p>
            </div>
        </div>
    );
};

export default Card;
