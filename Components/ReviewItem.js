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
        <div className = "max-w-xl mt-1 p-2 group transition duration-200 ease-in transform ">
            <h2 className = "text-red-600 text-2xl ">{item.username}</h2>
            <Image
                alt={item.product_name + " Type : " + item.category_name}
                src={item.image_list[0]}
                layout="responsive"
                width={400}
                height={400}
            />
            <div className = "mt-2 mx-2 ">
                <p className = "text-gray-100 text-xl " >{item.product_name}</p>
                <p>{review}</p>
            </div>
            <div className = "flex justify-content items-center flex-end px-2">
                <p className = "flex items-center px-2">{item.upvote ? item.upvote : 0} <FaHeart className = "mx-1"/> </p>
                <p className = "flex items-center px-2"> {item.number_of_comments ? item.number_of_comments : 0} <FaComments className = "mx-1"/></p>
            </div>   
            <div  className = "h-1 bg-red-100 mb-2" />         
        </div> : null
    )
}

export default ReviewItem
