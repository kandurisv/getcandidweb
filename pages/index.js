import Head from 'next/head'
import HeaderNoSearch from '../Components/HeaderNoSearch'
import Footer from '../Components/Footer'
import InstagramWidget from '../Components/InstagramWidget'
import MainPage from '../Components/MainPage'
import {API} from '../utils/exports'
import axios from 'axios'
import React from 'react'
import { useRouter } from 'next/router'
import { route } from 'next/dist/next-server/server/router'
import ImageMainPage from '../Components/ImageMainPage'
import LandingPage from '../Components/LandingPage'
import Pixel from '../Components/Pixel'



 const Home = (props) => {

  const router = useRouter()

  const [data,setData] = React.useState(props)

  // React.useEffect(async () => {
  //   console.log("Router query", router.query)
  //   const res = await fetch(API + 'search/?str2Match' + router.query)
  //   const data = await res.json()
  //   console.log({data})
  //   setData({ data })
  // }, [router.query.counter])


  const searchTextClick = async(keyword) => {
    // console.log("INDEX",keyword)
    // console.log("API=",API + 'search/?str2Match=' + keyword.replace(" ","%20"))
    // const res = await fetch(API + 'search/' + '?str2Match=' + keyword.replace(" ","%20"))
    // const data = await res.json()
    // console.log("Data ", res)
   
   // router.push("/"+keyword.replace(" ","%20"))


    router.push('/?str2Match=' + keyword, undefined, { shallow: true })

  }

  return (
    <div>
      <Head>
        <title>Candid Reviews - Home - Get authentic reviews for all D2C brands </title>
        <meta name="description" content="Reviews for all D2C Indian products. We are India's first social platform for authentic product reviews on new age Indian brands in skin care , hair care and other categories. Now discover and share new D2C products by downloading Candid App. Review them at day level & connect with influencers by using View on Instagram for chat" />
        <link rel="icon" href="/500SCircle.png" />
      </Head>
      <div>
        <Pixel name='FACEBOOK_PIXEL_1' />
        <div className = "bg-white lg:top-0 lg:z-50">
          {/* <Header onSearchHeader = {(keyword)=>searchTextClick(keyword)} /> */}
          <HeaderNoSearch />
        </div>
        {/* <div className = "bg-blue-50 flex items-center justify-center py-1">
          <h1 className = "">For full functionality, Download our <a 
          href='https://play.google.com/store/apps/details?id=com.candid.app&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'
          target="_blank"
          rel="noreferrer"
          className = "cursor-pointer text-blue-500 hover:border-b-2 hover:border-blue-400 ">App</a> </h1>
        </div> */}
        <div>
          {/* <ImageMainPage content= {data} /> */}
          <LandingPage content= {data} />
        </div>
        <div className = "bg-white lg:bottom-0 lg:z-50 mt-20">
          <Footer />
        </div>
      </div>
      {/* Header */}

      {/* Nav Bar */}

      {/* Main Component */}

      {/* Footer */}
    
    </div>
  )
}

export default Home

export async function getServerSideProps() {

  

  // Fetch data from external API
  // const res = await fetch(API + 'home/')
  // const data = await res.json()

  const res = await fetch(API + 'brands/top')
  const data = await res.json()
  
  // Pass data to the page via props
  return { props: { data } }
}