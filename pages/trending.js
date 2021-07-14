import Header from '../Components/Header'
import {API} from '../utils/exports'
import Head from 'next/head'


function trending(props) {
    console.log(props)
    return (
        <div>
            <Head>
                <title>Trending Candid</title>
                <meta name="description" content="Trending Reviews. Now discover and share new Indian products by downloading Candid App " />
                <link rel="icon" href="/500SCircle.png" />
            </Head>
            <Header />
            <p>This is trending page</p>
        </div>
    )
}

export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(API + 'trending')
    const data = await res.json()
  
    // Pass data to the page via props
    return { props: { data } }
}

export default trending
