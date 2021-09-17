import { ArticleResponse } from "../types/article"
import Tag from './Tag'

import styles from './NoteHeader.module.sass'

type Props = {
  article: ArticleResponse
}

const NoteHeader: React.FC<Props> = (props) => {
  return (
    <div className={styles.noteHeader}>
      {props.article.tags.map( (tag) => {
        return <Tag id={tag.id} name={tag.name} key={tag.id} />
      })}
      <h1 className={styles.title}> {props.article.title} </h1>
      <p className={styles.publishedAt}> {props.article.publishedAt} </p>
    </div>
  )
}

export default NoteHeader