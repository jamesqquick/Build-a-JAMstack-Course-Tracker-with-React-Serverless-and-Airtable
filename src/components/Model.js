import React from 'react';

export default function Model({ model, refreshModels }) {
    const markModelPrivate = async () => {
        try {
            await fetch('api/models', {
                method: 'PUT',
                body : JSON.stringify({...model, private: true}),
            });
            refreshModels();
        } catch (err) {
            console.error(err);
        }
    };

    const deleteModel = async () => {
        try {
            await fetch('api/models', {
                method: 'DELETE',
                body : JSON.stringify({id: model.id}),
            });
            refreshModels();
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="list-group-item">
            <a href={model.link}>
                <h4 className="list-group-item-heading">{model.name}</h4>
            </a>
            <p>
                Tags:{' '}
                {model.tags &&
                    model.tags.map((tag, index) => (
                        <span className="badge badge-primary mr-2" key={index}>
                            {tag}
                        </span>
                    ))}
            </p>
            {!model.private && (
                <button
                    className="btn btn-sm btn-primary"
                    onClick={markModelPrivate}
                >
                    Private
                </button>
            )}
            <button
                className="btn btn-sm btn-danger ml-2"
                onClick={deleteModel}
            >
                Delete
            </button>
        </div>
    );
}
