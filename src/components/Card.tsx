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
      <section className={styles.card}>
        <div className={styles.info}>
          <h3 className={styles.title}>{props.article.title}</h3>
        </div>
      </section>
    </Link>
  )
}

export default Card