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