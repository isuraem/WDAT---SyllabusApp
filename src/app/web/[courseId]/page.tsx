'use client'
import React from 'react';
import { Courses } from "../../constants/courseDetails";
import { useRouter } from 'next/navigation';
import { useUser } from '@auth0/nextjs-auth0/client';

export default function CoursePage({
    params: { courseId },
}: {
    params: { courseId: string };
}) {
    const { user, error, isLoading } = useUser();

    const router = useRouter();
    const course = Courses.find((course) => course.id === Number(courseId));

    const handleTopicClick = async (topicId: any) => {
        if (!user) {
            router.push('/api/auth/login');
        } else {
            router.push(`/web/${courseId}/${topicId}`);
        }
    };

    if (!course) {
        console.log("Course not found.");
        return <p>Course not found</p>;
    }

    return (
        <div className='container mx-auto min-h-[800px]'>
            <div className='px-5'>
                <div className='mt-8'>
                    <p className='text-black text-xl font-bold'>{course.topic}</p>
                </div>
                <div className='mt-4 ml-3'>
                    <p className='text-black text-l font-bold mt-2'>{course.title}</p>
                    <p className='text-black text-l font mt-2'>{course.description}</p>
                </div>
                <div className='mt-5 flex flex-col sm:flex-row justify-center items-center text-center sm:text-left'>
                    <p className='text-black text-2xl font-bold'>What will I learn?</p>
                    <p className='mt-1 sm:mt-0 sm:ml-2'>Here’s everything that’s covered in the course.</p>
                </div>

                <div className='mt-5 flex flex-col items-center'>
                    {course.topics && course.topics.map((topic, index) => (
                        <div key={topic.id} className='flex flex-row items-center bg-white p-4 my-2 shadow-lg rounded-lg w-full md:w-1/2 lg:w-1/3 cursor-pointer hover:bg-gray-200'
                            onClick={() => handleTopicClick(topic.id)}>
                            <div className="bg-gray-200 rounded-full p-3 text-center w-10 h-10 flex justify-center items-center">
                                {index + 1}
                            </div>
                            <h3 className="text-lg font-semibold ml-5">{topic.title}</h3>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}
