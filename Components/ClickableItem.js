import Image from 'next/image'

function ClickableItem({src,alt,title}) {
    return (
        <div className = "relative text-center text-white bg-red-100 mx-2 my-2 rounded-xl  ">
            <div className = "blur-sm">
            <Image 
                width={100} 
                height={100} 
                layout="responsive"
                src={src} 
                alt={alt}/>
            </div>
            <p className = "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">{title}</p>
        </div>
    )
}

export default ClickableItem
