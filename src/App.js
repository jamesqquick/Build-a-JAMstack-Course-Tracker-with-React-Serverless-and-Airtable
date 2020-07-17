import React from 'react';
import logo from './logo.svg';
import './App.css';
import CourseList from './components/CourseList';
import CourseForm from './components/CourseForm';

function App() {
    return (
        <div className="container mt-5">
            <h1 className="mb-5 text-center">Course Tracker</h1>
            <CourseForm courseAdded={() => {}} />
            <CourseList />
        </div>
    );
}

export default App;
