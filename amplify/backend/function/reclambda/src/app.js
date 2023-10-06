/* Amplify Params - DO NOT EDIT
	ENV
	REGION
Amplify Params - DO NOT EDIT *//*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/




const express = require('express')
const bodyParser = require('body-parser')
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')
const { getRecipes, getRecipeById, addOrUpdateRecipe, deleteRecipe } = require('./handlers/rec-handler.js');

// declare a new express app
const app = express()
app.use(bodyParser.json())
app.use(awsServerlessExpressMiddleware.eventContext())

// Enable CORS for all methods
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "*")
  next()
});

/**********************
 * Example get method *
 **********************/

app.get('/recipes', async (req, res) => {
  try {
    const { Items: recipes } = await getRecipes();
    res.json({ msg: 'get call succeed!', data: recipes });
  } catch (error) {
    res.json({ msg: 'error retrieving get call' });
  };
});

app.get('/recipes/:recipeId', async (req, res) => {
  const recipeId = req.params.recipeId;
  try {
    const { Item: recipe } = await getRecipeById(recipeId);
    res.json({ msg: 'get call succeed!', data: recipe });
  } catch (error) {
    res.json({ msg: 'error retrieving get call' });
  }
});

/****************************
* Example post method *
****************************/

app.post('/recipes', async (req, res) => {
  const recipe = req.body;
  try {
    await addOrUpdateRecipe(recipe);
    res.json({ msg: 'post call succeed!' });
  } catch (error) {
    res.json({ msg: 'error processing data' });
  };
});

/****************************
* Example put method *
****************************/

app.put('/recipes', async (req, res) => {
  const recipe = req.body;
  try {
    await addOrUpdateRecipe(recipe);
    res.json({ msg: 'put call succeed!' })
  } catch (error) {
    res.json({ msg: 'error processing request' });
  };
});

/****************************
* Example delete method *
****************************/

app.delete('/recipes/:recipeId', async (req, res) => {
  const recipeId = req.params.recipeId;
  try {
    await deleteRecipe(recipeId);
    res.json({ msg: 'delete call succeed!' });
  } catch (error) {
    res.json({ msg: 'could not delete recipe' });
  };
});

app.listen(3000, function() {
    console.log("App started")
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app
