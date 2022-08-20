import siteMetadata from '@/data/siteMetadata'
import Link from 'next/link'
import PageTitle from './PageTitle'

export default function Hero() {
  return (
    <div className="flex w-full flex-col">
      <div className="space-y-2 pb-4 text-center md:space-y-5 md:text-left">
        <PageTitle>
          Hi, We are Motionclaw Labs{' '}
          <span role="img" aria-label="waving hand" className="wave">
            🧪
          </span>
        </PageTitle>
        <p className=" prose max-w-none pb-4 text-lg leading-7 text-gray-400">
          Motionclaw Labs is a creative agency built with one purpose: to help you. We offer
          impeccable service combining a nice, minimalist & elegant design with quality.{' '}
          <Link href={`mailto:${siteMetadata.email}`}>
            <a
              className="font-medium leading-6 "
              aria-label={`Email to ${siteMetadata.email}`}
              title={`Email to ${siteMetadata.email}`}
            >
              Get in touch &rarr;
            </a>
          </Link>
        </p>
      </div>
    </div>
  )
}
