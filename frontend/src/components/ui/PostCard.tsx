import Image from 'next/image'
import Link from 'next/link'
import { PostType } from '@/interfaces'
import { formatDate } from '@/lib/utils'
import Button from '../shared/Button'

type Props = {
  post: PostType
  textLimit: number
}

const PostCard = ({ post, textLimit }: Props) => {
  return (
    <div className="relative flex flex-col overflow-hidden rounded-lg border bg-white">
      <span className="absolute right-1 top-1 z-50 shadow-md rounded border px-2 py-1 text-sm text-gray-500">
        Technology
      </span>
      <Link
        as={`/blog/${post.fields.slug}`}
        href="/blog/[slug]"
        className="group relative block h-48 overflow-hidden bg-gray-100 md:h-64"
      >
        <Image
          width={100}
          height={100}
          src={`https:${post.fields.featureImage.fields.file.url}`}
          // src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600"
          loading="lazy"
          alt="Photo by Minh Pham"
          className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
        />
      </Link>

      <div className="flex flex-1 flex-col p-4 sm:p-6">
        <h2 className="mb-2 text-lg font-semibold text-gray-800">
          <Link
            as={`/blog/${post.fields.slug}`}
            href="/blog/[slug]"
            className="transition duration-100 hover:text-indigo-500 active:text-indigo-600"
          >
            {post.fields.title.length > 50
              ? post.fields.title
              : // ? `${post.fields.title.substring(0, 50)}...`
                post.fields.title}
          </Link>
        </h2>

        <p className="mb-8 text-gray-500">
          {post.fields.body.substring(0, textLimit)}...
        </p>

        <div className="mt-auto flex items-end justify-between">
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 shrink-0 overflow-hidden rounded-full bg-gray-100">
              <img
                src="https://images.unsplash.com/photo-1611898872015-0571a9e38375?auto=format&q=75&fit=crop&w=64"
                loading="lazy"
                alt="Photo by Brock Wegner"
                className="h-full w-full object-cover object-center"
              />
            </div>

            <div>
              <span className="block text-indigo-500">
                {post.fields.author}
              </span>
              <span className="block text-sm text-gray-400">
                {formatDate(post.fields.created)}
              </span>
            </div>
          </div>

          <Button className="mt-11">Rate Post</Button>
        </div>
      </div>
    </div>
  )
}

export default PostCard
