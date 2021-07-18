import Link from 'next/link'

function HeaderItem({Icon,title,page}) {
    return (
        <Link href= {page} passHref> 
        <div className="flex flex-col items-center cursor-pointer group w-12 md:1/2  hover:text-gray-300  ">
            <Icon className = "h-8 mb-0 group-hover:h-6"/>
            <a className = "opacity-0 group-hover:opacity-100 ">{title}</a>
           
        </div>
        </Link>
    )
}

export default HeaderItem
