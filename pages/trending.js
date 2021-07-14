import Header from '../Components/Header'
import {API} from '../utils/exports'
import Head from 'next/head'
import ClickableItem from '../Components/ClickableItem'


function trending(props) {
    console.log(props)
    return (
        <div>
            <Head>
                <title>Trending Candid</title>
                <meta name="description" content="Trending Reviews. Now discover and share new Indian products by downloading Candid App " />
                <link rel="icon" href="/500SCircle.png" />
            </Head>
            <div className = "bg-white lg:sticky lg:top-0 lg:z-50">
            <Header />
            </div>
            <div className = "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 ">
                <ClickableItem src = "/500SCircle.png" alt = "Logo" title = "Logo"/>
            </div>
            
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
