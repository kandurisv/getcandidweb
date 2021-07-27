import Head from 'next/head'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import InstagramWidget from '../Components/InstagramWidget'
import MainPage from '../Components/MainPage'
import {API} from '../utils/exports'
import axios from 'axios'
import React from 'react'



 const Home = (props) => {

  const [data,setData] = React.useState(props)

 

  const searchTextClick = async(keyword) => {
    console.log("INDEX",keyword)
    axios.get(API + "search", {params: {str2Match : keyword}})
    .then(res => {
      console.log("Search Result",res)
      setData(res)
    })
    .catch(function (error) {
         console.log(error)
    })
  }

  return (
    <div>
      <Head>
        <title>Candid Reviews - Home - Get authentic reviews for all D2C brands </title>
        <meta name="description" content="Reviews for all D2C Indian products. We are India's first social platform for authentic product reviews on new age Indian brands in skin care , hair care and other categories. Now discover and share new D2C products by downloading Candid App. Review them at day level & connect with influencers by using View on Instagram for chat" />
        <link rel="icon" href="/500SCircle.png" />
      </Head>
      <div>
        <div className = "bg-white lg:sticky lg:top-0 lg:z-50">
          <Header onSearchHeader = {(keyword)=>searchTextClick(keyword)} />
        </div>
        <div className = "bg-blue-50 flex items-center justify-center py-1">
          <h1 className = "">For full functionality, Download our <a 
          href='https://play.google.com/store/apps/details?id=com.candid.app&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'
          target="_blank"
          rel="noreferrer"
          className = "cursor-pointer text-blue-500 hover:border-b-2 hover:border-blue-400 ">App</a> </h1>
        </div>
        <div>
          <MainPage content= {data} />
        </div>
        <div className = "bg-white lg:sticky lg:bottom-0 lg:z-50">
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
  const res = await fetch(API + 'home/')
  const data = await res.json()
  
  // Pass data to the page via props
  return { props: { data } }
}