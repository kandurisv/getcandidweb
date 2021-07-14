import Header from '../Components/Header'
import {API} from '../utils/exports'
import Head from 'next/head'

function instagram(props) {
    console.log("Instagram",props)
    return (
        <div>
             <Head>
                <title>Browse Insta Influencers</title>
                <meta name="description" content="Search by Instagram Username" />
                <link rel="icon" href="/500SCircle.png" />
            </Head>
            <div className = "bg-white lg:sticky lg:top-0 lg:z-50">
            <Header />
            </div>
            <p>This is instagram page</p>
        </div>
    )
}


export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(API + 'instagram')
    const data = await res.json()
  
    // Pass data to the page via props
    return { props: { data } }
}
  



export default instagram
