const puppeteer = require('puppeteer');
const natural = require('natural');
const Sentiment = require('sentiment');

// Function to analyze the quality of a blog post
export const analyzeBlogPost = async (url) => {
    // Launch Puppeteer and navigate to the blog post page
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.goto(url);

    // Extract the text content of the blog post
    const postContent = await page.evaluate(() => {
        return document.querySelector('.prose').innerText;
    });

    // Preprocess the text content
    const cleanedContent = preprocessText(postContent);

    // Extract features: word frequency, sentiment analysis, and readability
    const wordFrequency = getWordFrequency(cleanedContent);
    const sentimentScore = getSentimentScore(cleanedContent);
    const readabilityScore = getReadabilityScore(cleanedContent);

    // Calculate the quality score
    const qualityScore = calculateQualityScore(wordFrequency, sentimentScore, readabilityScore);

    // Close Puppeteer browser
    await browser.close();

    // Return the sentiment score, readability score, and word frequency
    return { sentimentScore, readabilityScore, wordFrequency };
}

// Function to preprocess text content
function preprocessText(text) {
    // Remove HTML tags and special characters, and convert to lowercase
    return text.replace(/<[^>]+>/g, '').replace(/[^\w\s]/gi, '').toLowerCase();
}

// Function to extract word frequency from text
function getWordFrequency(text) {
    const tokenizer = new natural.WordTokenizer();
    const words = tokenizer.tokenize(text);
		console.log(words)

    const wordFrequency = {};
    words.forEach(word => {
        wordFrequency[word] = (wordFrequency[word] || 0) + 1;
    });

    return wordFrequency;
}

// Function to perform sentiment analysis on text
function getSentimentScore(text) {
	const arr = text.split(' ');
    // Use a technical sentiment lexicon tailored to ICT and software engineering
    const sentimentAnalyzer = new natural.SentimentAnalyzer('English', natural.PorterStemmer, 'senticon');

    // Analyze sentiment
    const score = sentimentAnalyzer.getSentiment(arr);
    console.log('Sentiment Score:', score);
    return score;
}

// function getSentimentScore(text) {
//     // Use a sentiment lexicon tailored to ICT and software engineering terms and expressions
//     const customSentiment = new Sentiment({
//         labels: {
//             // Define custom sentiment labels based on ICT and software engineering terms
//             'positive': ['efficient', 'innovative', 'reliable'],
//             'negative': ['buggy', 'inefficient', 'unreliable']
//         }
//     });

//     // Analyze sentiment
//     const result = customSentiment.analyze(text);
//     const score = result.score;
//     console.log('Sentiment Score:', score);
//     return score;
// }

// Function to calculate readability score of text
function getReadabilityScore(text) {
    // Adjust readability scoring to consider technical term recognition and complexity
    const readabilityScore = calculateReadabilityScore(text);
    console.log('Readability Score:', readabilityScore);
    return readabilityScore;
}
// function getReadabilityScore(text) {
//     // Adjust readability score calculation to account for technical complexity
//     // Adapt sentence and word length criteria to better reflect technical writing preferences

//     // For demonstration purposes, we'll use a placeholder value for the readability score
//     const readabilityScore = 0;
//     console.log('Readability Score:', readabilityScore);
//     return readabilityScore;
// }

function calculateReadabilityScore(text) {
    // Split the text into sentences
    const sentences = text.split(/[.!?]+/);

    // Calculate average sentence length
    const totalSentences = sentences.length;
    const totalWords = text.split(/\s+/).length;
    const averageSentenceLength = totalWords / totalSentences;

    // Calculate average syllables per word
    const words = text.split(/\s+/);
    const totalSyllables = words.reduce((total, word) => total + countSyllables(word), 0);
    const averageSyllablesPerWord = totalSyllables / totalWords;

    // Use the Flesch-Kincaid Grade Level formula to calculate readability score
    const readabilityScore = 0.39 * averageSentenceLength + 11.8 * averageSyllablesPerWord - 15.59;

    return readabilityScore;
}

// Function to count syllables in a word
function countSyllables(word) {
    // Simple syllable counting algorithm (may not be perfect)
    word = word.toLowerCase().replace(/[^a-z]/g, '');
    if (word.length <= 3) { return 1; }
    word = word.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '');
    word = word.replace(/^y/, '');
    const matches = word.match(/[aeiouy]{1,2}/g);
    return matches ? matches.length : 0;
}


// Function to calculate quality score
function calculateQualityScore(wordFrequency, sentimentScore, readabilityScore) {
    // Combine weighted scores or adjust weights based on domain-specific preferences

    // For demonstration purposes, we'll use a simple combination of scores
    const qualityScore = sentimentScore + readabilityScore;
    return qualityScore;
}

// Example usage
// const blogPostUrl = 'https://dev.to/roopkumar/how-i-did-my-first-web-scraping-and-scraped-my-twitterx-tweet-33h3';
// analyzeBlogPost(blogPostUrl).then(({ sentimentScore, readabilityScore, wordFrequency }) => {
//     console.log('Sentiment Score:', sentimentScore);
//     console.log('Readability Score:', readabilityScore);
//     // console.log('Word Frequency:', wordFrequency);
// });
