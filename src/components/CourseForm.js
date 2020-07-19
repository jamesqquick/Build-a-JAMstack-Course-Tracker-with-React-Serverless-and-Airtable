import React, { useState } from 'react';
import Tags from './Tags';

export default function CourseForm({ courseAdded }) {
    const [name, setName] = useState('');
    const [link, setLink] = useState('');
    const [tags, setTags] = useState([]);
    const [count, setCount] = useState(0);

    const resetForm = () => {
        //TODO:reset the form
    };

    const submitCourse = async (e) => {
        //TODO: Create the course
        resetForm();
        courseAdded();
    };

    return (
        <div className="card">
            <div className="card-header">Add a New Course</div>
            <div className="card-body">
                <form className="" onSubmit={submitCourse}>
                    {/* TODO: Creat the form */}
                </form>
            </div>
        </div>
    );
}
