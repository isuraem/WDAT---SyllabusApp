import React from 'react';

interface CardProps {
    imageSrc: any;
    text: string;
}

const BasicInfoCard: React.FC<CardProps> = ({ imageSrc, text }) => {
    return (
        <div className="bg-white shadow-xl rounded-lg p-5 w-full max-w-md mx-auto h-auto md:min-h-[350px] flex flex-col justify-between">
            <div className="flex items-center justify-center mb-4">
                <img src={imageSrc} alt="Card Image" className="w-full max-w-xs h-auto" />
            </div>
            <div className="text-center h-24 overflow-hidden">
                <p className="text-lg font-semibold">{text}</p>
            </div>
            
        </div>
    );
};

export default BasicInfoCard;
