import React from 'react';

export default function Course({ course }) {
    console.log(course);
    return (
        <div className="card my-2">
            <div className="card-header">{course.name}</div>
            <div className="card-body">
                <a href={course.link}>{course.link}</a>
                <p>{course.purchased}</p>
            </div>
        </div>
    );
}
