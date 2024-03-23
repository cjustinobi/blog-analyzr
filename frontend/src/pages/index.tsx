import Hero from '@/components/ui/Hero'
// import BlogLayout from '@/components/BlogLayout'
import { getBlogPosts } from '@/lib/utils'
import { PostType } from '@/interfaces'
import PostCard from '@/components/ui/PostCard'

interface BlogPageProps {
  posts: PostType[]
}

const Home = ({ posts }: BlogPageProps) => {
  return (
    <>
      <Hero />

      <div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-3 xl:gap-8">
        {posts && posts.map((post) => <PostCard post={post} textLimit={100} />)}
      </div>
    </>
  )
}

export default Home

export async function getServerSideProps() {
  const posts = await getBlogPosts()

  // Return the data as props
  return { props: { posts } }
}
