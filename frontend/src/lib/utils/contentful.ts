import { createClient } from 'contentful'
import { BLOG_SPACE } from './'

const client = createClient({
  space: BLOG_SPACE,
  accessToken: 'J7j-hpejnbL8JcXd5KdvcKv6KagvypDiYGGqkCYcl14',
  // accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_KEY!
})

// Retrieve the list of blog posts from Contentful
export const getBlogPosts = async () => {
  try {
    const response = await client.getEntries({
      content_type: 'blogRanker',
    })
  
    return response.items
  } catch (error) {
    console.log(error)
  }
}

// Retrieve a blog post from Contentful

export const getBlogPost = async (slug: string) => {
  try {
    // Use the Contentful client to fetch the entry by slug
    const response = await client.getEntries({
      content_type: 'blogRanker',
      'fields.slug': slug,
      limit: 1, // Limit the response to 1 entry
    })

    // Check if entries were found
    if (response.items.length > 0) {
      const entry = response.items[0]
      return entry
    } else {
      console.warn('No entry found for slug:', slug)
      return null
    }
  } catch (error) {
    console.error('Error fetching entry:', error)
    throw error
  }
}
