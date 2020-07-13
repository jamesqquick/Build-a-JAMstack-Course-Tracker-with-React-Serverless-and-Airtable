const { table } = require('./airtable');
const formattedReturn = require('./formattedReturn');
exports.handler = async (event) => {
    try {
        const courses = await table.select().firstPage();
        return formattedReturn(200, courses);
    } catch (err) {
        console.error(err);
        return formattedReturn(500, {});
    }
};
