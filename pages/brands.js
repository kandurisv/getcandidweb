import Header from '../Components/Header'
import {API} from '../utils/exports'
import Head from 'next/head'

function brands(props) {
    console.log("Brands",props)
    return (
        <div>
            <Head>
                <title>Brands Candid</title>
                <meta name="description" content="Search by brands" />
                <link rel="icon" href="/500SCircle.png" />
            </Head>
            <Header />
              <p>This is brands page</p>
        </div>
    )
}

export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(API + 'brands')
    const data = await res.json()
  
    // Pass data to the page via props
    return { props: { data } }
}

export default brands
