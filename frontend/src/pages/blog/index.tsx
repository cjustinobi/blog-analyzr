'use client'

import { getBlogPosts } from '@/lib/utils'
import { PostType } from '@/interfaces'
import PostCard from '@/components/ui/PostCard'

interface BlogPageProps {
  data: PostType[]
}

export default function Blog({ data }: BlogPageProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-3 xl:gap-8 mt-20">
      {data && data.map((post) => <PostCard post={post} textLimit={100} />)}
    </div>
  )

}

export async function getServerSideProps() {
  try {
    const data = await getBlogPosts()
    return { props: { data } }
  } catch (error) {
    console.log(error)
  }
}
