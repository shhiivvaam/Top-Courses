import React from 'react'
import { FcLike, FcLikePlaceholder } from 'react-icons/fc';
import { toast } from 'react-toastify';

const Card = ({ course, likedCourses, setLikedCourses }) => {
// const Card = (props) => {
    // let course = props.course;
    // let likedCourses = props.likedCourses;
    // let setLikedCourses = props.setLikedCourses;
    
    function clickHandler() {
        //logic
        if (likedCourses.includes(course.id)) {
            // phele se like hua pada ha

            setLikedCourses((prev) => prev.filter((cid) => (cid !== course.id)));                          // TODO : understanding mai dikkat ha bhaiiiii
            toast.warning("Like Removed");
        } else {
            // phele se like hua hua nhi ha
            // insert krna hai ye course, liked courses mai
            if (likedCourses.length === 0) {
                setLikedCourses([course.id]);
            } else {
                // non-empty phele se
                setLikedCourses((prev) => [...prev, course.id]);
            }
            toast.success("Likes Successfully");
        }
    }

    return (
        <div className='w-[300px] bg-[rgb(22,30,51)] bg-opacity-80 rounded-md overflow-hidden'>
            <div className='relative'>
                {/* image */}
                <img src={course.image.url} alt=''></img>
                {/* heart - Like Button */}
                <div className='w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-12px] 
                    grid place-items-center'>
                    {/* flex items-center justify-center */}
                    
                    <button onClick={clickHandler}>
                        {
                            likedCourses.includes(course.id)                     // likedCourses.includes(course.id)
                                ?
                            <FcLikePlaceholder fontSize="1.75rem" />
                                :
                            <FcLike fontSize="1.75rem" />
                        }
                    </button>
                </div>
            </div>
            {/* title & description*/}
            <div className='p-4'>
                <p className='text-white font-semibold text-lg leading-6'>{course.title}</p>
                <p className='mt-2 text-white'>
                    {
                        course.description.length > 100 
                                ?
                            // course.description.substring(0, 100) + '...'
                            course.description.slice(0, 100) + '...'
                                :
                            course.description
                    }
                </p>
            </div>
        </div>
    )
}

export default Card