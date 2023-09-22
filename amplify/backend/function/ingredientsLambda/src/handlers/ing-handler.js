const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient();

const params = {
  TableName: 'ingredients-dev',
};

const getIngredients = async () => {
  try {
    const data = await docClient.scan(params).promise();
    return data;
  } catch (error) {
    return error;
  };
};

const getIngredientById = async (d) => {
  const specParams = { ...params, Key: { ingredient_id: id } };
  try {
    return await docClient.get(specParams).promise();
  } catch (error) {
    return error;
  };
};

const addOrUpdateIngredient = async (ingredient) => {
  const updParams = { ...params, Item: ingredient };
  try {
    return await docClient.put(updParams).promise();
  } catch (error) {
    return error;
  };
};

const deleteIngredient = async (id) => {
  const delParams = { ...params, Key: { ingredient_id: id } };
  try {
    return await docClient.delete(delParams).promise();
  } catch (error) {
    return error;
  };
};

module.exports = {
  getIngredients,
  getIngredientById,
  addOrUpdateIngredient,
  deleteIngredient,
}
