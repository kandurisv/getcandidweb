import {API} from '../utils/exports'

function categories(props) {
    console.log("categories",props)
    return (
        <div>
              <p>This is Categories page</p>
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

export default categories
