"use strict";
const { v4 } = require("uuid");
const AWS = require("aws-sdk");

const insertData = async (event) => {

  const dynamoDb = new AWS.DynamoDB.DocumentClient();

  const { work } = JSON.parse(event.body);
  const createdAt = new Date().toISOString();
  const id = v4();
  const newdata = {
    id,
    work,
    createdAt,
    completed: false
  }
  await dynamoDb.put({
    TableName: "dataTable",
    Item: newdata
  }).promise();

  return {
    statusCode: 200,
    body: JSON.stringify(newdata),
    };
};

module.exports = {
    handler: insertData,
};