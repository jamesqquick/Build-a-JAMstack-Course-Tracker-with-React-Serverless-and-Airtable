import React, { useState } from 'react';
import Tags from './Tags';

export default function ModelForm({ modelAdded }) {
    const [name, setName] = useState('');
    const [link, setLink] = useState('');
    const [tags, setTags] = useState([]);
    const [count, setCount] = useState(0);

    const resetForm = () => {
        setName('');
        setLink('');
        setCount(count + 1);
    };

    const submitModel = async (e) => {
        e.preventDefault();
        try {
            await fetch('api/models', {
                method : 'POST',
                body : JSON.stringify({
                    name,
                    link,
                    tags,
                }),
            });
        resetForm();
        modelAdded();
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="card">
            <div className="card-header">Add a New Model</div>
            <div className="card-body">
                <form className="" onSubmit={submitModel}>
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
                    <div className="form-group">
                        <p>Tags</p>
                        <Tags tagsUpdated={setTags} key={count} />
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}
