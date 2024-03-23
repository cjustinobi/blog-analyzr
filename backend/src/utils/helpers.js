const viem = require('viem')
const { analyzeBlogPost } = require('../analyzer')

const rollupServer = process.env.ROLLUP_HTTP_SERVER_URL

export const creators = []

export const noticeHandler = async (data) => {
  const result = JSON.stringify(data)
  const hexresult = viem.stringToHex(result)

  return await fetch(rollupServer + '/notice', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ payload: hexresult })
  });
}

export const reportHandler = async (message) => {

  const result = JSON.stringify({
        error: String(message),
      });

      const hexresult = viem.stringToHex(result);

      await fetch(rollupServer + '/report', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },

        body: JSON.stringify({
          payload: hexresult,
        }),
      });
}

export const setCreators = (creators) => {

  if (creators.length > 0) return errorResponse(true, 'Creators already set')

  creators = creators

  return { creators }

}

export const analyzePost = async ({ path, creator }) => {
  // Analyze the blog post
  const result = await analyzeBlogPost(path);

  // Find the creator in the list of creators
  const existingCreatorIndex = creators.findIndex((c) => c.name === creator);

  // If the creator is not found, add them to the list of creators
  if (existingCreatorIndex === -1) {
    creators.push({
      name: creator,
      rating: 0,
      analyzedPosts: [],
    });
  }

  // Find the creator again in the updated list of creators
  const updatedCreatorIndex = creators.findIndex((c) => c.name === creator);

  // Check if the post has been analyzed before
  const postIndex = creators[updatedCreatorIndex].analyzedPosts.findIndex((p) => p.path === path);

  // If the post has been analyzed before, update the result
  if (postIndex !== -1) {
    creators[updatedCreatorIndex].analyzedPosts[postIndex].result = result;
  } else {
    // If the post is new, add it to the list of analyzed posts
    creators[updatedCreatorIndex].analyzedPosts.push({
      path,
      result,
    });
  }

  // Calculate the rating for the creator based on all their posts
  const totalPosts = creators[updatedCreatorIndex].analyzedPosts.length;
  let totalSentimentScore = 0;
  let totalReadability = 0;

  creators[updatedCreatorIndex].analyzedPosts.forEach((post) => {
    totalSentimentScore += post.result.sentimentScore;
    totalReadability += post.result.readabilityScore;
  });

  // Update the creator's rating
  const averageSentimentScore = totalSentimentScore / totalPosts;
  const averageReadability = totalReadability / totalPosts;

  creators[updatedCreatorIndex].rating = (averageSentimentScore + averageReadability) / 2;

  return { result, creatorRating: creators[updatedCreatorIndex].rating };
};


// export const analzePost = ({ path, creator }) => {
//   const {} = analyzeBlogPost(path)
// }


const errorResponse = (error, message = '') => {
  return { error, message }
}

// creators structure
// export const creators = [
//   {
//     name: 'Alice',
//     rating: 0,
//     analyzedPosts: [
//       {
//         sentimentScore: 0,
//         readability: 0
//       }
//     ]
//   },
//   {
//     name: 'Bob',
//     rating: 0,
//     analyzedPosts: [
//       {
//         sentimentScore: 0,
//         readability: 0
//       }
//     ]
//   },
//   {
//     name: 'Eve',
//     rating: 0,
//     analyzedPosts: [
//       {
//         sentimentScore: 0,
//         readability: 0
//       }
//     ]
//   }
// ]