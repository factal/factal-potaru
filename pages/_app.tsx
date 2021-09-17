import React, { useEffect } from 'react'

import type { AppProps } from 'next/app'
import Head from 'next/head'

import Header from '../src/components/Header'
import renderKatex from '../src/utils/renderKatex'
import '../styles/globals.sass'
import Transition from '../src/components/Transition'
import { useRouter } from 'next/dist/client/router'

import NProgress from 'nprogress'
import '../public/nprogress.css'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  useEffect( () => {
    const handleStart = (url: string) => {
      console.log(`Loading: ${url}`)
      NProgress.start()
    }
    const handleStop = () => {
      NProgress.done()
    }

    renderKatex()

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleStop)
    router.events.on('routeChangeError', handleStop)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleStop)
      router.events.off('routeChangeError', handleStop)
    }
  }, [router])

  return (
    <>
      <Head key='loadKaTeX'>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.13.18/dist/katex.min.css" integrity="sha384-zTROYFVGOfTw7JV7KUu8udsvW2fx4lWOsCEDqhBreBwlHI4ioVRtmIvEThzJHGET" crossOrigin="anonymous" />
      </Head>
 
      <Header/>
      
      <Transition location={router.pathname} >
        <Component {...pageProps} />
      </Transition>
    </>
  )
}

export default MyApp
