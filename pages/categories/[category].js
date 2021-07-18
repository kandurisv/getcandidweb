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
        <title>{category} reviews page</title>
        <meta name="description" content={"Find best products in " + category + "and read authentic reviews about them"} />
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

