import React from 'react';

export default function Course({ course, refreshCourses }) {
    const markCoursePurchased = async () => {
        try {
            await fetch('/api/courses', {
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
            await fetch('/api/courses', {
                method: 'DELETE',
                body: JSON.stringify({ id: course.id }),
            });
            refreshCourses();
        } catch (err) {
            console.error(err);
        }
    };
    return (
        <div className="list-group-item">
            <a href={course.link}>
                <h4 className="list-group-item-heading">{course.name}</h4>
            </a>
            <p>
                Tags:{' '}
                {course.tags &&
                    course.tags.map((tag) => (
                        <span className="badge badge-primary mr-2">{tag}</span>
                    ))}
            </p>
            {!course.purchased && (
                <button
                    className="btn btn-sm btn-primary"
                    onClick={markCoursePurchased}
                >
                    Purchased
                </button>
            )}
            <button
                className="btn btn-sm btn-danger ml-2"
                onClick={deleteCourse}
            >
                Delete
            </button>
        </div>
    );
}
