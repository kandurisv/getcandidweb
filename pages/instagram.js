import {API} from '../utils/exports'

function instagram(props) {
    console.log("Instagram",props)
    return (
        <div>
            <p>This is instagram page</p>
        </div>
    )
}


export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(API + 'instagram')
    const data = await res.json()
  
    // Pass data to the page via props
    return { props: { data } }
}
  



export default instagram
