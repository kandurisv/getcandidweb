import Head from 'next/head'
import Header from '../Components/Header'
import InstagramWidget from '../Components/InstagramWidget'
import MainPage from '../Components/MainPage'
import {API} from '../utils/exports'
import axios from 'axios'
import React from 'react'

import useSWR from 'swr'
const fetcher = (...args) => fetch(...args).then(res => res.json())

 const Home = (props) => {

  const [data,setData] = React.useState(props)

  // const { data, error } = useSWR('/api/user/123', fetcher)

  // if (error) return <div>failed to load</div>
  // if (!data) return <div>loading...</div>

  // // render data
  // return <div>hello {data.name}!</div>

  console.log("HOME", props)

  const searchTextClick = async(keyword) => {
    console.log("INDEX",keyword)
    axios.get(API + "search", {params: {str2Match : keyword}})
    .then(res => setData(res))
    .catch(function (error) {
         
    })
  }

  return (
    <div>
      <Head>
        <title>Candid</title>
        <meta name="description" content="Reviews for all D2C Indian products. Now discover and share new Indian products by downloading Candid App " />
        <link rel="icon" href="/500SCircle.png" />
      </Head>
      <div>
        <div className = "bg-white lg:sticky lg:top-0 lg:z-50">
          <Header onSearchHeader = {(keyword)=>searchTextClick(keyword)} />
        </div>
        <div className = "bg-red-300 flex items-center justify-center py-1">
          <p className = "">For full functionality, Download our <a 
          href='https://play.google.com/store/apps/details?id=com.candid.app&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'
          target="_blank"
          rel="noreferrer"
          className = "cursor-pointer text-blue-500 hover:border-b-2 hover:border-blue-400 ">App</a> </p>
        </div>
        <div>
          <MainPage content= {data} />
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