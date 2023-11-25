import React from 'react'
import { FcLike } from 'react-icons/fc';

const Card = ( { course }) => {
    return (
        <div className='w-[300px] bg-[rgb(22,30,51)] bg-opacity-80 rounded-md overflow-hidden'>
            <div className='relative'>
                {/* image */}
                <img src={course.image.url} alt=''></img>
                {/* heart - Like Button */}
                <div className='w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-3
                    grid place-items-center'>
                    {/* flex items-center justify-center */}
                    <button>
                        <FcLike fontSize="1.75rem" />
                    </button>
                </div>
            </div>
            {/* title & description*/}
            <div className='p-4'>
                <p className='text-white font-semibold text-lg leading-6'>{course.title}</p>
                <p className='mt-2 text-white'>{course.description}</p>
            </div>
        </div>
    )
}

export default Card