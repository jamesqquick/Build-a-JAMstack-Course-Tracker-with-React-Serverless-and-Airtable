import React from 'react';

export default function Course({ course, refreshCourses }) {
    console.log(course);

    const markCoursePurchased = async () => {
        try {
            await fetch('/.netlify/functions/courses', {
                method: 'PUT',
                body: JSON.stringify({ ...course, purchased: true }),
            });
            refreshCourses();
        } catch (err) {
            console.error(err);
        }
    };

    const deleteCourse = async () => {
        try {
            await fetch('/.netlify/functions/courses', {
                method: 'DELETE',
                body: JSON.stringify({ id: course.id }),
            });
            refreshCourses();
        } catch (err) {
            console.error(err);
        }
    };
    return (
        <div class="list-group-item">
            <a href={course.link}>
                <h4 class="list-group-item-heading">{course.name}</h4>
            </a>
            <p class="list-group-item-text">A bunch of tags!</p>
            {!course.purchased && (
                <button
                    class="btn btn-sm btn-primary"
                    onClick={markCoursePurchased}
                >
                    Purchased
                </button>
            )}
            <button class="btn btn-sm btn-danger ml-2" onClick={deleteCourse}>
                Delete
            </button>
        </div>
    );
}
