import React from 'react';
import Course from './Course';

export default function CourseList({ courses, refreshCourses }) {
    return (
        <div>
            <h2 className="mt-5 mb-3">Backlog</h2>
            <div className="list-group"></div>
            <h2 className="mt-5 mb-3">Already Purchased</h2>
            <div className="list-group"></div>
        </div>
    );
}
