import React from 'react'
import Image from 'next/image'

import styles from '../../styles/links.module.sass'

import twitter from '../../public/twitter.svg'
import soundcloud from '../../public/soundcloud.svg'
import github from '../../public/github.svg'
import bandcamp from '../../public/bandcamp.svg'

interface Props {
  sns: any
  link: string
}

const SNSButton: React.FC<Props> = (props) => {
  return (
    <div className={styles.button}>
      <a href={props.link} target="_blank">
        <Image src={props.sns} width={50} height={50}/>
      </a>
    </div>
  )
}

const Links = () => {
  return (
    <div className={styles.field}>
      <SNSButton sns={twitter} link='https://twitter.com/factalmusic'/>
      <SNSButton sns={soundcloud} link='https://soundcloud.com/factal'/>
      <SNSButton sns={github} link='https://github.com/factal'/>
      <SNSButton sns={bandcamp} link='https://factal.bandcamp.com/'/>
    </div>
  )
}



export default Links