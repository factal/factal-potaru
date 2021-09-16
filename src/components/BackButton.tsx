import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from './BackButton.module.sass'

const BackButton = () => {
  return (
    <Link href='/' as='/'>
      <button className={styles.button}>
        <Image className={styles.arrow} src='/arrow.svg' width='20px' height='20px' />
      </button>
    </Link>
  )
}

export default BackButton