"use strict";
const { v4 } = require("uuid");
const AWS = require("aws-sdk");

const viewData = async (event) => {

  const dynamoDb = new AWS.DynamoDB.DocumentClient();
  let work;

  try{
  const result = await dynamoDb.scan({
    TableName: "dataTable"
  }).promise();
  work = result.Items;
  }catch(err){
    console.log(err);
  }
  
  return {
    statusCode: 200,
    body: JSON.stringify(work),
    };
};

module.exports = {
    handler: viewData,
};