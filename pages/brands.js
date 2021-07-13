import {API} from '../utils/exports'

function brands(props) {
    console.log("Brands",props)
    return (
        <div>
              <p>This is brands page</p>
        </div>
    )
}

export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(API + 'brands')
    const data = await res.json()
  
    // Pass data to the page via props
    return { props: { data } }
}

export default brands
