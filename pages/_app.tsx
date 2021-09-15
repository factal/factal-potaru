import '../styles/globals.sass'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>

      <head>
        <link rel='icon' type='image/ico'  href='/favicon.ico'/>

      </head>

      <Component {...pageProps} />
    </>
  )
}

export default MyApp
