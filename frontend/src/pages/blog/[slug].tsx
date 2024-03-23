import Image from 'next/image'
import { Params, PostType } from '@/interfaces'
import { getBlogPost, getBlogPosts, markdownToHtml } from '@/lib/utils'
import Head from 'next/head'
import { formatDate } from '@/lib/utils'
import Button from '@/components/shared/Button'

type Props = {
  post: PostType
}

const BlogPage = ({ post }: Props) => {
  const pageTitle = `${post.fields.title} | Africinnovate` // Customize this with your site name
  const description = `${post.fields.featuredText}`
  const ogImage = `https:${post.fields.featureImage.fields.file.url}` // Assuming your featureImage is an object with a file field

  return (
    <div className="prose max-w-[80%] mx-auto">
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={ogImage} />
      </Head>
      <div className="flex items-center justify-center flex-col">
        <div className="h-[500px] object-contain mt-8 max-md:w-auto ">
          <Image
            className="w-[500px] h-[440px]   mt-[20px] max-md:mr-[54px] max-md:h-[322px] max-md:w-[350px] max-md:mt-[21px] object-cover relative rounded-2xl"
            data-aos="zoom-in"
            src={`https:${post.fields.featureImage.fields.file.url}`}
            alt="blog-page-image"
            width={100}
            height={100}
          />
        </div>
        <h1 className="text-[#d9d9e8]  mt-9 font-['Raleway'] text-5xl font-bold leading-[64px] max-md:w-auto max-md:ml-3">
          {post.fields.title}
        </h1>
        <article
          dangerouslySetInnerHTML={{ __html: post.fields.body }}
          className="prose-h1:text-[#d9d9e8] prose-h2:text-[#d9d9e8] prose-h3:text-[#d9d9e8] text-[#d9d9e8] font-['DM font-medium leading-8"
        />
      </div>
      <div className="flex mt-[1%]">
        <svg
          width={44}
          height={44}
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx={32} cy={32} r={32} fill="#D9D9D9" />
        </svg>
        <div className="flex flex-col items-start ml-3">
          <div className="text-[#ffbe0b] font-['DM text-lg font-medium leading-6">
            {post.fields.author[0]}
          </div>
          <div className="text-[#d9d9e8] font-['DM text-sm font-medium leading-6">
            {formatDate(post.fields.created)}
          </div>
        </div>
      </div>
      <Button className="mt-11">Rate Post</Button>
    </div>
  )
}

export default BlogPage

export async function getStaticPaths() {
  // Fetch all blog posts to generate paths
  const posts = await getBlogPosts()

  // Map posts to an array of objects with `params` key
  const paths = posts?.map((post) => ({
    params: { slug: post.fields.slug },
  }))

  return {
    paths,
    fallback: false, // Set to true if you want to enable incremental static regeneration (ISR)
  }
}

export async function getStaticProps({ params }: Params) {
  const data = await getBlogPost(params.slug)

  // Check if data is not null before accessing its properties
  if (!data) {
    return {
      notFound: true,
    }
  }

  // Return the data as props
  const content = await markdownToHtml(data.fields.body || '')

  return {
    props: {
      post: {
        ...data,
        fields: {
          ...data.fields,
          body: content,
        },
      },
    },
  }
}
