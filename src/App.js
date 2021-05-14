import React, { useEffect, useState } from 'react';
import './App.css';
import ModelList from './components/ModelList';
import ModelForm from './components/ModelForm';

function App() {
    const [models, setModels] = useState([]);

    const loadModels = async () => {
        try {
            const res = await fetch('/api/models');
            const models = await res.json();
            setModels(models);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        loadModels();
    }, []);
    return (
        <div className="container mt-5">
            <h1 className="mb-5 text-center">Model Tracker</h1>
            <ModelForm modelAdded={loadModels} />
            <ModelList models={models} refreshModels={loadModels} />
        </div>
    );
}

export default App;