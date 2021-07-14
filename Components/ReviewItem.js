import Image from 'next/image'

import { BiHeart } from 'react-icons/bi'
import { FaComments, FaHeart } from 'react-icons/fa'


function ReviewItem({item}) {
    var review = ""
    item.content.map((reviewItem,index) => {
      if(reviewItem.length > 0) {
        review = review + "Day " + item.day_product_used_content[index] + ": " + reviewItem + "\n"
      }
    })
    return (
        item.image_list[0] ? 
        <div className = "flex flex-col w-full lg:flex-row mt-1 group transition duration-200 ease-in transform ">
            <div className = "lg:w-2/3 lg:mx-auto lg:px-auto justify-center items-center">
                <div className = "max-w-2xl md:mx-auto lg:px-auto ">
                    <a href="https://www.instagram.com/kandurisv/" target = "_blank" className = "text-red-600 text-2xl font-bold cursor-pointer">{item.username}</a>
                    <div className = "mt-2 md:mx-auto md:justify-center md:justify-self-center bg-green-100">
                        <Image
                            alt={item.product_name + " Type : " + item.category_name}
                            src={item.image_list[0]}
                            layout="responsive"
                            width={400}
                            height={400}
                        />
                    </div>
                </div>
            </div>
            <div className = "lg:w-1/3 lg:mt-10">
                <div className = "mt-2 lg:mt-10 mx-3  ">
                    <p className = "text-black text-xl font-bold " >{item.product_name}</p>
                    <p>{review}</p>
                </div>
                <div className = "flex justify-content items-center flex-end px-2">
                    <p className = "flex items-center px-2">{item.upvote ? item.upvote : 0} <FaHeart className = "mx-1"/> </p>
                    <p className = "flex items-center px-2"> {item.number_of_comments ? item.number_of_comments : 0} <FaComments className = "mx-1"/></p>
                </div>
            </div>   
            <div  className = "h-1 bg-red-100 mb-2 lg:hidden" />         
        </div> : null
    )
}

export default ReviewItem
