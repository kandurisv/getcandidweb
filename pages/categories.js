import {API} from '../utils/exports'
import Header from '../Components/HeaderNoSearch'
import Head from 'next/head'
import ClickableItem from '../Components/ClickableItem'


const Categories = (props) => {
    console.log("categories",props.data)
    return (
        <div>
             <Head>
                <title>Categories Candid</title>
                <meta name="description" content="Search by Categories" />
                <link rel="icon" href="/500SCircle.png" />
            </Head>
            <div className = "bg-white lg:sticky lg:top-0 lg:z-50">
                <Header />
            </div>
            <div className = "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 ">
            {
                props.data.map((item)=>{
                    return(
                        <ClickableItem key = {item.category_id} 
                        link = {"/categories/"+item.category_name}
                        src = {item.image && item.image != null && item.image != "" ? item.image : "/A500S.png" } 
                        alt = {item.description} 
                        title ={item.category_name} />
                        )
                    })
            }
            </div>
        </div>
    )
}

export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(API + 'categories')
    const data = await res.json()
  
    // Pass data to the page via props
    return { props: { data } }
}

export default Categories
