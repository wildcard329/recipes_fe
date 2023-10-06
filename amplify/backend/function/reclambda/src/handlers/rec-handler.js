const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient();

const params = {
  TableName: 'recipes-dev',
};

const getRecipes = async () => {
  try {
    const data = await docClient.scan(params).promise();
    return data;
  } catch (error) {
    return error;
  };
};

const getRecipeById = async (id) => {
  const specParams = { ...params, Key: { recipe_id: id } };
  try {
    return await docClient.get(specParams).promise();
  } catch (error) {
    return error;
  };
};

const addOrUpdateRecipe = async (recipe) => {
  const updParams = { ...params, Item: recipe };
  try {
    return await docClient.put(updParams).promise();
  } catch (error) {
    return error;
  };
};

const deleteRecipe = async (id) => {
  const delParams = { ...params, Key: { recipe_id: id } };
  try {
    return await docClient.delete(delParams).promise();
  } catch (error) {
    return error;
  };
};

module.exports = {
  getRecipes,
  getRecipeById,
  addOrUpdateRecipe,
  deleteRecipe,
}
