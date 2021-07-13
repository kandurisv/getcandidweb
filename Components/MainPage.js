import ReviewItem from "./ReviewItem"

function MainPage({content}) {
    return (
        <div className = "flex-col max-w-xl px-2 my-2 items-center mx-auto justify-self-center ">
            {
                content.data.map((item,index)=>{
                    return(
                        <div>
                            <ReviewItem key = {index} item = {item}/>
                        </div>
                        )
                })
            }
        </div>
    )
}

//sm:grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4

export default MainPage
