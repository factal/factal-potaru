import React from 'react'
import Link from 'next/link'
import { ArticleResponse } from '../types/article'

import styles from './Card.module.sass'

type Props = {
  article: ArticleResponse
}

const Card: React.FC<Props> = (props) => {
  return (
    <Link href={'/articles/'+props.article.id} as={'/articles/'+props.article.id}>
      <div className={styles.card}>
        <div className={styles.tags}>
          {props.article.tags.map( (tag) => {
            return <div className={styles.tag} key={tag.id} >{tag.name}</div>
          })}
        </div>

        <div className={styles.info}>
          <h3 className={styles.title}>{props.article.title}</h3>
        </div>

        <div className={styles.bottom}>
          {props.article.publishedAt}
        </div>
      </div>
    </Link>
  )
}

export default Card