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
            <h2 className="mt-5 mb-3">Backlog</h2>
            <div class="list-group">
                {courses
                    .filter((course) => !course.purchased)
                    .map((course) => (
                        <Course
                            course={course}
                            key={course.id}
                            refreshCourses={loadCourses}
                        />
                    ))}
            </div>
            <h2 className="mt-5 mb-3">Already Purchased</h2>
            {courses
                .filter((course) => course.purchased)
                .map((course) => (
                    <Course
                        course={course}
                        key={course.id}
                        refreshCourses={loadCourses}
                    />
                ))}
        </div>
    );
}
