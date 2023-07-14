
function article_1() {
	return {
		date: "11 June 2023",
		title: "Using ChatGPT to Recommend Songs Based on your Listening History",
		description:
			"An all-in-one guide on how to put together a fully-functional simplified version of WrappedGPT.",
		keywords: [
			"ChatGPT",
			"OpenAI",
			"Spotify Wrapped",
			"Rohan K",
			"Rohan Kumar",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
		link: "https://medium.com/@rohankumar_75589/using-chatgpt-to-recommend-songs-based-on-your-listening-history-1f73100309ad"
	};
}

function article_2() {
	return {
		date: "7 July 2023",
		title: "Using Langchain to Summarize Long Text Conversations",
		description:
			"An introductory guide to using Langchain to summarize large text datasets. Also includes the process of extracting text data from iMessage using Python and SQL.",
		style: ``,
		keywords: [
			"Langchain",
			"OpenAI",
			"iMessage",
			"Rohan K",
			"Rohan Kumar",
		],
		link: "https://medium.com/@rohankumar_75589/using-langchain-to-summarize-long-imessage-text-conversations-c97137851f4c"
	};
}

const myArticles = [article_1, article_2];

export default myArticles;
