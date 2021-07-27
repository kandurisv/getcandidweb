import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'
import Header from '../../Components/HeaderNoSearch'
import MainPage from '../../Components/MainPage'



import axios from 'axios'
import { API } from '../../utils/exports'
//import Error from '../../Components/Error'



const Category = (props) => {
  const router = useRouter()
  const { category } = router.query
  const [data,setData] = React.useState(props)

  // React.useEffect(() => {
  //     console.log("API URL " , API)

  //     axios.get(API + "search", {params: {str2Match : category}})
  //     .then (res => {
  //       console.log("RES", res.data)
  //     })
  //   .then(responseData => {
  //       console.log("response data",responseData)
  //       console.log("data initial",data)
  //       setData(responseData)
  //   })
  //   .catch(function (error) {   
  //   })
  // },[category,data])

  return (
    <div>
      <Head>
        <title> Candid reviews for {Category} </title>
        <meta name="description" content={"Find best products in " + category + " and read authentic reviews about these categories posted by users"} />
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
  
  const { category } = context.params

  // Fetch data from external API
  const res = await fetch(API + 'search/' + '?str2Match=' + category)
  const data = await res.json()
  
  // Pass data to the page via props
  return { props: { data } }
}


export default Category

