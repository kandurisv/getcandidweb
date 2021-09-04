import Image from "next/image"



const ImageMainPage = ({content}) => {
    return (
        <div className = "flex px-2 my-2 mx-2 flex-wrap  ">
            {
                content.data.map((item,index)=>{
                    return(
                        <div key = {index} className = "flex flex-col my-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/5 2xl:w-1/6"  >
                            <div className = "ml-4">
                                <p>Product Name</p>
                            </div>
                            <div className = "relative flex mt-2 justify-self-center align-items justify-center ">
                                <img
                                    alt={" Type : " }
                                    src={item.image_list[0]}
                                    layout="responsive"
                                    width = '90%'
                                    max-width = {600}
                                    height = {"auto"}
                
                                    className = "rounded-2xl border-2" 
                                   
                                />
                            </div>
                            <div className = "ml-4 my-2 flex flex-row">
                                <Image
                                    alt={" Type : " }
                                    src={"https://mish-fit-user-post-images.s3.ap-south-1.amazonaws.com/defaultCover.jpg"}
                                    //layout="responsive"
                                    width={30}
                                    height={30}
                                    className = "ml-2 rounded-full" 
                                    // layout = "fill"
                                
                                />
                                <p className = "mx-2" >User Name</p>
                            </div>
                        </div>
                        )
                })
            }
        </div>
    )
}

//sm:grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4

export default ImageMainPage
