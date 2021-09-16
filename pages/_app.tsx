import '../styles/globals.sass'
import type { AppProps } from 'next/app'
import Header from '../src/components/Header'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>

      <head>
        <link rel='icon' type='image/ico'  href='/favicon.ico'/>

      </head>
      <Header/>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
