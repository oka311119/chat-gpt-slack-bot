const { WebClient } = require("@slack/web-api");

(async () => {
    // Import the dotenv package
    require("dotenv").config();

    // OAuth token
    const token = process.env.TOKEN;
    // #channel
    const channel = process.env.CHANNEL;
    // message
    const text = "*Hello World*";

    const client = new WebClient(token);
    const response = await client.chat.postMessage({ channel, text });

    console.log(response);
})();
