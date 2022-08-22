const AWS = require('aws-sdk');
AWS.config.update({
  region: 'us-east-1'
})
const util = require('../utils/util');

const dynamodb = new AWS.DynamoDB.DocumentClient();
const userTable = 'address-table';

async function report(userInfo) {
  const address = userInfo.address;
  const violation = userInfo.violation;
  const date = userInfo.date;
  if (!address || !violation || !date) {
    return util.buildResponse(401, {
      message: 'All fields are required'
    })
  }

  const saveUserResponse = await saveUser(user);
  if (!saveUserResponse) {
    return util.buildResponse(503, { message: 'Server Error. Please try again later.'});
  }
  return util.buildResponse(200, { address: address });
}

async function getUser(address) {
  const params = {
    Tableviolation: userTable,
    Key: {
      addressId: addressId
    }
  }

  return await dynamodb.get(params).promise().then(response => {
    return response.Item;
  }, error => {
    console.error('There is an error getting address: ', error);
  })
}

async function saveUser(address) {
  const params = {
    TableName: userTable,
    Item: user
  }
  return await dynamodb.put(params).promise().then(() => {
    return true;
  }, error => {
    console.error('There is an error saving: ', error)
  });
}

module.exports.report = report;