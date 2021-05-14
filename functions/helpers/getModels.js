const { table } = require('./airtable');
const formattedReturn = require('./formattedReturn');
module.exports = async (event) => {
    try {
        const models = await table.select().firstPage();
        const formattedModels = models.map((model) => ({
            id: model.id,
            ... model.fields,
        }));
        return formattedReturn(200, formattedModels);
    } catch (err) {
        console.error(err);
        return formattedReturn(500, {});
    }
 
};
