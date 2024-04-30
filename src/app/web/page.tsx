import React from 'react'
import { Courses } from "../constants/courseDetails";
import BasicInfoCard from '@/components/courseViewCard';

export default function WebPage() {
    return (
        <div className='container mx-auto min-h-[800px] px-4'>
            <div className='flex mt-5 mr-5 text-start'>
                <p className='text-black text-2xl font-bold'>Courses to learn</p>
            </div>
            <div className='flex mt-5 mr-5 text-start'>
                <p className='text-black text-xl font-bold'>Frontend Languages</p>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 mt-3'>
                {Courses.map((course, index) => (
                    <BasicInfoCard 
                        key={index} 
                        imageSrc={course.imageSrc} 
                        text={course.text} 
                        topic={course.topic} 
                        destination={`/web/${course.id}`} 
                    />
                ))}
            </div>
        </div>
    )
}
