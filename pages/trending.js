import Header from '../Components/Header'
import {API} from '../utils/exports'


function trending(props) {
    console.log(props)
    return (
        <div>
            <Header />
            <p>This is trending page</p>
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

export default trending
