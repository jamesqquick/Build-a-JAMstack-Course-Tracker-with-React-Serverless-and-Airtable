const formattedReturn = require('./formattedReturn');
const getCourses = require('./getCourses');
const createCourse = require('./createCourse');
const deleteCourse = require('./deleteCourse');
const updateCourse = require('./updateCourse');
exports.handler = async (event) => {
    // TODO: call appropriate helper function based on HTTP method
    return formattedReturn(200, 'Hello World');
};
