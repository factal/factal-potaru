import React from 'react'

import { InferGetStaticPropsType, NextPage, GetStaticProps } from 'next'
import { ArticleListResponse } from '../src/types/article'
import { SiteDataResponse } from '../src/types/siteData'
import { client } from '../src/utils/api'
import Introduction from '../src/components/introduction'

type StaticProps = {
  siteData: SiteDataResponse
  blogList: ArticleListResponse
}

type PageProps = InferGetStaticPropsType<typeof getStaticProps>

const Page: NextPage<PageProps> = (props) => {
  const { siteData, blogList } = props

  return (
    <main>

      <title>factal-potaru</title>

      <h1>{siteData.title}</h1>

      <Introduction/>

      <h2>blog</h2> 
      <section>
        <ul>
        {
          blogList.contents.map((blog) => (
            <h3>{blog.title} {blog.id}</h3>
            
          )) 
        }
        </ul>
      </section>

      <h3 style={{textAlign: 'center'}}>POWERED BY SUPER UNCHI CODING</h3>

    </main>
  )
}

export const getStaticProps: GetStaticProps<StaticProps> = async () => {
  
  const siteDataPromise = client.v1.sitedata.$get({
    query: { fields: "title" },
  })

  const blogListPromise = client.v1.articles.$get({
    query: { fields: "id,title" },
  })

  const [siteData, blogList] = await Promise.all([
    siteDataPromise,
    blogListPromise,
  ])

  return {
    props: { siteData, blogList },
    revalidate: 60,
  }
}

export default Page