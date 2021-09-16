import React, { useState } from 'react'

import { InferGetStaticPropsType, NextPage, GetStaticProps } from 'next'
import { ArticleListResponse } from '../src/types/article'
import { SiteDataResponse } from '../src/types/siteData'
import { client } from '../src/utils/api'
import Introduction from '../src/components/Introduction'
import Container from '../src/components/Container'
import { TagListResponse } from '../src/types/tag'
import renderKatex from '../src/utils/renderKatex'

type StaticProps = {
  siteData: SiteDataResponse
  blogList: ArticleListResponse
  tagList: TagListResponse
}

type PageProps = InferGetStaticPropsType<typeof getStaticProps>

const Page: NextPage<PageProps> = (props) => {
  const { siteData, blogList, tagList } = props

  if (process.browser) {
    renderKatex()
  }

  return (
    <main>



      <title>factal-potaru</title>

      <Introduction/>

      <h2>blog</h2> 

      <Container articleList={blogList} tagList={tagList} />

      <h3 style={{textAlign: 'center'}}>POWERED BY SUPER UNCHI CODING</h3>

    </main>
  )
}

export const getStaticProps: GetStaticProps<StaticProps> = async () => {
  
  const siteDataPromise = client.v1.sitedata.$get({
    query: { fields: 'title' }
  })

  const blogListPromise = client.v1.articles.$get({
    query: { fields: 'id,title,publishedAt,tags' }
  })

  const tagListPromise = client.v1.tags.$get({
    query: { fields: 'name' }
  })

  const [siteData, blogList, tagList] = await Promise.all([
    siteDataPromise,
    blogListPromise,
    tagListPromise
  ])

  return {
    props: { siteData, blogList, tagList },
    revalidate: 60
  }
}

export default Page