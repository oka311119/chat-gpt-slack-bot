const { Configuration, OpenAIApi } = require('openai');
const dotenv = require('dotenv');
dotenv.config();

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

async function ask(content, model = process.env.CHATGPT_MODEL) {
    const response = await openai.createChatCompletion({
        model: model,
        messages: [{ role: "user", content: content }],
    });

    const answer = response.data.choices[0].message?.content;
    console.log(answer);
}
