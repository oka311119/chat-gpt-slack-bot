const { App, AwsLambdaReceiver } = require('@slack/bolt');
const { ask } = require('./chatgpt');
const dotenv = require('dotenv');

dotenv.config();

const awsLambdaReceiver = new AwsLambdaReceiver({
  signingSecret: process.env.SLACK_SIGNING_SECRET,
});

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  receiver: awsLambdaReceiver,
});

const handleAppMention = async ({ event, say }) => {
  const question = event.text.replace(/<@.+>\s*/, '');
  const answer = await ask(question);
  await say(`${answer}`);
};

app.event('app_mention', handleAppMention);

module.exports = { app, awsLambdaReceiver };
