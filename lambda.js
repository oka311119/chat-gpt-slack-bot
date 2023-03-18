const { app, awsLambdaReceiver } = require('./app');

module.exports.handler = async (event, context, callback) => {
  const handler = await awsLambdaReceiver.start();
  return handler(event, context, callback);
};
