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
            <div className = "bg-red-300 flex items-center justify-center py-1">
                <p className = "">For full functionality, Download our <a 
                href='https://play.google.com/store/apps/details?id=com.candid.app&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'
                target="_blank"
                rel="noreferrer"
                className = "cursor-pointer text-blue-500 hover:border-b-2 hover:border-blue-400 ">App</a> </p>
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
