const { table } = require('./airtable');
const formattedReturn = require('./formattedReturn');
module.exports = async (event) => {
    const {id} = JSON.parse(event.body);
    try {
        const deletedModel = await table.destroy(id);
        return formattedReturn(200, deletedModel);
    } catch (err) {
        console.error(err);
        return formattedReturn(500, {});
    }
};
