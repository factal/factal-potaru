import React from 'react'
import Image from 'next/image'
import Router from 'next/router'
import styles from './BackButton.module.sass'
import Link from 'next/link'

const BackButton = () => {
  return (
    <Link href='/'>
      <div className={styles.button}>
        <span className={styles.text}>back</span>
      </div>
    </Link>
  )
}

export default BackButton