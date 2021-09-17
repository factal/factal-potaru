import { ArticleResponse } from '../types/article'
import styles from './Note.module.sass'
import TOC from './TOC'
import NoteHeader from './NoteHeader'
import { Heading } from '../types/heading'

type Props = {
  article: ArticleResponse
  toc: Heading[]
}

const Note: React.FC<Props> = (props) => {
  return (
    <article className={styles.note}>
      <section className={styles.sidebar}>
        <TOC toc={props.toc}/>
      </section>

      <section className={styles.contents}>
        <NoteHeader article={props.article} />
        <div dangerouslySetInnerHTML={{__html: props.article.body}}/>
      </section>

    </article>
  )
}

export default Note