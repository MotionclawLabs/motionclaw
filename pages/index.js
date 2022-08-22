import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import dynamic from 'next/dynamic'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import formatDate from '@/lib/utils/formatDate'
import Image from '@/components/Image'
import Hero from '@/components/Hero'
import RecentProjects from '@/components/RecentProjects'

const MAX_DISPLAY = 12

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default function Home({ posts }) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <Hero />
      <div className="h-content sm:h-content-sm flex flex-col justify-around">
        <h1 className="my-28 select-none text-center text-6xl font-extrabold leading-none tracking-tightest sm:my-10 sm:text-8.5xl">
          <span
            data-content="Graphic."
            className="relative block before:absolute before:top-0 before:bottom-0 before:left-0 before:block before:w-full before:animate-gradient-background-1 before:px-2 before:text-center before:text-black before:content-[attr(data-content)] dark:before:text-white dark:before:content-[attr(data-content)]"
          >
            <span className="animate-gradient-foreground-1 bg-gradient-to-br from-gradient-1-start to-gradient-1-end bg-clip-text px-2 text-transparent">
              Graphic.
            </span>
          </span>
          <span
            data-content="Motion."
            className="relative block before:absolute before:top-0 before:bottom-0 before:left-0 before:block before:w-full before:animate-gradient-background-2 before:px-2 before:text-center before:text-black before:content-[attr(data-content)] dark:before:text-white dark:before:content-[attr(data-content)]"
          >
            <span className="animate-gradient-foreground-2 bg-gradient-to-br from-gradient-2-start to-gradient-2-end bg-clip-text px-2 text-transparent">
              Motion.
            </span>
          </span>
          <span
            data-content="Video."
            className="relative block before:absolute before:top-0 before:bottom-0 before:left-0 before:block before:w-full before:animate-gradient-background-3 before:px-2 before:text-center before:text-black before:content-[attr(data-content)] dark:before:text-white dark:before:content-[attr(data-content)]"
          >
            <span className="animate-gradient-foreground-3 bg-gradient-to-br from-gradient-3-start to-gradient-3-end bg-clip-text px-2 text-transparent">
              Video.
            </span>
          </span>
        </h1>
      </div>
      <div className="container mx-auto divide-y divide-gray-700">
        <div className="my-4 flex flex-col">
          <span className="font-poppins title-font  text-3xl font-bold">
            Graphic Design Project
          </span>
        </div>
        <div className="grid grid-cols-1 gap-8 pt-10 md:grid-cols-2 xl:grid-cols-3">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((frontMatter) => {
            const { slug, date, title, summary, tags, images } = frontMatter
            const firstTwoTags = tags.slice(0, 2)
            return (
              <div
                key={slug}
                className="bg-day group relative h-full transform rounded-lg transition duration-500 hover:scale-105"
              >
                <div className="animate-tilt absolute -inset-0.5 rounded-lg bg-gradient-to-r from-blue-600 to-purple-500 opacity-25 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
                <a className="c-card relative block h-full overflow-hidden rounded-lg bg-cardBg">
                  <div className="group relative max-h-4 overflow-hidden rounded-lg pb-60">
                    <Link href={`/blog/${slug}`}>
                      <span>
                        <img
                          alt={title}
                          src={images}
                          className="absolute inset-0 h-full w-full  object-cover "
                        />
                      </span>
                    </Link>
                  </div>
                  <div className="h-full py-4 px-2">
                    <span className="inline-flex w-full items-center justify-between">
                      <span className="inline-block rounded border border-gray-700 py-1 px-2 text-xs font-medium">
                        {firstTwoTags.map((tag) => (
                          <Tag key={tag} text={tag} />
                        ))}
                      </span>
                      <time dateTime={date}>{formatDate(date)}</time>
                    </span>
                    <h2 className="mt-2 mb-2 font-bold md:text-xl">
                      <Link href={`/blog/${slug}`} className="text-gray-100">
                        {title}
                      </Link>
                    </h2>
                    <p className="h-auto text-sm tracking-wider text-gray-300">{summary}</p>
                  </div>
                </a>
              </div>
            )
          })}
        </div>

        {posts.length > MAX_DISPLAY && (
          <div className="mt-5 flex justify-end text-base font-medium leading-6">
            <Link href="/posts" className="mt-5 hover:text-primary-400" aria-label="all posts">
              All Graphic Design Project &rarr;
            </Link>
          </div>
        )}
      </div>
      <br></br>
      <RecentProjects MAX_PROJECTS="100" />
    </>
  )
}
