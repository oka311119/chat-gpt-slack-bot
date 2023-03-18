// Require the Node Slack SDK package (github.com/slackapi/node-slack-sdk)
const { WebClient, LogLevel } = require("@slack/web-api");
require('dotenv').config();

// WebClient instantiates a client that can call API methods
// When using Bolt, you can use either `app.client` or the `client` passed to listeners.
const client = new WebClient(process.env.SLACK_BOT_TOKEN, {
  // LogLevel can be imported and used to make debugging simpler
  logLevel: LogLevel.DEBUG
});

// The ts of the message you want to delete
// const messageId = "12345.9876";
// The ID of the channel that contains the message
const channelId = process.env.SLACK_CHANNEL_ID;
const messageId = process.env.SLACK_DELETE_TARGET_MESSAGE_ID;

(async () => {
  try {
      // Call the chat.delete method using the WebClient
      const result = await client.chat.delete({
        channel: channelId,
        ts: messageId
      });

    console.log(result);
  }
  catch (error) {
    console.error(error);
  }
})();