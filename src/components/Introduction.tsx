import React from 'react'
import Image from 'next/image'

import Links from './links'

import unchi from '../../public/unchi.svg'

const Introduction = () => {
  return (
    <div>
      <h2>about</h2>

      <div style={{textAlign: 'center'}}>
        <Image src={unchi} width={300} height={300} />
      </div>

      <p style={{ textAlign: 'center' }}>空山人不見<br/>但聞人語響<br/>返景入深林<br/>復照青苔上</p>

      <h2>interests</h2>

      <ul>
        <li>front end (react.js, next.js, WebGL)</li>
        <li>mathematics (differential geometry, algebraic topology)</li>
        <li>generative art</li>
        <li>music</li>
        <li>illustration</li>
      </ul>

      <h2>links</h2>

      <Links/>
    </div>
  )
}

export default Introduction