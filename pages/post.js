import Head from 'next/head'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import MainPage from '../Components/MainPage'
import {API} from '../utils/exports'
import axios from 'axios'
import React from 'react'
import { useRouter } from 'next/router'
import ReviewItem from "../Components/ReviewItem"



const Post = () => {
    const {query} = useRouter()
    
    const [review,setReview] = React.useState({})

    React.useEffect(()=>{
        console.log("ID", query.id )
        if (query.id) {
            axios.get(API + "post", {
                params: {
                  id : "u+" + query.id.slice(2,),
                }
              })
            .then(res => res.data)
            .then(function (responseData) {
                console.log('REVIEW',responseData)
                setReview(responseData[0])
              })
            .catch(function (error) {
              console.log(error);     
            });
        }
        
    },[query.id])

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
            {review.review_sum_id ? 
              <ReviewItem item = {review}/> : null
            }
            </div>
            <div className = "absolute bottom-0 bg-white z-50">
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

export default Post
