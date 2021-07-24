import Header from '../Components/Header'
import {API} from '../utils/exports'
import Head from 'next/head'
import ClickableItem from '../Components/ClickableItem'
import React from 'react'
import MainPage from '../Components/MainPage'


const Trending = (props) => {
    console.log(props)
    const [data,setData] = React.useState(props)
    console.log("Trending", props)
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
                <title>Trending Candid</title>
                <meta name="description" content="Trending Reviews. Now discover and share new Indian products by downloading Candid App " />
                <link rel="icon" href="/500SCircle.png" />
            </Head>
            <div className = "bg-white lg:sticky lg:top-0 lg:z-50">
            <Header onSearchHeader = {(keyword)=>searchTextClick(keyword)} />
            </div>
            <div className = "bg-blue-50 flex items-center justify-center py-1">
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
    )
}

export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(API + 'trending')
    const data = await res.json()
  
    // Pass data to the page via props
    return { props: { data } }
}

export default Trending
