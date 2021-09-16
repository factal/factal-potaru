import React, { useState } from 'react'
import { ArticleListResponse, ArticleResponse } from '../types/article'
import { TagListResponse, TagResponse } from '../types/tag'
import Card from './Card'

import styles from './Container.module.sass'



type Props = {
  articleList: ArticleListResponse
  tagList: TagListResponse
}

const Container: React.FC<Props> = (props) => {

  // const initFilter = props.articleList.contents

  const [filterQuery, setFilter] = useState(new Set<string>())

    
  return (
    <div className={styles.container}>
      {props.articleList.contents.map( (article) => {
        return <Card article={article} key={article.id} />
      } )}
    </div>
  )
}

export default Container