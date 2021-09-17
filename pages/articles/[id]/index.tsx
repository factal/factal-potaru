import { NextPage, GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
import { useRouter } from 'next/dist/client/router'
import { useEffect } from 'react'
import BackButton from '../../../src/components/BackButton'
import Note from '../../../src/components/Note'
import { ArticleResponse } from '../../../src/types/article'
import { client } from '../../../src/utils/api'
import { toStringId } from '../../../src/utils/toStringId'

import cheerio from 'cheerio'
import { Heading } from '../../../src/types/heading'



type StaticProps = {
  blog: ArticleResponse
  toc: Heading[]
  draftKey?: string
}

type PageProps = InferGetStaticPropsType<typeof getStaticProps>

const Page: NextPage<PageProps> = (props) => {
  const { blog, toc } = props
  const router = useRouter()

  if (router.isFallback) {
    return <div>Loading...</div>
  }

  return (
    <main>
      <div className='container'>

        <title>{blog.title}</title>
        <BackButton />
        <Note article={blog} toc={toc} />
        
      </div>
    </main>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    fallback: "blocking",
    paths: []
  }
}

export const getStaticProps: GetStaticProps<StaticProps> = async (context) => {
  const { params } = context

  if (!params?.id) {
    throw new Error('Error: ID not found')
  }

  const id = toStringId(params.id)

  try {
    const blog = await client.v1.articles._id(id).$get({
      query: {
        fields: 'id,title,body,publishedAt,tags,enableMath'
      }
    })

    const $ = cheerio.load(blog.body)
    const headings = $('h1, h2, h3').toArray()
    const toc = headings.map( (domNode) => {
      return {
        //@ts-ignore
        id: domNode.attribs.id,
        //@ts-ignore
        text: domNode.children[0].data,
        //@ts-ignore
        name: domNode.name
      }
    })
    
    return {
      props: { blog, toc },
      revalidate: 60,
    }
  } catch (e) {
    return { notFound: true }
  }
}

type Props = {
  enabled: Boolean
}

export default Page