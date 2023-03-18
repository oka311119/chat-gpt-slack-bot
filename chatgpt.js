const { Configuration, OpenAIApi } = require('openai');
const dotenv = require('dotenv');
dotenv.config();

const config = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(config);
const model = process.env.CHATGPT_MODEL ?? 'gpt-3.5-turbo-0301';

async function ask(content) {
    const response = await openai.createChatCompletion({
        model: model,
        messages: [{ role: "user", content: content }],
    });

    return response.data.choices[0].message?.content ?? "chatgpt ${model}: no answer";
}

module.exports = { ask };
