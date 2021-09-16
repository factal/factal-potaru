import React from 'react'
import { ArticleListResponse } from '../types/article'
import Card from './Card'

import styles from './Container.module.sass'

type Props = {
  articleList: ArticleListResponse
}

const Container: React.FC<Props> = (props) => {
  return (
    <div className={styles.container}>
      {props.articleList.contents.map( (article) => {
        return <Card article={article} key={article.id} />
      })}
    </div>
  )
}

export default Container