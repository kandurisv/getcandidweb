import '../styles/globals.css'
import Head from 'next/head'


function MyApp({ Component, pageProps }) {
  return (
    <>
            <Head>
                {/* <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous" /> */}
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0" />
            </Head>
            <Component {...pageProps} />
    </>
  )
}

export default MyApp
