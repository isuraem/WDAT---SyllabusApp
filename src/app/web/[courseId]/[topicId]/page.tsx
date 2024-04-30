"use client"
import { useRouter } from 'next/navigation';
import { Courses } from "../../../constants/courseDetails";
import React, { useEffect, useState, useRef } from 'react';
import { AiFillCopy } from "react-icons/ai";
import TextInput from '@/components/textInput';
import { AiFillCaretRight } from "react-icons/ai";
import { BsBrightnessLow } from "react-icons/bs";

export default function TopicPage({
    params: { courseId, topicId },
}: {
    params: { courseId: string, topicId: string };
}) {
    const inputRef = useRef<HTMLInputElement>(null);

    const [topicData, setTopicData] = useState<any>(null);
    const [copied, setCopied] = useState(false);
    const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLastTopic, setIsLastTopic] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const fetchCourseData = async () => {
            const course = Courses.find((course) => course.id === Number(courseId));
            if (course) {
                const topicArray = course.topics;

                const topic = topicArray.find((topic) => topic.id === Number(topicId));

                if (topic) {
                    setTopicData(topic);
                    const lastIndex = topicArray.length - 1;
                    setIsLastTopic(topic.id === topicArray[lastIndex].id);
                }
            }
        };

        fetchCourseData();
    }, [courseId, topicId]); // Dependencies to re-fetch data on change

    const handleCopy = () => {
        navigator.clipboard.writeText(topicData?.video_link);
        setCopied(true);
        setTimeout(() => {
            setCopied(false);
        }, 5000);
    };
    const openCheckoutModal = () => setIsCheckoutModalOpen(true);
    const closeCheckoutModal = () => setIsCheckoutModalOpen(false);
    const [cardNumber, setCardNumber] = useState('');

    const formatCardNumber = (value: any) => {
        let formattedInput = value.replace(/\D/g, '');
        formattedInput = formattedInput.replace(/(\d{4})(?=\d)/g, '$1 ');
        return formattedInput;
    };

    const handleChange = (event: any) => {
        const { value, selectionStart } = event.target;
        const nonDigitsBefore = (cardNumber.slice(0, selectionStart).match(/\D/g) || []).length;
        const formattedValue = formatCardNumber(value);
        const nonDigitsAfter = (formattedValue.slice(0, selectionStart).match(/\D/g) || []).length;

        setCardNumber(formattedValue);

        // Adjust the cursor position
        const newCaretPosition = selectionStart + (nonDigitsAfter - nonDigitsBefore);
        // Ensure inputRef.current is not null before using it
        if (inputRef.current !== null && selectionStart !== null) {
            requestAnimationFrame(() => {
                inputRef.current?.setSelectionRange(newCaretPosition, newCaretPosition);
            });
        }
    };


    const CheckoutModal = () => (
        <div className={`fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full ${!isCheckoutModalOpen && "hidden"}`}>
            <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
                <div className="mt-3 text-center">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">Checkout</h3>
                    <form className="mt-2 px-7 py-3">
                        <div className="mb-4">
                            <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">Card Number</label>
                            <input
                                type="text" // Changed from 'number' to 'text' to allow spaces
                                id="cardNumber"
                                name="cardNumber"
                                placeholder="1234 5678 9012 3456"
                                value={cardNumber}
                                onChange={handleChange}
                                ref={inputRef}
                                className="mt-1 h-10 px-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-lg sm:text-sm border-gray-300 rounded-md"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="expDate" className="block text-sm font-medium text-gray-700">Expiration Date</label>
                            <input type="text" id="expDate" name="expDate" placeholder="MM/YY" className="mt-1 h-10 px-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-lg sm:text-sm border-gray-300 rounded-md" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="cvv" className="block text-sm font-medium text-gray-700">CVV</label>
                            <input type="number" id="cvv" name="cvv" placeholder="123" className="mt-1 h-10 px-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-lg sm:text-sm border-gray-300 rounded-md" />
                        </div>
                    </form>

                    <div className="items-center px-4 py-3 flex justify-between">
                        <button
                            type="button"
                            className="px-4 py-2 bg-red-500 text-white text-base font-medium rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-300"
                            onClick={closeCheckoutModal}
                        >
                            Close
                        </button>
                        <button
                            id="checkout-button"
                            type="button"
                            className="px-4 py-2 bg-green-500 text-white text-base font-medium rounded-md w-auto shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-300"
                            onClick={closeCheckoutModal}
                        >
                            Confirm Purchase
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );

    const moveToNextTut = () => {
        const nextTopicId = Number(topicId) + 1; // Increment topicId by 1
        router.push(`/web/${courseId}/${nextTopicId}`);
    };


    return (
        <div className='container mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex justify-center'>
            {topicData &&
                <div className='max-w-4xl w-full'>
                    <div className='mt-5'>
                        <p className='font-bold text-xl md:text-2xl'>{topicData?.title}</p>
                    </div>
                    <div className='mt-5'>{topicData?.description}</div>
                    <div className="mt-5 w-full">
                        <iframe
                            src={`https://www.youtube.com/embed/${new URLSearchParams(new URL(topicData?.video_link).search).get('v')}`}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full aspect-video"
                        >
                        </iframe>
                    </div>
                    <div className="mt-5 w-full flex flex-col md:flex-row items-center">
                        <p className="mr-2 mb-2 md:mb-0">URL:</p>
                        <a href={topicData?.video_link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline break-all">
                            {topicData?.video_link}
                        </a>
                        {!copied &&
                            <button
                                className="ml-2 mt-2 md:mt-0 flex items-center bg-black text-white rounded focus:outline-none p-1 hover:bg-gray-900 border"
                                onClick={handleCopy}
                            >
                                <AiFillCopy className='w-4 h-4' />
                            </button>
                        }

                    </div>
                    <div className='flex justify-center items-center flex-col'>
                        <div className='w-full md:w-1/2 mt-5'>
                            <div className='flex justify-center items-center'>
                                <p className='text-l font-semibold'>Do you want a code base for relevant tutorial?</p>
                            </div>
                            <div className='flex justify-center items-center'>
                                <button
                                    className="mt-2 bg-black text-white rounded-xl focus:outline-none p-3 hover:bg-gray-900"
                                    onClick={openCheckoutModal}
                                >
                                    Try in here
                                </button>
                            </div>
                        </div>
                    </div>
                    {!isLastTopic ?
                        (
                            <>
                                <div className='mt-8'>
                                    <div className='flex justify-center items-center'>
                                        <button
                                            className="mt-2 bg-black text-white rounded-xl focus:outline-none p-3 hover:bg-gray-900 flex flex-row pl-4"
                                            // onClick={handleCopy}
                                            onClick={moveToNextTut}
                                        >
                                            move to next
                                            <AiFillCaretRight className='w-4 h-4 mt-1 m-2' />
                                        </button>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <div className='mt-8'>
                                <div className='flex justify-center items-center'>
                                    <button
                                        className="mt-2 bg-green-800 text-white rounded-xl focus:outline-none p-3 hover:bg-gray-900 flex flex-row pl-4"
                                    >
                                        Completed
                                        <BsBrightnessLow className='w-4 h-4 mt-1 m-2' />
                                    </button>
                                </div>
                            </div>
                        )
                    }


                </div>
            }
            {isCheckoutModalOpen && <CheckoutModal />}

        </div>
    );
}
