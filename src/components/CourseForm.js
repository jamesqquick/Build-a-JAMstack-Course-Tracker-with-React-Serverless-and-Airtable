import React, { useState } from 'react';

export default function CourseForm() {
    const [name, setName] = useState('');
    const [link, setLink] = useState('');

    const resetForm = () => {
        setName('');
        setLink('');
    };

    const submitCourse = async (e) => {
        e.preventDefault();
        try {
            await fetch('/.netlify/functions/courses', {
                method: 'POST',
                body: JSON.stringify({
                    name,
                    link,
                }),
            });
            resetForm();
        } catch (err) {
            console.error(err);
        }
        console.log(name, link);
    };
    return (
        <div className="card">
            <div className="card-header">Add a New Course</div>
            <div className="card-body">
                <form className="" onSubmit={submitCourse}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={name}
                            className="form-control"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="link">Link</label>
                        <input
                            type="text"
                            name="link"
                            value={link}
                            className="form-control"
                            onChange={(e) => setLink(e.target.value)}
                        />
                    </div>

                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}
