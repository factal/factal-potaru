import React from 'react'

import type { AppProps } from 'next/app'
import Script from 'next/script'

import Header from '../src/components/Header'
import renderKatex from '../src/utils/renderKatex'
import '../styles/globals.sass'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.13.18/dist/katex.min.css" integrity="sha384-zTROYFVGOfTw7JV7KUu8udsvW2fx4lWOsCEDqhBreBwlHI4ioVRtmIvEThzJHGET" crossOrigin="anonymous"/>
        <Script src="https://cdn.jsdelivr.net/npm/katex@0.13.18/dist/katex.min.js" integrity="sha384-GxNFqL3r9uRJQhR+47eDxuPoNE7yLftQM8LcxzgS4HT73tp970WS/wV5p8UzCOmb" crossOrigin="anonymous"  />
        <Script src="https://cdn.jsdelivr.net/npm/katex@0.13.18/dist/contrib/auto-render.min.js" integrity="sha384-vZTG03m+2yp6N6BNi5iM4rW4oIwk5DfcNdFfxkk9ZWpDriOkXX8voJBFrAO7MpVl" crossOrigin="anonymous" onLoad={() => renderKatex()} />
      </head>

      <Header/>

      <Component {...pageProps} />
    </>
  )
}

export default MyApp
