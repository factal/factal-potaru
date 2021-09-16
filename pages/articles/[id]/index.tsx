import { NextPage, GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
import { useRouter } from 'next/dist/client/router'
import Script from 'next/script'
import Footer from '../../../src/components/Footer'
import { ArticleResponse } from '../../../src/types/article'
import { client } from '../../../src/utils/api'
import { toStringId } from '../../../src/utils/toStringId'

type StaticProps = {
  blog: ArticleResponse
  draftKey?: string
}
type PageProps = InferGetStaticPropsType<typeof getStaticProps>


const Page: NextPage<PageProps> = (props) => {
  const { blog } = props
  const router = useRouter()

  if (router.isFallback) {
    return <div>Loading...</div>
  }

  return (
  <main>
    <head>
      <LoadMathJax enabled={blog.enableMath}/>
    </head>

    <h1>{blog.title}</h1>
    <div dangerouslySetInnerHTML={{__html: blog.body}}/>

    <Footer />

  </main>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    fallback: "blocking",
    paths: [],
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
        fields: 'id,title,body,publishedAt,tags,enableMath',
      },
    })
    return {
      props: { blog },
      revalidate: 60,
    }
  } catch (e) {
    return { notFound: true }
  }
}

type Props = {
  enabled: Boolean
}

const LoadMathJax: React.FC<Props> = (props) => {
  if (props.enabled) {
    return <Script src='https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js' strategy='beforeInteractive'/>
  } else {
    return <></>
  }
}

export default Page