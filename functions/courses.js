const formattedReturn = require('./helpers/formattedReturn');
const getCourses = require('./helpers/getCourses');
const createCourse = require('./helpers/createCourse');
const deleteCourse = require('./helpers/deleteCourse');
const updateCourse = require('./helpers/updateCourse');
exports.handler = async (event) => {
    // TODO: call appropriate helper function based on HTTP method
    return formattedReturn(200, 'Hello World');
};
