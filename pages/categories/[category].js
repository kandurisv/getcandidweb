import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'
import Header from '../../Components/HeaderNoSearch'
import MainPage from '../../Components/MainPage'
import { API } from '../../utils/exports'
import axios from 'axios'

const Category = () => {
  const router = useRouter()
  const { category } = router.query
  const [data,setData] = React.useState({data : []})


  React.useEffect(() => {
      console.log(API)
    axios.get(API + "search", {params: {str2Match : category}})
    .then(res => {
        console.log(res)
        console.log(data)
        setData(res)
    })
    .catch(function (error) {   
    })
  },[category,data])

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
          <MainPage content= {data} />
        </div>
      </div>

    
    </div>
  )

}

export default Category

