import Image from 'next/image'


import { BiHeart } from 'react-icons/bi'
import { FaComments, FaHeart, FaInstagram } from 'react-icons/fa'


function ReviewItem({item}) {
    var review = ""
    item.content.map((reviewItem,index) => {
      if(reviewItem.length > 0) {
        review = review + "Day " + item.day_product_used_content[index] + " : " + reviewItem + '\n'
      }
    })

    var instagramLink = item.instagram_username || item.instagram_username != "" ?("https://www.instagram.com/" + item.instagram_username +"/") :  "https://www.instagram.com/" 

    return (
        item.image_list[0] ? 
        <div className = "flex flex-col w-full lg:flex-row mt-0 lg:mt-3 lg:pt-3 lg:border-t-2 group transition duration-200 ease-in transform ">
            <div className = " lg:w-3/5 lg:mx-auto lg:px-auto justify-center items-center ">
                <div className = "max-w-md md:mx-auto lg:px-auto  ">
                    <a href={instagramLink} 
                        target = "_blank" 
                        rel="noreferrer"
                        className = "text-red-600 text-2xl font-bold cursor-pointer">{item.username}</a>
                    <div className = "flex mx-auto justify-self-center justify-center mt-2 md:mx-auto md:justify-center md:justify-self-center lg:justify-start">
                        <Image
                            alt={item.product_name + " Type : " + item.category_name}
                            src={item.image_list[0]}
                            //layout="responsive"
                            width={300}
                            height={400}
                            className = "object-contain lg:object-cover" 
                            // layout = "fill"
                           
                        />
                    </div>
                </div>
            </div>
            <div className = "lg:w-2/5 lg:mt-0 ">
                <div className = "mt-2 lg:mt-2 mx-3   ">
                    <h3 className = "text-black text-xl font-bold " >{item.product_name}</h3>
                    <p className = "whitespace-pre-line">{review}</p>
                </div>
                <div className = "flex justify-content items-center flex-end px-2">
                    <p className = "flex items-center px-2">{item.upvote ? item.upvote : 0} <FaHeart className = "mx-1"/> </p>
                    <p className = "flex items-center px-2"> {item.number_of_comments ? item.number_of_comments : 0} <FaComments className = "mx-1"/></p>
                    <a href = {instagramLink}
                      target = "_blank" 
                        rel="noreferrer"
                    className = "flex items-center px-2 text-grey-500 text-xs hover:border-b-2 hover:text-red-500  ">
                        <FaInstagram className = "mx-1"/>View on Instagram
                    </a>
                </div>
            </div>   
            <div  className = "h-1 bg-red-100 mb-2 lg:hidden" />         
        </div> : null
    )
}

export default ReviewItem
