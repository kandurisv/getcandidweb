import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'
import Header from '../Components/HeaderNoSearch'
import MainPage from '../Components/MainPage'



import axios from 'axios'
import { API } from '../utils/exports'
//import Error from '../../Components/Error'



const Search = (props) => {
  const router = useRouter()
  const { search } = router.query
  const [data,setData] = React.useState(props)

  return (
    <div>
      <Head>
        <title> Candid reviews for {search} </title>
        <meta name="description" content={"Find best products in " + search + " and read authentic reviews about these categories posted by users"} />
        <link rel="icon" href="/500SCircle.png" />
      </Head>
      <div>
        <div className = "bg-white lg:sticky lg:top-0 lg:z-50">
          <Header />
        </div>
        <div>
          <MainPage content= {data} /> 
        </div>
      </div>
    </div>
  )

}

export async function getServerSideProps(context) {
  
  const { search } = context.params

  // Fetch data from external API
  const res = await fetch(API + 'search/' + '?str2Match=' + search)
  const data = await res.json()
  
  // Pass data to the page via props
  return { props: { data } }
}


export default Search

