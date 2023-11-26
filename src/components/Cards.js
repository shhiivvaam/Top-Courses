import React, { useState } from 'react'
import Card from './Card';

const Cards = ({courses, category}) => {

    const [likedCourses, setLikedCourse] = useState([]);

    // getting the data of all the courses form the { courses } i.e, called from tha API REQ to an Array
    // return you a list of all the courses received from the api response
    const getCourses = () => {
        if(category === "All") {
            let allCourses = [];
            Object.values(courses).forEach((courseCategory) => {
                courseCategory.forEach((course) => {
                    allCourses.push(course);
                })
            })
            return allCourses;
        } else {
            // pass only the data of the specific category
            return courses[category];
        }
    }

    return (
        <div className='flex flex-wrap justify-center gap-4 mb-4'>
            {
                getCourses().map((course) => {
                    return (
                        <Card key={course.id} course = {course} likedCourses= {likedCourses} setLikedCourses={setLikedCourse}/>
                    );
                })
            }
        </div>
    )
}

export default Cards