const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient();

const params = {
  TableName: 'users-dev',
};

const getUsers = async () => {
  try {
    const data = await docClient.scan(params).promise();
    return data;
  } catch (error) {
    return error;
  };
};

const getUserById = async (author, id) => {
  const specParams = { ...params, Key: { recipe_id: id, recipe_author: author } };
  try {
    return await docClient.get(specParams).promise();
  } catch (error) {
    return error;
  };
};

const addOrUpdateUser = async (recipe) => {
  const updParams = { ...params, Item: recipe };
  try {
    return await docClient.put(updParams).promise();
  } catch (error) {
    return error;
  };
};

const deleteUser = async (username, user_id) => {
  const delParams = { ...params, Key: { user_id: user_id, username: username } };
  try {
    return await docClient.delete(delParams).promise();
  } catch (error) {
    return error;
  };
};

module.exports = {
  getUsers,
  getUserById,
  addOrUpdateUser,
  deleteUser,
}
