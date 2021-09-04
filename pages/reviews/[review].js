import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'
import Header from '../../Components/HeaderNoSearch'
import MainPage from '../../Components/MainPage'
import { API } from '../../utils/exports'
import axios from 'axios'

const Review = (props) => {
  const router = useRouter()
  const { review } = router.query
  const [data,setData] = React.useState(props)

//   React.useEffect(() => {
//     console.log(API)
//     axios.get(API + "search", {params: {str2Match : brand}})
//     .then(res => {
//       console.log(res)
//       console.log(data)
//       setData(res)
//   })
//   .catch(function (error) {   
//   })
// },[brand,data])

return (
    <div>
      <Head>
        <title>Candid Reviews for {brand}</title>
        <meta name="description" content={"This is the brand page of "+ brand + " . Read Authentic reviews posted by users for this brand."} />
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
  
  const { review } = context.params

  // Fetch data from external API
  const res = await fetch(API + 'search/' + '?str2Match=' + brand)
  const data = await res.json()
  
  // Pass data to the page via props
  return { props: { data } }
}


export default Review