import Link from 'next/link'

function HeaderItem({Icon,title,page}) {
    return (
        <Link href= {page} target="_blank" passHref> 
        <div className="flex flex-col items-center cursor-pointer group w-12 mx-4 md:1/2  hover:text-gray-300  ">
            <Icon className = "h-6"/>
            <a className = "">{title}</a>
           
        </div>
        </Link>
    )
}

export default HeaderItem
