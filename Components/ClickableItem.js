import Image from 'next/image'
import Link from 'next/link'

const ClickableItem = ({src,alt,title,link}) => {
    return (
        <Link href={link} passHref>
            <div className = "relative text-center text-white mx-2 my-2 rounded-xl cursor-pointer ">
                <div className = "blur-sm bg-black opacity-100" >
                <Image 
                    width={100} 
                    height={100} 
                    layout="responsive"
                    src={src} 
                    alt={alt , title , link  }/>
                </div>
                <p className = "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl lg:text-3xl xl:text-3xl">{title}</p>
            </div>
        </Link>
    )
}

export default ClickableItem
