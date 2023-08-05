# WebWhiz

Train ChatGPT on Your Website Data and Build an AI Chatbot that can instantly answer your customers queries.

Note: This repo is specifically for WebWhiz SDK licensed under MIL license

![webwhiz](https://user-images.githubusercontent.com/6586706/236858939-4f3e4ac0-f3f7-4f76-8fee-add747b09ce1.png)

## Installation

WebWhiz SDK is available on NPM, CDNs, and GitHub.

-   [NPM](https://www.npmjs.com/) - NPM is a package manager for the JavaScript
    programming language. You can install `webwhiz` using the following
    command

    ```sh
    npm install webwhiz
    ```
- [CDN](https://www.unpkg.com/webwhiz@1.0.0/dist/sdk.js) Use directly from CDN

  ```sh
    https://www.unpkg.com/webwhiz@1.0.0/dist/sdk.js
  ```

## Configuration 
To set up the WebWhiz chatbot on your website, add the following script tag to your HTML:

``` html
<script id="__webwhizSdk__" src="https://www.unpkg.com/webwhiz@1.0.0/dist/sdk.js" chatbotId="YOUR_CHATBOT_ID"></script>
```
Replace YOUR_CHATBOT_ID with your actual chatbot's unique identifier.

## Self-hosted Configuration

```html
<script id="__webwhizSdk__" widgetUrl="YOUR_WIDGET_URL" baseUrl="YOUR_BASE_URL" src="webwhiz-sdk.js" chatbotId="YOUR_CHATBOT_ID"></script>
```
Replace YOUR_WIDGET_URL, YOUR_BASE_URL, and YOUR_CHATBOT_ID with your actual values.

#### Parameters
- widgetUrl: This is the URL of the chatbot iframe that the script uses to build the chatbot. Replace YOUR_WIDGET_URL with the URL where the chatbot iframe resides.
- baseUrl: This is the base URL of the API used to fetch the data. Replace YOUR_BASE_URL with the base URL of your API.
- chatbotId: The unique identifier of your chatbot. Replace YOUR_CHATBOT_ID with your chatbot's unique identifier.

#### Example
Here's an example of a configured script tag for self-hosted configuration:

```html
<script id="__webwhizSdk__" widgetUrl="https://widget.webwhiz.ai/" baseUrl="https://api.webwhiz.ai" src="webwhiz-sdk.js" chatbotId="64fsdfdc33675875fd4c0ec1"></script>
```

In the above example, the widgetUrl is set to https://widget.webwhiz.ai/, the baseUrl is set to https://api.webwhiz.ai, and the chatbotId is 6416c5dc35e8d875fd4c0ec1.

Please ensure to replace these values with your actual URLs and Chatbot ID.

If you're not self-hosting, you only need to specify the chatbotId. The widgetUrl and baseUrl will use default values. After inserting the relevant script tag into your website, the WebWhiz chatbot will be enabled and configured as per your settings.



## 🔥 WebWhiz Core features

- Easy Integration
- Data-Specific Responses
- Regular Data Updates
- No code builder
- Customise chatbot
- Fine tuning
- Offline message




## 🤔 How it works ❓
Create and train a chatbot for your website in just a few simple steps.

- Just enter your website URL to get started. We'll automatically fetch and prepare training data.
- We’ll automatically train ChatGPT on your website based on the selected parameters and create the chatbot for you.
- To embed the chatbot to your website, simply add the tiny script tag to your website.


<hr>

## 🙋‍♂️ Frequently Asked Question ❓

### ***What is WebWhiz?***
WebWhiz allows you to train ChatGPT on your website data and build a chatbot that you can add to your website. No coding required.

### ***How frequently do you crawl my website?***
Currently we crawl your website once every month. Please contact us if you need your website to be scanned more frequently

### ***What data do you collect from my website?***
WebWhiz collects data from your website pages to train your chatbot. This includes text data from the pages as well as any metadata such as page titles or descriptions. We do not collect any personally identifiable information (PII) or sensitive data from your website. We scan only public data available to search engines

### ***What happens if I exceed my plan's limits?***
If you exceed your plan's limits for projects or pages, we will notify you. However, if you exceed the token limit for your plan, your chatbots will stop generating AI responses and will instead respond with a predefined message.

### ***What are tokens?***
Tokens are a unit of measurement used to calculate the amount of text data that is processed by your chatbot. Each token corresponds to a variable number of characters, depending on the complexity of the language used in the message. Each message your chatbot sends uses a certain number of tokens based on the length and complexity of the input and the AI response. You can view the current token usage of your account on the dashboard.

### ***Can I train custom data?***
Yes, you can train custom data by simply pasting content to WebWhiz

### ***Can I bring my own open ai Key***
Not at the moment, but, it will be possible in a couple of days.

### ***What is the maximum size of context?***
WebWhiz have any limitations on the size of context. However, please note that the number of pages you can crawl may be limited based on the plan you choose. Please refer to our plans page to learn more about the specific limitations of each plan.





## ☁️ [Self Hosting](https://www.webwhiz.ai/self-hosting/)



If you have any feedback or questions, reach out to hi@webwhiz.ai
