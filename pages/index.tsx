import React from 'react'

import { InferGetStaticPropsType, NextPage, GetStaticProps } from 'next'
import { ArticleListResponse } from '../src/types/article'
import { SiteDataResponse } from '../src/types/siteData'
import { client } from '../src/utils/api'
import Introduction from '../src/components/introduction'
import Container from '../src/components/Container'

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

      <Introduction/>

      <h2>blog</h2> 

      <Container articleList={blogList}/>

      <h3 style={{textAlign: 'center'}}>POWERED BY SUPER UNCHI CODING</h3>

    </main>
  )
}

export const getStaticProps: GetStaticProps<StaticProps> = async () => {
  
  const siteDataPromise = client.v1.sitedata.$get({
    query: { fields: 'title' },
  })

  const blogListPromise = client.v1.articles.$get({
    query: { fields: 'id,title' },
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