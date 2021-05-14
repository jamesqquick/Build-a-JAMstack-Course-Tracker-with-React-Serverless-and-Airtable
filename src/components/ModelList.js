import React from 'react';
import Model from './Model';

export default function ModelList({ models, refreshModels }) {
    return (
        <div>
            <h2 className="mt-5 mb-3">Public</h2>
            <div className="list-group">
                {models
                    .filter((model) => !model.private)
                    .map((model) => (
                        <Model
                            model={model}
                            key={model.id}
                            refreshModels={refreshModels}
                        />
                    ))}
            </div>
            <h2 className="mt-5 mb-3">Private</h2>
            {models
                .filter((model) => model.private)
                .map((model) => (
                    <Model
                        model={model}
                        key={model.id}
                        refreshModels={refreshModels}
                    />
                ))}
        </div>
    );
}
