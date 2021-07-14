import {API} from '../utils/exports'
import Header from '../Components/Header'
import Head from 'next/head'
function categories(props) {
    console.log("categories",props)
    return (
        <div>
             <Head>
                <title>Categories Candid</title>
                <meta name="description" content="Search by Categories" />
                <link rel="icon" href="/500SCircle.png" />
            </Head>
            <Header />
              <p>This is Categories page</p>
        </div>
    )
}

export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(API + 'categories')
    const data = await res.json()
  
    // Pass data to the page via props
    return { props: { data } }
}

export default categories
