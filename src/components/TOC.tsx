import { Heading } from '../types/heading'
import styles from './TOC.module.sass'

type Props = {
  toc: Heading[]
}

const TOC: React.FC<Props> = (props) => {

  return (
    <div className={styles.tocContainer}>
      <div className={styles.toc}>
        <ol style={{listStyle: 'disc'}}>
          {props.toc.map( (heading) => {
            return <li key={heading.id}>{heading.text}</li>
          } )}
        </ol>
      </div>
    </div>
  )
}

export default TOC