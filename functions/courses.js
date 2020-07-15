const formattedReturn = require('./formattedReturn');
const getCourses = require('./getCourses');
const createCourse = require('./createCourse');
const deleteCourse = require('./deleteCourse');
const updateCourse = require('./updateCourse');
exports.handler = async (event) => {
    if (event.httpMethod === 'GET') {
        return await getCourses(event);
    } else if (event.httpMethod === 'POST') {
        return await createCourse(event);
    } else if (event.httpMethod === 'PUT') {
        return await updateCourse(event);
    } else if (event.httpMethod === 'DELETE') {
        return await deleteCourse(event);
    } else {
        return formattedReturn(405, {});
    }
};
