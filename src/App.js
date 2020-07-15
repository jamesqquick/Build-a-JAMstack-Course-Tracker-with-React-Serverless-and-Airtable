import React from 'react';
import logo from './logo.svg';
import './App.css';
import CourseList from './components/CourseList';
import CourseForm from './components/CourseForm';

function App() {
    return (
        <div className="container">
            <h1>Course Tracker</h1>
            <CourseForm />
            <CourseList />
        </div>
    );
}

export default App;
