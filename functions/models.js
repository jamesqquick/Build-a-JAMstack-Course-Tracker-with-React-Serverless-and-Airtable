const formattedReturn = require('./helpers/formattedReturn');
const getModels = require('./helpers/getModels');
const createModel = require('./helpers/createModel');
const deleteModel = require('./helpers/deleteModel');
const updateModel = require('./helpers/updateModel');
exports.handler = async (event) => {
  if (event.httpMethod === 'GET') {
    return await getModels(event);
  } else if (event.httpMethod === 'POST') {
    return await createModel(event);
  } else if (event.httpMethod === 'PUT') {
    return await updateModel(event);
  } else if (event.httpMethod === 'DELETE') {
    return await deleteModel(event);
  } else {
    return formattedReturn(405, {});
  }
};