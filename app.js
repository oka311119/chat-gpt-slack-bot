const { App, AwsLambdaReceiver } = require('@slack/bolt');
const dotenv = require('dotenv');
dotenv.config();

const awsLambdaReceiver = new AwsLambdaReceiver({
  signingSecret: process.env.SLACK_SIGNING_SECRET,
});

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  receiver: awsLambdaReceiver,
});

// Add your app's event listeners and other logic here
app.event('app_mention', async ({ event, say }) => {
  await say(`Hello, <@${event.user}>!\nThis message is from AWS Lambda🐑🐑🐑`);
});

module.exports = { app, awsLambdaReceiver };
