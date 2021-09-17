import styles from './Tag.module.sass'

type Props = {
  id: string
  name: string
}

const Tag: React.FC<Props> = (props) => {
  return (
    <div className={styles.tag} key={props.id} >
      {props.name}
    </div>
  )
}

export default Tag