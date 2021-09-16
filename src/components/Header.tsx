import styles from './Header.module.sass'
import Link from 'next/link'

const Header = () => {
  return (
    <header className={styles.header} role='banner'>
      <Link href='/' as='/'>
        <div className={styles.foot}>
          factal potaru
        </div>
      </Link>
    </header>
  )
}

export default Header