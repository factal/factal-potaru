import BackButton from "./BackButton"
import styles from './Footer.module.sass'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <BackButton />
    </footer>
  )
}

export default Footer