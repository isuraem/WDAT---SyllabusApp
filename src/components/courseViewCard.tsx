import React from 'react';
import Link from 'next/link';

interface CardProps {
    imageSrc: any;
    text: string;
    topic: string;
    destination: string;
}

const BasicInfoCard: React.FC<CardProps> = ({ imageSrc, text, topic, destination }) => {
    return (
        <div className="bg-white flex flex-col md:flex-row shadow-xl rounded-2xl p-1 mt-2 mx-3 w-full max-w-4xl h-auto md:h-[300px]">
            <div className="flex w-full md:w-[300px] h-48 md:h-[300px] p-5">
                <img src={imageSrc} alt="Card Image" className="w-full h-full object-cover p-2" />
            </div>
            <div className="text-start w-full md:w-[300px] px-2 md:px-0">
                <p className="text-2xl font-bold">{topic}</p>
                <p className="hidden md:block text-lg font-semibold overflow-hidden overflow-ellipsis h-36">{text}</p>
                <div className='flex justify-start md:justify-end mt-2 mx-5 mb-4 md:mt-5 px-2 md:px-0'>
                    <Link href={destination}>
                        <button className='bg-black text-white p-3 rounded-2xl'>Enter here</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BasicInfoCard;
