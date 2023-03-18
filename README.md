# ChatGPT Slack Bot

ChatGPT Slack Botは、Slackで受け取ったメッセージをSlackチャンネルに送信するNode.js製のSlack botです。OpenAI APIを利用して質問の返答を取得します。このBotは、AWS Lambdaで動作するように設定されています。

## 前提条件

- Node.jsがインストールされていること
- Slackワークスペースへのアクセス権
- OpenAI APIキー
- AWSアカウント
- AWS CLIがインストールされていること

## セットアップ

1. [Slack APIページ](https://api.slack.com/)にアクセスし、新しいAppを作成します。
2. Appの機能ページで、「Bots」をクリックし、ボットを追加します。
3. 作成したBotに適切な権限を与えます。今回は、`channels:history`と`chat:write`の権限が必要です。
4. インストールページでアプリをワークスペースにインストールします。
5. インストール後、OAuth & PermissionsページでBot Tokenをコピーしてください。
6. [OpenAIのウェブサイト](https://openai.com/product)にアクセスし、無料アカウントを作成します。
7. APIキーをコピーしてください。
8. AWSアカウントをセットアップし、AWS CLIをインストールしてください。詳細は、[AWS CLIの公式ドキュメント](https://aws.amazon.com/cli/)を参照してください。

## インストール

```bash
git clone https://github.com/oka311119/chat-gpt-slack-bot.git
cd chat-gpt-slack-bot
npm install
```

## 設定

プロジェクトフォルダ内に.envファイルを作成し、以下の内容を追加します。

```plaintext
SLACK_BOT_TOKEN=YOUR_SLACK_BOT_TOKEN
SLACK_SIGNING_SECRET=YOUR_SLACK_SIGNING_SECRET
OPENAI_API_KEY=YOUR_OPENAI_API_KEY
CHATGPT_MODEL=SELECTED_CHATGPT_MODEL
```

## AWS Lambdaへのデプロイ

このリポジトリに含まれる serverless.yml ファイルを使用して、アプリケーションをAWS Lambdaにデプロイします。まず、serverlessフレームワークをグローバルにインストールしてください。

```bash
Copy code
npm install -g serverless
```

AWS Lambdaにデプロイするには、次のコマンドを実行します。

```bash
Copy code
make deploy
```

デプロイが成功すると、API GatewayのエンドポイントURLが表示されます。このURLを、Slackアプリのイベントサブスクリプションページで設定します。これにより、SlackからのイベントがLambda関数にリダレクトされるようになります。

## 使用方法

Slackで、Botをチャンネルに招待するか、ダイレクトメッセージでBotとやりとりします。
ChatGPTに質問したいことを書いて、Botにメッセージを送信します。例： @chat-gpt 東京都の人口は？
BotがGhatGPTの返答を返信します。

## クリーンアップ

アプリケーションをAWS Lambdaから削除するには、次のコマンドを実行します。

```bash
Copy code
make remove
```

これにより、Lambda関数や関連するAWSリソースが削除されます。
