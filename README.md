## Project Name: BlogAnalyzr

### Description
BlogAnalyzr is designed to analyze the quality of blog posts of technical writers using the Cartesi Machine for necessary offchain analysis. It utilizes [Puppeteer](https://pptr.dev) for web scraping, [Natural](https://naturalnode.github.io/natural/) and [Sentiment](https://github.com/thisandagain/sentiment) for sentiment analysis and readability scoring, and provides functionality to rate creators based on the quality of their posts.

### Features
1. Analyze the quality of blog posts by extracting text content, performing sentiment analysis, and calculating readability score.
2. Rate creators based on the average sentiment score and readability of their posts.
3. Provable offchain blog sentiment analysis and readability scoring.
4. Flexible and customizable sentiment analysis using both built-in lexicons and custom sentiment labels.


### Installation
1. Clone the repository: `git clone https://github.com/cjustinobi/blog-analyzr`
2. `cd` into backend and frontend directory respectively and install dependencies: `npm install`
3. Install Sunodo `npm i -g @sunodo/cli` [Follow the installation process](https://docs.sunodo.io/guide/introduction/installing)

### Usage
1. The project depends on Docker to function, so ensure you have docker installed on your machine
2. `cd` into the backend directory and build the project by running `sunodo build`
3. Then, `sunodo run`
4. `cd` into the frontend and run `npm run dev`. You can start interacting with the application!

### License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

### Acknowledgments
Special thanks to the Cartesi DevAd Team for their guidance, [Puppeteer](https://pptr.dev), [Natural](https://naturalnode.github.io/natural/), [Sentiment](https://github.com/thisandagain/sentiment), and other libraries used in this project for their wonderful contributions to the tech ecosystem.
