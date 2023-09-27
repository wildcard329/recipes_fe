const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient();

const params = {
  TableName: 'recUsers-dev',
};

const getUsers = async () => {
  try {
    const data = await docClient.scan(params).promise();
    return data;
  } catch (error) {
    return error;
  };
};

const getUserById = async (id) => {
  const specParams = { ...params, Key: { user_id: id } };
  try {
    return await docClient.get(specParams).promise();
  } catch (error) {
    return error;
  };
};

const addOrUpdateUser = async (user) => {
  const updParams = { ...params, Item: user };
  try {
    return await docClient.put(updParams).promise();
  } catch (error) {
    return error;
  };
};

const deleteUser = async (userId) => {
  const delParams = { ...params, Key: { user_id: userId } };
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
};
