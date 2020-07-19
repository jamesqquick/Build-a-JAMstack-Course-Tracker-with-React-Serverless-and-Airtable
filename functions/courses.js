const formattedReturn = require('./formattedReturn');
const getCourses = require('./getCourses');
const createCourse = require('./createCourse');
const deleteCourse = require('./deleteCourse');
const updateCourse = require('./updateCourse');
exports.handler = async (event) => {
    return formattedReturn({ statusCode: 200, body: 'Hello World' });
};
