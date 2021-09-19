import React, { useEffect } from 'react'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/dist/client/router'
import NProgress from 'nprogress'

import Header from '../src/components/Header'
import Head from 'next/head'
import CssBaseline from '@mui/material/CssBaseline'
import { CacheProvider, EmotionCache } from '@emotion/react'
import { ThemeProvider } from '@mui/material/styles'

import renderKatex from '../src/utils/renderKatex'
import createEmotionCache from '../src/utils/createEmotionCache'
import theme from '../styles/theme'


import Transition from '../src/components/Transition'

import '../styles/globals.sass'
import '../public/nprogress.css'



const clientSideEmotionCache = createEmotionCache()

interface FactalAppProps extends AppProps {
  emotionCache?: EmotionCache
}

function FactalApp(props: FactalAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props

  const router = useRouter()

  useEffect( () => {
    const handleStart = (url: string) => {
      NProgress.start()
    }
    const handleStop = () => {
      NProgress.done()
    }

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleStop)
    router.events.on('routeChangeError', handleStop)

    renderKatex()
    
    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleStop)
      router.events.off('routeChangeError', handleStop)
    }
  }, [router])

  return (
    <CacheProvider value={emotionCache}>

      <Head>
        <meta name='viewport' content='initial-scale=1, width=device-width' />
      </Head>
 
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <Component {...pageProps} />
      </ThemeProvider>

      <Header/>

      
      
      {/* <Transition location={router.pathname} > */}
        
      {/* </Transition> */}
    </CacheProvider>
  )
}

export default FactalApp