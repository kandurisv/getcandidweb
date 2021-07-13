import {API} from '../utils/exports'

function concerns(props) {
    console.log("concerns",props)
    return (
        <div>
            <p>This is concerns page</p>
        </div>
    )
}

export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(API + 'concerns')
    const data = await res.json()
  
    // Pass data to the page via props
    return { props: { data } }
}

export default concerns
