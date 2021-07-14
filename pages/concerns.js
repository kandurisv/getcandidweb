import {API} from '../utils/exports'
import Header from '../Components/Header'
import Head from 'next/head'
function concerns(props) {
    console.log("concerns",props)
    return (
        <div>
             <Head>
                <title>Concerns Candid</title>
                <meta name="description" content="Search by concerns" />
                <link rel="icon" href="/500SCircle.png" />
            </Head>
            <Header />
            <p>This is concerns page</p>
        </div>
    )
}

export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(API + 'concerns')
    const data = await res.json()
  
    // Pass data to the page via props
    return { props: { data } }
}

export default concerns
