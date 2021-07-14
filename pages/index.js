import Head from 'next/head'
import Header from '../Components/Header'
import InstagramWidget from '../Components/InstagramWidget'
import MainPage from '../Components/MainPage'
import {API} from '../utils/exports'



export default function Home(props) {
  console.log("HOME", props)
  return (
    <div>
      <Head>
        <title>Candid</title>
        <meta name="description" content="Reviews for all D2C Indian products. Now discover and share new Indian products by downloading Candid App " />
        <link rel="icon" href="/500SCircle.png" />
      </Head>
      <div>
        <div className = "bg-white lg:sticky lg:top-0 lg:z-50">
          <Header />
        </div>
        <div>
          <MainPage content= {props} />
        </div>
      </div>
      {/* Header */}

      {/* Nav Bar */}

      {/* Main Component */}

      {/* Footer */}
    
    </div>
  )
}

export async function getServerSideProps() {

  

  // Fetch data from external API
  const res = await fetch(API + 'home/')
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}