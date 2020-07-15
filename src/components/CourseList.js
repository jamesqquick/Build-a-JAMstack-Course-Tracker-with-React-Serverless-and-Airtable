import React, { useState, useEffect } from 'react';
import Course from './Course';

export default function CourseList() {
    const [courses, setCourses] = useState([]);

    const loadCourses = async () => {
        try {
            const res = await fetch('/.netlify/functions/courses');
            const courses = await res.json();
            setCourses(courses);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        loadCourses();
    }, []);

    return (
        <div>
            {courses.map((course) => (
                <Course course={course} key={course.id} />
            ))}
        </div>
    );
}
