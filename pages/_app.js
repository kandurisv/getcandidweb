import '../styles/globals.css'
import Head from 'next/head'


function MyApp({ Component, pageProps }) {
  return (
    <>
            <Head>
              <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0" />
              <meta charSet="utf-8"></meta>
            </Head>
            <Component {...pageProps} />
    </>
  )
}

export default MyApp
